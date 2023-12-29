import { Blogs, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBlogs = async (data: Blogs): Promise<Blogs> => {
  const result = await prisma.blogs.create({
    data,
  });
  return result;
};

const getAllBlogs = async () => {
  const result = await prisma.blogs.findMany();
  const total = await prisma.blogs.count();

  return { result, total };
};

const singleBlogs = async (id: number) => {
  const result = await prisma.blogs.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateBlogs = async (
  id: number,
  payload: Partial<Blogs>
): Promise<Blogs | number> => {
  const result = await prisma.blogs.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteBlogs = async (id: number): Promise<Blogs> => {
  const result = await prisma.blogs.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BlogsService = {
  createBlogs,
  getAllBlogs,
  singleBlogs,
  updateBlogs,
  deleteBlogs,
};
