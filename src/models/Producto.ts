// src/models/Producto.ts
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  imagenUrl: { type: String },
  categoria: { type: String, required: true },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
