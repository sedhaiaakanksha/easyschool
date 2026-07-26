import {
  listFeeRecords,
  createFeeRecords,
  editFeeRecord,
  removeFeeRecord,
} from "../controllers/feeRecord.controller";

import express from "express";

const router = express.Router();

router.get("/", listFeeRecords);
router.post("/", createFeeRecords);
router.put("/:id", editFeeRecord);
router.delete("/:id", removeFeeRecord);

export default router;
