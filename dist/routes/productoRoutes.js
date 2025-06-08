"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Producto_1 = __importDefault(require("../models/Producto"));
const productoController_1 = require("../controllers/productoController");
const router = (0, express_1.Router)();
// Ruta para eliminar productos por array de IDs
router.delete('/masivo', async (req, res) => {
    try {
        const { ids } = req.body;
        if (!Array.isArray(ids)) {
            return res.status(400).json({ mensaje: "Se esperaba un array de IDs" });
        }
        const resultado = await Producto_1.default.deleteMany({ _id: { $in: ids } });
        res.json({ mensaje: "Productos eliminados correctamente", resultado });
    }
    catch (error) {
        console.error("Error al eliminar productos:", error);
        res.status(500).json({ mensaje: "Error del servidor", error });
    }
});
router.get('/categoria/:categoria', productoController_1.obtenerProductosPorCategoria);
router.get('/', productoController_1.obtenerProductos);
router.post('/', productoController_1.crearProducto);
router.post('/masivo', productoController_1.crearProductosMasivo);
router.delete('/todos', productoController_1.eliminarTodosLosProductos);
router.patch('/stock/:id', productoController_1.reducirStock);
router.get('/:id', productoController_1.obtenerProductoPorId);
router.put('/:id', productoController_1.actualizarProducto);
router.delete('/:id', productoController_1.eliminarProducto);
exports.default = router;
