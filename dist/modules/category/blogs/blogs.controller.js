"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
const blogs_service_1 = require("./blogs.service");
const createBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blogs_service_1.BlogsService.createBlogs(req.body);
        res.send({
            success: true,
            message: " Create Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blogs_service_1.BlogsService.getAllBlogs();
        res.send({
            success: true,
            message: "Get All Blogs Successfully! ",
            data: result,
            total: result.total,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const singleBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blogs_service_1.BlogsService.singleBlogs(parseInt(req.params.id));
        res.send({
            success: true,
            message: "Get Single Blogs Successfully! ",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = yield blogs_service_1.BlogsService.updateBlogs(id, data);
        res.send({
            success: true,
            message: " updated Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield blogs_service_1.BlogsService.deleteBlogs(id);
        res.send({
            success: true,
            message: " deleted Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.BlogsController = {
    createBlogs,
    getAllBlogs,
    singleBlogs,
    updatePost,
    deletePost,
};
