"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducirStock = exports.eliminarProducto = exports.actualizarProducto = exports.obtenerProductoPorId = exports.eliminarTodosLosProductos = exports.crearProductosMasivo = exports.crearProducto = exports.obtenerProductosPorCategoria = exports.obtenerProductos = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
// ✅ GET todos los productos
const obtenerProductos = async (_req, res) => {
    const productos = await Producto_1.default.find();
    res.json(productos);
};
exports.obtenerProductos = obtenerProductos;
// ✅ GET por categoría
const obtenerProductosPorCategoria = async (req, res) => {
    const { categoria } = req.params;
    const productos = await Producto_1.default.find({ categoria });
    res.json(productos);
};
exports.obtenerProductosPorCategoria = obtenerProductosPorCategoria;
// ✅ POST uno
const crearProducto = async (req, res) => {
    const nuevoProducto = new Producto_1.default(req.body);
    const guardado = await nuevoProducto.save();
    res.status(201).json(guardado);
};
exports.crearProducto = crearProducto;
// ✅ POST masivo
const crearProductosMasivo = async (req, res) => {
    const resultado = await Producto_1.default.insertMany(req.body);
    res.status(201).json(resultado);
};
exports.crearProductosMasivo = crearProductosMasivo;
// ✅ DELETE todos
const eliminarTodosLosProductos = async (_req, res) => {
    await Producto_1.default.deleteMany({});
    res.json({ mensaje: 'Todos eliminados' });
};
exports.eliminarTodosLosProductos = eliminarTodosLosProductos;
// ✅ GET por ID
const obtenerProductoPorId = async (req, res) => {
    const producto = await Producto_1.default.findById(req.params.id);
    res.json(producto);
};
exports.obtenerProductoPorId = obtenerProductoPorId;
// ✅ PUT
const actualizarProducto = async (req, res) => {
    const actualizado = await Producto_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};
exports.actualizarProducto = actualizarProducto;
// ✅ DELETE por ID
const eliminarProducto = async (req, res) => {
    await Producto_1.default.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Eliminado' });
};
exports.eliminarProducto = eliminarProducto;
// ✅ PATCH para reducir stock
const reducirStock = async (req, res) => {
    const producto = await Producto_1.default.findById(req.params.id);
    if (producto && producto.stock > 0) {
        producto.stock -= 1;
        await producto.save();
        res.json({ mensaje: 'Stock reducido', producto });
    }
    else {
        res.status(400).json({ error: 'No hay stock disponible' });
    }
};
exports.reducirStock = reducirStock;
