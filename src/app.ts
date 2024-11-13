import express, { Application, Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Book Swap is available',
  });
});

export default app;
