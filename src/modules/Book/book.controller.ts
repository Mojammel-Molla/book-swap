import asyncHandler from 'express-async-handler';
import { BookServices } from './book.service';

const createBook = asyncHandler(async (req, res) => {
  const bookData = req.body;
  const result = await BookServices.createBookIntoDB(bookData);

  res.status(201).json({
    success: true,
    status: 201,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = asyncHandler(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getSingleBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const result = await BookServices.getSingleBookFromDB(bookId);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const updateSingleBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const bookData = req.body;

  const result = await BookServices.updateBookIntoDB(bookId, bookData);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Book update successfully',
    data: result,
  });
});

const deleteBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const result = await BookServices.deleteBookFromDB(bookId);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Book deleted successfully',
    // data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateSingleBook,
  deleteBook,
};
