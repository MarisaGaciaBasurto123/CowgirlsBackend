import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
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

export default mongoose.model("Pedido", PedidoSchema);
