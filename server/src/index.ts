import express from "express";
import cors from "cors";
import projects from "./routes/projects";
import tasks from "./routes/tasks";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/projects", projects);
app.use("/api/tasks", tasks);

// error logger
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: err?.message || "Internal Server Error" });
});

const PORT = Number(process.env.PORT) || 5174;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
