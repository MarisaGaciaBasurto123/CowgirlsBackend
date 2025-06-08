import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import productoRoutes from './routes/productoRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import compraRoutes from './routes/compraRoutes';
import pagosRoutes from './routes/pagos';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/compras', compraRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagos', pagosRoutes);

app.get('/', (_req, res) => {
  res.send('✅ API Cowgirls Style funcionando correctamente en Render');
});

// Evitar reconexiones infinitas y errores silenciosos
mongoose.connect(process.env.DB_CONNECTION_STRING || '', {
  // Opcional: puede ayudar en Render
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
  process.exit(1); // Detener si hay error grave
});
