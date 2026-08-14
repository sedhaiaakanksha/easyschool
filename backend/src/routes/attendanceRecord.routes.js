import {
  listAttendanceRecords,
  createAttendanceRecord,
  editAttendanceRecord,
  removeAttendanceRecord,
  listMyAttendanceRecord,
  listAttendanceRecordById,
} from "../controllers/attendanceRecord.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get(
  "/my-attendance",
  verifyToken,
  restrictTo("student"),
  listMyAttendanceRecord,
);
router.get(
  "/:id",
  verifyToken,
  restrictTo("ssd_admin", "academy_admin"),
  listAttendanceRecordById,
);
router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "ssd_admin"),
  listAttendanceRecords,
);

router.post(
  "/",
  verifyToken,
  restrictTo("academy_admin"),
  createAttendanceRecord,
);
router.put(
  "/:id",
  verifyToken,
  restrictTo("academy_admin"),
  editAttendanceRecord,
);
router.delete(
  "/:id",
  verifyToken,
  restrictTo("academy_admin"),
  removeAttendanceRecord,
);

export default router;
