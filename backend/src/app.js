import express from "express";
import cors from "cors";

import facultyRoutes from "./routes/faculty.routes";
import teacherRoutes from "./routes/teacher.routes";
import classRoutes from "./routes/class.routes";
import studentRoutes from "./routes/student.routes";
import subjectRoutes from "./routes/subjects.routes";
import feeRecordsRoutes from "./routes/feeRecord.routes";
import attendanceRecordsRoutes from "./routes/attendanceRecord.routes";
import schdeuleRoutes from "./routes/schedule.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.use("/api/faculty", facultyRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/feeRecords", feeRecordsRoutes);
app.use("/api/attendanceRecords", attendanceRecordsRoutes);
app.use("/api/schedules", schdeuleRoutes);

export default app;
