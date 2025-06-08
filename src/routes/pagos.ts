import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// ✅ Configurar Stripe con apiVersion compatible con los types instalados
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15", // ✅ Compatible con @types/stripe que tienes
});

// Endpoint para crear pago
router.post("/crear-pago", async (req, res) => {
  const { productos } = req.body;

  try {
    const line_items = productos.map((producto: any) => ({
      price_data: {
        currency: "mxn",
        product_data: {
          name: producto.nombre,
        },
        unit_amount: Math.round(producto.precio * 100),
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
  } catch (error) {
    console.error("Error al crear la sesión de pago:", error);
    res.status(500).json({ error: "Error creando la sesión de pago" });
  }
});

export default router;
