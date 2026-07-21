import express from "express";
import {
  listTeacherAttendance,
  createTeacherAttendance,
  editTeacherAttendance,
  removeTeacherAttendance,
} from "../controllers/teacherAttendance.controller";

const router = express.Router();

router.get("/", listTeacherAttendance);
router.post("/", createTeacherAttendance);
router.put("/:id", editTeacherAttendance);
router.delete("/:id", removeTeacherAttendance);

export default router;
