import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.send({
      success: true,
      message: " Create Category Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategory();
    res.send({
      success: true,
      message: "Get All Category Successfully! ",
      data: result,
      // total: result.total,
    });
  } catch (err) {
    res.send(err);
  }
};
const singleCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.singelCategory(
      parseInt(req.params.id)
    );
    res.send({
      success: true,
      message: "Get Single Category Successfully! ",
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
    const result = await CategoryService.updatePost(id, data);
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
    const result = await CategoryService.deletePost(id);
    res.send({
      success: true,
      message: " deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const CategoryController = {
  createCategory,
  getAllCategory,
  singleCategory,
  updatePost,
  deletePost,
};
