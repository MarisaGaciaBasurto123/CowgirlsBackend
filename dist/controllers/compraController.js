"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarCompra = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Compra_1 = __importDefault(require("../models/Compra"));
exports.registrarCompra = (0, express_async_handler_1.default)(async (req, res) => {
    const { productos, total, usuario } = req.body;
    const nuevaCompra = new Compra_1.default({ productos, total, usuario });
    await nuevaCompra.save();
    res.status(201).json({ mensaje: 'Compra guardada correctamente' });
});
