import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { PhonesRoutes } from './Products/modules/phones/phones.route';
import { OrdersRoutes } from './Orders/modules/orders/orders.route';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the E-Commerce');
});

// Application routes
app.use('/api/products', PhonesRoutes);
app.use('/api/orders', OrdersRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
