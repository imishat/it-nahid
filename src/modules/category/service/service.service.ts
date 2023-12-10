import { PrismaClient, Service } from "@prisma/client";

const prisma = new PrismaClient();
const createService = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

const getAllService = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  const result = await prisma.service.findMany({
    skip,
    take,
    include: {
      category: true,
    },
    //data send by time or value
    orderBy:
      sortBy && sortOrder
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

  return result;
};

const singleService = async (id: number) => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
    include: {
      Reviews: true,
    },
  });
  return result;
};
const updateService = async (
  id: number,
  payload: Partial<Service>
): Promise<Service | number> => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteService = async (id: number): Promise<Service> => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });
  return result;
};
export const ServicePost = {
  createService,
  getAllService,
  singleService,
  deleteService,
  updateService,
};
