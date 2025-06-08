import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import productoRoutes from './routes/productoRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import compraRoutes from './routes/compraRoutes';
import pagosRoutes from './routes/pagos'; // ✅ IMPORTAR

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/compras', compraRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagos', pagosRoutes); // ✅ USAR

app.get('/', (_req, res) => {
  res.send('API Cowgirls Style funcionando');
});

mongoose.connect(process.env.DB_CONNECTION_STRING || '')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error conectando a MongoDB:', err);
  });
