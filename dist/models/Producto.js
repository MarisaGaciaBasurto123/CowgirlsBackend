"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Producto.ts
const mongoose_1 = __importDefault(require("mongoose"));
const productoSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    imagenUrl: { type: String },
    categoria: { type: String, required: true },
    stock: { type: Number, default: 0 }
}, { timestamps: true });
const Producto = mongoose_1.default.model('Producto', productoSchema);
exports.default = Producto;
