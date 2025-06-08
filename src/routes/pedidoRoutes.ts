import express from 'express';
const router = express.Router();

// Ruta de prueba para pedidos
router.get('/', (_req, res) => {
  res.json({ mensaje: 'Ruta de pedidos funcionando correctamente' });
});

export default router;
