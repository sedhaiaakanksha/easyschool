import {
  listAttendanceRecords,
  createAttendanceRecord,
  editAttendanceRecord,
  removeAttendanceRecord,
} from "../controllers/attendanceRecord.controller";

import express from "express";

const router = express.Router();

router.get("/", listAttendanceRecords);
router.post("/", createAttendanceRecord);
router.put("/:id", editAttendanceRecord);
router.delete("/:id", removeAttendanceRecord);

export default router;
