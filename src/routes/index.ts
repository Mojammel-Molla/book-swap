import express from 'express';
import { memberRoutes } from '../modules/Member/member.route';
import { bookRoutes } from '../modules/Book/book.route';
import { borrowRoutes } from '../modules/BorrowRecord/borrow.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: bookRoutes,
  },
  {
    path: '/members',
    route: memberRoutes,
  },
  {
    path: '/borrow',
    route: borrowRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
