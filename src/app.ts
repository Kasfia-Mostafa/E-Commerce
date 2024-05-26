import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { PhonesRoutes } from './Products/modules/phones/phones.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', PhonesRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send("Hello");
});

export default app;
