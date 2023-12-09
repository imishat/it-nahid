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
export const CategoryController = {
  createCategory,
};
