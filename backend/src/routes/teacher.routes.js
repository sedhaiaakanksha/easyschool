import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";
import {
  listTeacher,
  addTeacher,
  editTeacher,
  removeTeacher,
} from "../controllers/teacher.controller";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("rte_admin", "academy_admin"),
  listTeacher,
);
router.post("/", verifyToken, restrictTo("academy_admin"), addTeacher);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editTeacher);
router.delete("/:id", verifyToken, restrictTo("academy_admin"), removeTeacher);

export default router;
