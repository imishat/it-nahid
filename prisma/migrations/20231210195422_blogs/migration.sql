-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "stars" INTEGER NOT NULL,
    "contend" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "Picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
