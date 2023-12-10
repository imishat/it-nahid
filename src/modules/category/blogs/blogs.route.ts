import express from "express";
import { BlogsController } from "./blogs.controller";

const router = express.Router();
router.post("/create-blog", BlogsController.createBlogs);
router.get("/all-blog", BlogsController.getAllBlogs);
router.get("/get-blog/:id", BlogsController.singleBlogs);
router.put("/update-blog/:id", BlogsController.updatePost);
router.delete("/deleted-blog/:id", BlogsController.deletePost);
export const BlogsRouters = router;
