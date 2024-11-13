/*
  Warnings:

  - You are about to drop the column `retrunDate` on the `borrow_records` table. All the data in the column will be lost.
  - Added the required column `returnDate` to the `borrow_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "borrow_records" DROP COLUMN "retrunDate",
ADD COLUMN     "returnDate" TIMESTAMP(3) NOT NULL;
