import {
  listFeeRecords,
  createFeeRecords,
  editFeeRecord,
  removeFeeRecord,
  listMyFeeRecord,
  listFeeRecordById,
} from "../controllers/feeRecord.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { restrictTo } from "../middleware/role.middleware";

import express from "express";

const router = express.Router();

router.get("/", verifyToken, restrictTo("finance_admin"), listFeeRecords);
router.get("/my-record", verifyToken, restrictTo("student"), listMyFeeRecord);
router.get("/:id", verifyToken, restrictTo("finance_admin"), listFeeRecordById);
router.post("/", verifyToken, restrictTo("finance_admin"), createFeeRecords);
router.put("/:id", verifyToken, restrictTo("finance_admin"), editFeeRecord);
router.delete(
  "/:id",
  verifyToken,
  restrictTo("finance_admin"),
  removeFeeRecord,
);

export default router;
