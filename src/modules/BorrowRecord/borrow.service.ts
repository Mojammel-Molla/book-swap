import { prisma } from '../../shared/prisma';

const createBorrowIntoDB = async (borrowData: any) => {
  const borrowedBookData = {
    borrowDate: borrowData.borrowDate,
    returnDate: borrowData.returnDate,
    bookId: borrowData.bookId,
    memberId: borrowData.memberId,
  };
  console.log(borrowedBookData);
  const result = await prisma.borrowRecord.create({
    data: borrowedBookData,
  });
  return result;
};

const getAllBorrowsFromDB = async () => {
  const result = await prisma.borrowRecord.findMany();
  return result;
};

export const BorrowServices = {
  createBorrowIntoDB,
  getAllBorrowsFromDB,
};
