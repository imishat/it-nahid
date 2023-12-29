"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRouters = void 0;
const express_1 = __importDefault(require("express"));
const blogs_controller_1 = require("./blogs.controller");
const router = express_1.default.Router();
router.post("/create-blog", blogs_controller_1.BlogsController.createBlogs);
router.get("/all-blog", blogs_controller_1.BlogsController.getAllBlogs);
router.get("/get-blog/:id", blogs_controller_1.BlogsController.singleBlogs);
router.put("/update-blog/:id", blogs_controller_1.BlogsController.updatePost);
router.delete("/deleted-blog/:id", blogs_controller_1.BlogsController.deletePost);
exports.BlogsRouters = router;
