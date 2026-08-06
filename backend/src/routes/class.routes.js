import {
  listClass,
  createClass,
  editClass,
  removeClass,
} from "../controllers/class.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "ssd_admin", "rte_admin", "student"),
  listClass,
);
router.post("/", verifyToken, restrictTo("academy_admin"), createClass);
router.put("/:id", verifyToken, restrictTo("academy_admin"), editClass);
router.delete("/:id", verifyToken, restrictTo("academy_admin"), removeClass);

export default router;
