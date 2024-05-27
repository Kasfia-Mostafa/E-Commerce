import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { PhonesRoutes } from './Products/modules/phones/phones.route';
import { OrdersRoutes } from './Orders/modules/orders/orders.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', PhonesRoutes);
app.use('/api/orders', OrdersRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
