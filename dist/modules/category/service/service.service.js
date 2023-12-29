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
exports.ServicePost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.create({
        data,
    });
    return result;
});
const getAllService = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 10;
    const result = yield prisma.service.findMany({
        skip,
        take,
        include: {
            category: true,
        },
        //data send by time or value
        orderBy: sortBy && sortOrder
            ? {
                [sortBy]: sortOrder,
            }
            : { createdAt: "desc" },
        where: {
            OR: [
                {
                    category: {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive",
                        },
                    },
                },
                {
                    title: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    descripton: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
            ],
        },
    });
    const total = yield prisma.service.count();
    return { result, total };
});
const singleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findUnique({
        where: {
            id,
        },
        include: {
            Reviews: true,
        },
    });
    return result;
});
const updateService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.delete({
        where: {
            id,
        },
    });
    return result;
});
const createReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.reviews.create({
        data,
    });
    return result;
});
exports.ServicePost = {
    createService,
    getAllService,
    singleService,
    deleteService,
    updateService,
    createReview,
};
