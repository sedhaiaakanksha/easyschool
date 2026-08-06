import {
  listEnrollments,
  createEnrollment,
  editEnrollment,
  removeEnrollment,
} from "../controllers/enrollment.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("rte_admin", "finance_admin", "ssd_admin"),
  listEnrollments,
);
router.post("/", verifyToken, restrictTo("rte_admin"), createEnrollment);
router.put("/:id", verifyToken, restrictTo("rte_admin"), editEnrollment);
router.delete("/:id", verifyToken, restrictTo("rte_admin"), removeEnrollment);

export default router;
