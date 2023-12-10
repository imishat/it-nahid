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

const getService = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await ServicePost.getAllService(options);
    res.send({
      success: true,
      message: " get Service Successfully!",
      data: result,
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

export const ServiceController = {
  createService,
  getService,
  singleService,
  updateService,
  deleteService,
};
