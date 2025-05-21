import express from "express";
import { createService, getServices, getServiceById, updateService, deleteService } from "../controllers/servicesController.js";
import { get } from "mongoose";

const router = express.Router();

router.route("/")
    .post(createService)
    .get(getServices);

router.route("/:id")
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService);

export default router;