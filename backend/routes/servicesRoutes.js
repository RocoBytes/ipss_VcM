import express from "express";
import { createService, getServices } from "../controllers/servicesController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/", createService);
router.get("/", getServices);


export default router;