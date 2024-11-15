import { Book } from '@prisma/client';
import { prisma } from '../../shared/prisma';

const createBookIntoDB = async (data: any) => {
  const bookData = {
    title: data.title,
    genre: data.genre,
    publishedYear: data.publishedYear,
    totalCopies: data.totalCopies,
    availableCopies: data.availableCopies,
  };

  // const isExistBook = await prisma.book.findUnique({
  //   where: {
  //     title: bookData?.title,
  //   },
  // });
  // if (isExistBook) {
  //   return { message: 'Book already exists', book: isExistBook };
  // }

  const result = await prisma.book.create({
    data: bookData,
  });
  return result;
};

const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  return result;
};
const updateBookIntoDB = async (bookId: string, bookData: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: bookData,
  });
  return result;
};

const deleteBookFromDB = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
