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
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.ServicePost.createService(req.body);
        res.send({
            success: true,
            message: " Create Service Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.ServicePost.createReview(req.body);
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
const getService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const options = req.query;
    try {
        const result = yield service_service_1.ServicePost.getAllService(options);
        res.send({
            success: true,
            message: " get Service Successfully!",
            data: result,
            total: result.total,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const singleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.ServicePost.singleService(parseInt(req.params.id));
        res.send({
            success: true,
            message: " get Service Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = yield service_service_1.ServicePost.updateService(id, data);
        res.send({
            success: true,
            message: "Category updated Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield service_service_1.ServicePost.deleteService(id);
        res.send({
            success: true,
            message: "Category deleted Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.ServiceController = {
    createService,
    getService,
    singleService,
    updateService,
    deleteService,
    createReview,
};
