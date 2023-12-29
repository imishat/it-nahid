"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const category_route_1 = require("./modules/category/category.route");
const service_route_1 = require("./modules/category/service/service.route");
const blogs_route_1 = require("./modules/category/blogs/blogs.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", category_route_1.CategoryRoutes);
app.use("/api/v1", service_route_1.ServiceRoutes);
app.use("/api/v1", blogs_route_1.BlogsRouters);
exports.default = app;
