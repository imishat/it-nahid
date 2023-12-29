import { Request, Response } from "express";

import { BlogsService } from "./blogs.service";

const createBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogsService.createBlogs(req.body);
    res.send({
      success: true,
      message: " Create Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogsService.getAllBlogs();
    res.send({
      success: true,
      message: "Get All Blogs Successfully! ",
      data: result,
      // total: result.total,
    });
  } catch (err) {
    res.send(err);
  }
};
const singleBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogsService.singleBlogs(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Get Single Blogs Successfully! ",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await BlogsService.updateBlogs(id, data);
    res.send({
      success: true,
      message: " updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await BlogsService.deleteBlogs(id);
    res.send({
      success: true,
      message: " deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const BlogsController = {
  createBlogs,
  getAllBlogs,
  singleBlogs,
  updatePost,
  deletePost,
};
