import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
    res.json(users);
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, name } = req.body ?? {};
    if (!email) return res.status(400).json({ message: "email is required" });
    const created = await prisma.user.create({ data: { email, name: name ?? null } });
    res.status(201).json(created);
  } catch (e) { next(e); }
});

export default router; 