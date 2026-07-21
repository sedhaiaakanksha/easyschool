import {
  listEnrollments,
  createEnrollment,
  editEnrollment,
  removeEnrollment,
} from "../controllers/enrollment.controller";

import express from "express";

const router = express.Router();

router.get("/", listEnrollments);
router.post("/", createEnrollment);
router.put("/:id", editEnrollment);
router.delete("/:id", removeEnrollment);

export default router;
