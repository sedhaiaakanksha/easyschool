import express from "express";
import {
  listExamResults,
  createExamResult,
  editExamResult,
  removeExamResult,
  listMyExamResult,
  listExamResultById,
} from "../controllers/examResult.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "rte_admin"),
  listExamResults,
);
router.get(
  "/my-examresult",
  verifyToken,
  restrictTo("student"),
  listMyExamResult,
);
router.get(
  "/:id",
  verifyToken,
  restrictTo("academy_admin", "rte_admin"),
  listExamResultById,
);
router.post("/", verifyToken, restrictTo("academy_admin"), createExamResult);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editExamResult);
router.delete(
  "/:id",
  verifyToken,
  restrictTo("academy_admin"),
  removeExamResult,
);

export default router;
