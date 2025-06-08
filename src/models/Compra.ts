import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  nombre: String,
  precio: Number,
  cantidad: Number,
  talla: String,
});

const compraSchema = new mongoose.Schema({
  productos: [productoSchema],
  total: Number,
  usuario: {
    nombre: String,
    email: String,
  },
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model('Compra', compraSchema);
