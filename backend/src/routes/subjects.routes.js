import {
  listSubjects,
  listSubjectByStudent,
  createSubject,
  editSubject,
  removeSubject,
} from "../controllers/subjects.controller";

import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get(
  "/my-subjects",
  verifyToken,
  restrictTo("student", "rte_admin", "academy_admin"),
  listSubjectByStudent,
);
router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "rte_admin"),
  listSubjects,
);
router.post("/", verifyToken, restrictTo("academy_admin"), createSubject);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editSubject);
router.delete("/:id", verifyToken, restrictTo("academy_admin"), removeSubject);

export default router;
