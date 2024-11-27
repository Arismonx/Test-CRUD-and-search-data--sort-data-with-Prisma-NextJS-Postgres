/*
  Warnings:

  - You are about to drop the column `catagory` on the `Post` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "catagory",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
