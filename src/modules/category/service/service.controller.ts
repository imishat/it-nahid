import { Request, Response } from "express";
import { ServicePost } from "./service.service";

const createService = async (req: Request, res: Response) => {
  try {
    const result = await ServicePost.createService(req.body);
    res.send({
      success: true,
      message: " Create Service Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const createReview = async (req: Request, res: Response) => {
  try {
    const result = await ServicePost.createReview(req.body);
    res.send({
      success: true,
      message: " Create Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllReview = async (req: Request, res: Response) => {
  try {
    const result = await ServicePost.getReview();
    res.send({
      success: true,
      message: "All Review Get Successfully!",
      data: result,
      // total: result.total,
    });
  } catch (error) {
    console.error(error);
  }
};
const getService = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await ServicePost.getAllService(options);
    res.send({
      success: true,
      message: " get Service Successfully!",
      data: result,
      // total: result.total,
    });
  } catch (err) {
    res.send(err);
  }
};
const singleService = async (req: Request, res: Response) => {
  try {
    const result = await ServicePost.singleService(parseInt(req.params.id));
    res.send({
      success: true,
      message: " get Service Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updateService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await ServicePost.updateService(id, data);
    res.send({
      success: true,
      message: "Category updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await ServicePost.deleteService(id);
    res.send({
      success: true,
      message: "Category deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteReview = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await ServicePost.deleteReviewOne(id);
    res.send({
      success: true,
      message: "Review deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const ServiceController = {
  createService,
  getService,
  singleService,
  updateService,
  deleteReview,
  getAllReview,
  deleteService,
  createReview,
};
