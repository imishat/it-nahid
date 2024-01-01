import express from "express";
import { ServiceController } from "./service.controller";
const router = express.Router();

router.post("/create-service", ServiceController.createService);
router.post("/create-review", ServiceController.createReview);
router.get("/get-service", ServiceController.getService);
router.get("/get-service/:id", ServiceController.singleService);
router.get("/get-all-reviews", ServiceController.getAllReview);
router.put("/update-service/:id", ServiceController.updateService);
router.delete("/deleted-service/:id", ServiceController.deleteService);
router.delete("/deleted-review/:id", ServiceController.deleteReview);
export const ServiceRoutes = router;
