import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const router = Router();

const CreateTask = z.object({
  projectId: z.string().min(1, "projectId is required"),
  title: z.string().min(1, "title is required"),
});

router.get("/", async (_req, res) => {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const parsed = CreateTask.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const task = await prisma.task.create({ data: parsed.data });
  res.status(201).json(task);
});

router.patch("/:id", async (req, res) => {
  const { title, done } = req.body as { title?: string; done?: boolean };
  const task = await prisma.task
    .update({ where: { id: req.params.id }, data: { title, done } })
    .catch(() => null);
  if (!task) return res.status(404).json({ message: "Not found" });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await prisma.task.delete({ where: { id: req.params.id } }).catch(() => null);
  res.status(204).end();
});

export default router;
