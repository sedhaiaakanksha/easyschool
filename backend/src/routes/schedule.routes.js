import {
  listSchdeule,
  createSchdeules,
  editSchdule,
  removeSchedule,
} from "../controllers/schedule.controller";

import express from "express";

const router = express.Router();

router.get("/", listSchdeule);
router.post("/", createSchdeules);
router.put("/:id", editSchdule);
router.delete("/:id", removeSchedule);

export default router;
