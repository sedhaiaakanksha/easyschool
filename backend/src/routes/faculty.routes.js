import express from "express";
import {
  listFaculty,
  addFaculty,
  editFaculty,
  removeFaculty,
} from "../controllers/faculty.controller";

const router = express.Router();

router.get("/", listFaculty);
router.post("/", addFaculty);
router.put("/:id", editFaculty);
router.delete("/:id", removeFaculty);

export default router;
