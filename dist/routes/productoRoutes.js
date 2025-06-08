"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
const router = (0, express_1.Router)();
// ✅ CORRECTO: esta línea debe ir antes que cualquier /:id
router.get('/categoria/:categoria', productoController_1.obtenerProductosPorCategoria);
// ✅ Otras rutas
router.get('/', productoController_1.obtenerProductos);
router.post('/', productoController_1.crearProducto);
router.post('/masivo', productoController_1.crearProductosMasivo);
router.delete('/todos', productoController_1.eliminarTodosLosProductos);
router.patch('/stock/:id', productoController_1.reducirStock);
// ✅ Estas rutas con /:id deben ir al final
router.get('/:id', productoController_1.obtenerProductoPorId);
router.put('/:id', productoController_1.actualizarProducto);
router.delete('/:id', productoController_1.eliminarProducto);
exports.default = router;
