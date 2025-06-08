"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const pedidoRoutes_1 = __importDefault(require("./routes/pedidoRoutes"));
const compraRoutes_1 = __importDefault(require("./routes/compraRoutes"));
const pagos_1 = __importDefault(require("./routes/pagos"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use('/api/compras', compraRoutes_1.default);
app.use('/api/productos', productoRoutes_1.default);
app.use('/api/pedidos', pedidoRoutes_1.default);
app.use('/api/pagos', pagos_1.default);
app.get('/', (_req, res) => {
    res.send('✅ API Cowgirls Style funcionando correctamente en Render');
});
// Evitar reconexiones infinitas y errores silenciosos
mongoose_1.default.connect(process.env.DB_CONNECTION_STRING || '', {
    // Opcional: puede ayudar en Render
    serverSelectionTimeoutMS: 5000,
})
    .then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    process.exit(1); // Detener si hay error grave
});
