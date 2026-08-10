import {
  listSchdeule,
  createSchdeules,
  editSchdule,
  removeSchedule,
  getMySchedule,
} from "../controllers/schedule.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get("/my-schedule", verifyToken, restrictTo("student"), getMySchedule);
router.get(
  "/",
  verifyToken,
  restrictTo("academy_admin", "ssd_admin", "student", "rte_admin"),
  listSchdeule,
);
router.post("/", verifyToken, restrictTo("rte_admin"), createSchdeules);
router.put("/:id", verifyToken, restrictTo("rte_admin"), editSchdule);
router.delete("/:id", verifyToken, restrictTo("rte_admin"), removeSchedule);

export default router;
