import { RequestHandler } from 'express';
import catchAsync from '../../shared/catchAsync';
import { ReturnServices } from './return.service';

const returnBorrow: RequestHandler = catchAsync(async (req, res) => {
  const { borrowId } = req.body;
  console.log(borrowId);
  const result = await ReturnServices.returnBorrowFromDB(borrowId);
  res.status(201).json({
    success: true,
    status: 201,
    message: 'Book return successfully',
    data: result,
  });
});

export const ReturnControllers = {
  returnBorrow,
};
