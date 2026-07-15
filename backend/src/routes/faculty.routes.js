import express from "express";
import { listFaculty, addFaculty } from "../controllers/faculty.controller";

const router = express.Router();

router.get("/", listFaculty);
router.post("/", addFaculty);

export default router;
