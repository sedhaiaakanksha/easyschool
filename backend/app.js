import express from "express";
import cors from "cors";

import facultyRoutes from "./src/routes/faculty.routes";
import teacherRoutes from "./src/routes/teacher.routes";
import classRoutes from "./src/routes/class.routes";
import studentRoutes from "./src/routes/student.routes";
import subjectRoutes from "./src/routes/subjects.routes";
import feeRecordsRoutes from "./src/routes/feeRecord.routes";
import attendanceRecordsRoutes from "./src/routes/attendanceRecord.routes";
import schdeuleRoutes from "./src/routes/schedule.routes";
import enrollmentRoutes from "./src/routes/enrollment.routes";
import examResultRoutes from "./src/routes/examResult.routes";
import teacherAttendanceRoutes from "./src/routes/teacherAttendance.routes";
import adminRoutes from "./src/routes/admin.routes";

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
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/examResults", examResultRoutes);
app.use("/api/teacher-attendance", teacherAttendanceRoutes);
app.use("/api/admins", adminRoutes);
app.use("/uploads", express.static("uploads"));

export default app;
