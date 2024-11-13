import { RequestHandler } from 'express';
import catchAsync from '../../shared/catchAsync';
import { BorrowServices } from './borrow.service';

const createBorrow: RequestHandler = catchAsync(async (req, res) => {
  const borrowData = req.body;
  const result = await BorrowServices.createBorrowIntoDB(borrowData);
  res.status(201).json({
    success: true,
    status: 201,
    message: 'Borrow created successfully',
    data: result,
  });
});

const getAllBorrows: RequestHandler = catchAsync(async (req, res) => {
  const result = await BorrowServices.getAllBorrowsFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Borrows retrieved successfully',
    data: result,
  });
});

export const BorrowController = {
  createBorrow,
  getAllBorrows,
};
