import express from "express";
import {
  listTeacher,
  addTeacher,
  editTeacher,
  removeTeacher,
} from "../controllers/teacher.controller";

const router = express.Router();

router.get("/", listTeacher);
router.post("/", addTeacher);
router.put("/:id", editTeacher);
router.delete("/:id", removeTeacher);

export default router;
