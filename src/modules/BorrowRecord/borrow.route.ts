import express from 'express';
import { BorrowController } from './borrow.controller';

const router = express.Router();

router.post('/', BorrowController.createBorrow);
router.get('/', BorrowController.getAllBorrows);

export const borrowRoutes = router;
