/*
  Warnings:

  - A unique constraint covering the columns `[bookId]` on the table `borrow_records` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId]` on the table `borrow_records` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "members" ALTER COLUMN "membershipDate" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "borrow_records_bookId_key" ON "borrow_records"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_records_memberId_key" ON "borrow_records"("memberId");
