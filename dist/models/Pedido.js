"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PedidoSchema = new mongoose_1.default.Schema({
    usuarioId: { type: String, required: true },
    productos: { type: Array, required: true }, // 👈 ESTE CAMPO ES OBLIGATORIO
    fechaPedido: { type: Date, default: Date.now },
    estado: {
        type: String,
        enum: ["pendiente", "enviado", "entregado"],
        default: "pendiente"
    },
    total: { type: Number, required: true }
});
exports.default = mongoose_1.default.model("Pedido", PedidoSchema);
