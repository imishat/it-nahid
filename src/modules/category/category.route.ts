import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();
router.post("/create-category", CategoryController.createCategory);
router.get("/all-category", CategoryController.getAllCategory);
router.get("/all-category/:id", CategoryController.singleCategory);
router.get("/update-category/:id", CategoryController.updatePost);
router.delete("/Deleted-category/:id", CategoryController.deletePost);
export const CategoryRoutes = router;
