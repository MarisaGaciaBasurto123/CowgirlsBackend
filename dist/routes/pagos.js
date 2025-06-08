"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("stripe"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
// ✅ Configurar Stripe sin apiVersion (para evitar el error)
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
// Endpoint para crear pago
router.post("/crear-pago", async (req, res) => {
    const { productos } = req.body;
    try {
        const line_items = productos.map((producto) => ({
            price_data: {
                currency: "mxn",
                product_data: {
                    name: producto.nombre,
                },
                unit_amount: Math.round(producto.precio * 100), // en centavos
            },
            quantity: 1,
        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: "http://localhost:5173/pago-exitoso",
            cancel_url: "http://localhost:5173/pago-cancelado",
        });
        res.json({ url: session.url });
    }
    catch (error) {
        console.error("Error al crear la sesión de pago:", error);
        res.status(500).json({ error: "Error creando la sesión de pago" });
    }
});
exports.default = router;
