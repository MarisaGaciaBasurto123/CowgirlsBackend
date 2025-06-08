
import { Router } from 'express';
import {
  obtenerProductos,
  crearProducto,
  crearProductosMasivo,
  eliminarTodosLosProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
  obtenerProductosPorCategoria,
  reducirStock
} from '../controllers/productoController';

const router = Router();

// ✅ CORRECTO: esta línea debe ir antes que cualquier /:id
router.get('/categoria/:categoria', obtenerProductosPorCategoria);

// ✅ Otras rutas
router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.post('/masivo', crearProductosMasivo);
router.delete('/todos', eliminarTodosLosProductos);
router.patch('/stock/:id', reducirStock);

// ✅ Estas rutas con /:id deben ir al final
router.get('/:id', obtenerProductoPorId);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
