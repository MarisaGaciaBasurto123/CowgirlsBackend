import { Request, Response } from 'express';
import Producto from '../models/Producto';

// ✅ GET todos los productos
export const obtenerProductos = async (_req: Request, res: Response) => {
  const productos = await Producto.find();
  res.json(productos);
};

// ✅ GET por categoría
export const obtenerProductosPorCategoria = async (req: Request, res: Response) => {
  const { categoria } = req.params;
  const productos = await Producto.find({ categoria });
  res.json(productos);
};

// ✅ POST uno
export const crearProducto = async (req: Request, res: Response) => {
  const nuevoProducto = new Producto(req.body);
  const guardado = await nuevoProducto.save();
  res.status(201).json(guardado);
};

// ✅ POST masivo
export const crearProductosMasivo = async (req: Request, res: Response) => {
  const resultado = await Producto.insertMany(req.body);
  res.status(201).json(resultado);
};

// ✅ DELETE todos
export const eliminarTodosLosProductos = async (_req: Request, res: Response) => {
  await Producto.deleteMany({});
  res.json({ mensaje: 'Todos eliminados' });
};

// ✅ GET por ID
export const obtenerProductoPorId = async (req: Request, res: Response) => {
  const producto = await Producto.findById(req.params.id);
  res.json(producto);
};

// ✅ PUT
export const actualizarProducto = async (req: Request, res: Response) => {
  const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

// ✅ DELETE por ID
export const eliminarProducto = async (req: Request, res: Response) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Eliminado' });
};

// ✅ PATCH para reducir stock
export const reducirStock = async (req: Request, res: Response) => {
  const producto = await Producto.findById(req.params.id);
  if (producto && producto.stock > 0) {
    producto.stock -= 1;
    await producto.save();
    res.json({ mensaje: 'Stock reducido', producto });
  } else {
    res.status(400).json({ error: 'No hay stock disponible' });
  }
};
