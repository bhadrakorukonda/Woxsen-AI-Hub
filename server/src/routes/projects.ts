import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const router = Router();

const CreateProject = z.object({
  name: z.string().min(1, "name is required"),
  description: z.string().optional(),
});

router.get("/", async (_req, res) => {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  res.json(projects);
});

router.post("/", async (req, res) => {
  const parsed = CreateProject.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const project = await prisma.project.create({ data: parsed.data });
  res.status(201).json(project);
});

router.get("/:id", async (req, res) => {
  const project = await prisma.project.findUnique({
    where: { id: req.params.id },
    include: { tasks: true },
  });
  if (!project) return res.status(404).json({ message: "Not found" });
  res.json(project);
});

router.delete("/:id", async (req, res) => {
  await prisma.project.delete({ where: { id: req.params.id } }).catch(() => null);
  res.status(204).end();
});

export default router;
