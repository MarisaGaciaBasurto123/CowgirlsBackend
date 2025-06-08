"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkJwt_1 = require("../middlewares/checkJwt");
const router = express_1.default.Router();
// Ruta protegida
router.post('/crear', checkJwt_1.checkJwt, (req, res) => {
    res.json({
        mensaje: 'Pedido creado correctamente',
        usuario: req.auth // ✅ ya no marca error porque usamos el tipo correcto
    });
});
exports.default = router;
