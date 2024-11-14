import express, { Application, Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(globalErrorHandler);
// app.use(notFound);

app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Book Swap is available',
  });
});

export default app;
