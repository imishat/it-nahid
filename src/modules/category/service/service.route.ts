import express from "express";
import { ServiceController } from "./service.controller";
const router = express.Router();

router.post("/create-service", ServiceController.createService);
router.get("/get-service", ServiceController.getService);
router.get("/get-service/:id", ServiceController.singleService);
router.put("/update-service/:id", ServiceController.updateService);
router.delete("/deleted-service/:id", ServiceController.deleteService);
export const ServiceRoutes = router;
