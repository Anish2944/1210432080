import express from 'express';
import cors from 'cors';

import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/categories', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
