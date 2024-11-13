import express from 'express';
import { memberRoutes } from '../modules/Member/member.route';
import { bookRoutes } from '../modules/Book/book.route';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
