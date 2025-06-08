"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compraController_1 = require("../controllers/compraController");
const router = (0, express_1.Router)();
router.post('/', compraController_1.registrarCompra);
exports.default = router;
