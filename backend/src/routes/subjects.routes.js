import {
  listSubjects,
  createSubject,
  editSubject,
  removeSubject,
} from "../controllers/subjects.controller";

import express from "express";

const router = express.Router();

router.get("/", listSubjects);
router.post("/", createSubject);
router.put("/:id", editSubject);
router.delete("/:id", removeSubject);

export default router;
