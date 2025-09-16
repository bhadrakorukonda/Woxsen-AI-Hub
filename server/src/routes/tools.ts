import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { categoryId, featured } = req.query as { categoryId?: string; featured?: string };
    const tools = await prisma.tool.findMany({
      where: {
        categoryId: categoryId ? Number(categoryId) : undefined,
        featured: featured === undefined ? undefined : featured === "true",
      },
      include: { category: true },
      orderBy: { name: "asc" },
    });
    res.json(tools);
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const tool = await prisma.tool.findUnique({ where: { id }, include: { category: true } });
    if (!tool) return res.status(404).json({ message: "Not found" });
    res.json(tool);
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description, url, categoryId, featured } = req.body ?? {};
    if (!name || !url || !categoryId) return res.status(400).json({ message: "name, url, categoryId are required" });
    const created = await prisma.tool.create({
      data: {
        name,
        description: description ?? null,
        url,
        featured: Boolean(featured ?? false),
        category: { connect: { id: Number(categoryId) } },
      },
      include: { category: true },
    });
    res.status(201).json(created);
  } catch (e) { next(e); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, description, url, categoryId, featured } = req.body ?? {};
    const updated = await prisma.tool.update({
      where: { id },
      data: {
        name,
        description,
        url,
        featured: featured === undefined ? undefined : Boolean(featured),
        categoryId: categoryId === undefined ? undefined : Number(categoryId),
      },
      include: { category: true },
    });
    res.json(updated);
  } catch (e) { next(e); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.tool.delete({ where: { id } });
    res.status(204).end();
  } catch (e) { next(e); }
});

export default router; 