import express, { Application } from "express";
import cors from "cors";
import { CategoryRoutes } from "./modules/category/category.route";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", CategoryRoutes);
export default app;
