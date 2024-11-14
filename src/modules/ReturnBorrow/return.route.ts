import express from 'express';
import { ReturnControllers } from './return.controller';

const router = express.Router();

router.post('/', ReturnControllers.returnBorrow);

export const returnRoutes = router;
