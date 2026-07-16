import {
  listClass,
  createClass,
  editClass,
  removeClass,
} from "../controllers/class.controller";

import express from "express";

const router = express.Router();

router.get("/", listClass);
router.post("/", createClass);
router.put("/:id", editClass);
router.delete("/:id", removeClass);

export default router;
