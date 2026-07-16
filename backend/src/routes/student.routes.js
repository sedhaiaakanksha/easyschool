import {
  listStudent,
  createStudent,
  editStudent,
  removeStudent,
} from "../controllers/student.controller";

import express from "express";

const router = express.Router();

router.get("/", listStudent);
router.post("/", createStudent);
router.put("/:id", editStudent);
router.delete("/:id", removeStudent);

export default router;
