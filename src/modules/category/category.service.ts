import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategory = async () => {
  const result = await prisma.category.findMany();

  return result;
};

const singelCategory = async (id: number) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      Service: true,
    },
  });
  return result;
};
const updatePost = async (
  id: number,
  payload: Partial<Category>
): Promise<Category | number> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletePost = async (id: number): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  singelCategory,
  updatePost,
  deletePost,
};
