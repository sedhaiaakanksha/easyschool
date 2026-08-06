import express from "express";
import {
  listFaculty,
  addFaculty,
  editFaculty,
  removeFaculty,
} from "../controllers/faculty.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "ssd_admin"),
  listFaculty,
);
router.post("/", verifyToken, restrictTo("academy_admin"), addFaculty);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editFaculty);
router.delete("/:id", verifyToken, restrictTo("academy_admin"), removeFaculty);

export default router;
