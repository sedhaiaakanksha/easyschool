import express from "express";
import {
  listExamResults,
  createExamResult,
  editExamResult,
  removeExamResult,
} from "../controllers/examResult.controller";

const router = express.Router();

router.get("/", listExamResults);
router.post("/", createExamResult);
router.put("/:id", editExamResult);
router.delete("/:id", removeExamResult);

export default router;
