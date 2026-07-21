import {
  listFeeRecords,
  createFeeRecords,
  editFeeRecord,
  removeFeeRecord,
} from "../controllers/feeRecord.controller";

import express from "express";

const routes = express.Routes();

routes.get("/", listFeeRecords);
routes.post("/", createFeeRecords);
routes.put("/:id", editFeeRecord);
routes.delete("/:id", removeFeeRecord);
