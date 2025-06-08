"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compraController_1 = require("../controllers/compraController");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = (0, express_1.Router)();
// Solo una vez y con el middleware de protección
router.post('/', verifyToken_1.checkJwt, compraController_1.registrarCompra);
exports.default = router;
