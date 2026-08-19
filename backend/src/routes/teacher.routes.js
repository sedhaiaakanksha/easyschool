import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";
import {
  listTeacher,
  createTeacher,
  editTeacher,
  removeTeacher,
  registerTeacher,
  loginTeacher,
} from "../controllers/teacher.controller";
import { upload } from "../middleware/upload.middleware";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("rte_admin", "academy_admin"),
  listTeacher,
);
router.post("/", verifyToken, restrictTo("academy_admin"), createTeacher);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editTeacher);
router.delete("/:id", verifyToken, restrictTo("academy_admin"), removeTeacher);

router.post("/register", upload.single("profile_picture"), registerTeacher);
router.post("/login", loginTeacher);

export default router;
