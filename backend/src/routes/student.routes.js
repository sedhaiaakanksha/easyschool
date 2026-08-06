import {
  listStudent,
  createStudent,
  editStudent,
  removeStudent,
  registerStudent,
  loginStudent,
} from "../controllers/student.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("rte_admin", "ssd_admin", "finance_admin"),
  listStudent,
);
router.post("/", verifyToken, restrictTo("rte_admin"), createStudent);
router.put("/:id", verifyToken, restrictTo("rte_admin"), editStudent);
router.delete("/:id", verifyToken, restrictTo("rte_admin"), removeStudent);
router.post("/register", registerStudent);
router.post("/login", loginStudent);

export default router;
