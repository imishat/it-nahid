"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.post("/create-category", category_controller_1.CategoryController.createCategory);
router.get("/all-category", category_controller_1.CategoryController.getAllCategory);
router.get("/all-category/:id", category_controller_1.CategoryController.singleCategory);
router.get("/update-category/:id", category_controller_1.CategoryController.updatePost);
router.delete("/Deleted-category/:id", category_controller_1.CategoryController.deletePost);
exports.CategoryRoutes = router;
