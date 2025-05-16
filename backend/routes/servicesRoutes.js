import express from "express";
import { getServices } from "../controllers/servicesController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getServices);

export default router;