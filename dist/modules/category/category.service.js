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
exports.CategoryService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.create({
        data,
    });
    return result;
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.findMany();
    const total = yield prisma.category.count();
    return { result, total };
});
const singelCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            Service: true,
        },
    });
    return result;
});
const updatePost = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CategoryService = {
    createCategory,
    getAllCategory,
    singelCategory,
    updatePost,
    deletePost,
};
