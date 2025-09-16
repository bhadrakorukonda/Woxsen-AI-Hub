import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
    res.json(categories);
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) return res.status(404).json({ message: "Not found" });
    res.json(category);
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body ?? {};
    if (!name) return res.status(400).json({ message: "name is required" });
    const created = await prisma.category.create({ data: { name, description: description ?? null } });
    res.status(201).json(created);
  } catch (e) { next(e); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, description } = req.body ?? {};
    const updated = await prisma.category.update({ where: { id }, data: { name, description } });
    res.json(updated);
  } catch (e) { next(e); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.tool.deleteMany({ where: { categoryId: id } });
    await prisma.category.delete({ where: { id } });
    res.status(204).end();
  } catch (e) { next(e); }
});

export default router; 