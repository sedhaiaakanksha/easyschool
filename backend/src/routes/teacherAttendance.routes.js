import express from "express";
import {
  listTeacherAttendance,
  createTeacherAttendance,
  listTeacherAttendanceById,
  listTeacherAttendanceByTeacherId,
  editTeacherAttendance,
  removeTeacherAttendance,
} from "../controllers/teacherAttendance.controller";

import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

const router = express.Router();

router.get(
  "/my-attendance",
  verifyToken,
  restrictTo("teacher"),
  listTeacherAttendanceByTeacherId,
);
router.get(
  "/:id",
  verifyToken,
  restrictTo("rte_admin", "academy_admin"),
  listTeacherAttendanceById,
);
router.get(
  "/",
  verifyToken,
  restrictTo("ssd_admin", "rte_admin", "academy_admin"),
  listTeacherAttendance,
);
router.post(
  "/",
  verifyToken,
  restrictTo("academy_admin"),
  createTeacherAttendance,
);
router.put(
  "/:id",
  verifyToken,
  restrictTo("academy_admin"),
  editTeacherAttendance,
);
router.delete(
  "/:id",
  verifyToken,
  restrictTo("academy_admin"),
  removeTeacherAttendance,
);

export default router;
