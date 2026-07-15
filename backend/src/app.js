import express from "express";
import cors from "cors";

import facultyRoutes from "./routes/faculty.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.use("/api/faculty", facultyRoutes);

export default app;
