import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Compra from '../models/Compra';

export const registrarCompra = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  console.log("📥 Datos recibidos en /api/compras:", req.body);

  const { productos, total, usuario } = req.body;

  if (!productos || productos.length === 0 || !total || !usuario) {
    res.status(400).json({ mensaje: "❌ Faltan datos en la compra" });
    return;
  }

  const nuevaCompra = new Compra({ productos, total, usuario });
  await nuevaCompra.save();

  res.status(201).json({ mensaje: '✅ Compra guardada correctamente' });
});
