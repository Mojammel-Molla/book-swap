import { prisma } from '../../shared/prisma';

const returnBorrowFromDB = async (borrowId: string) => {
  const result = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
    },
  });

  return result;
};

export const ReturnServices = {
  returnBorrowFromDB,
};
