import { Router } from 'express';
import { registrarCompra } from '../controllers/compraController';
import { checkJwt } from '../middlewares/verifyToken';

const router = Router();

// Solo una vez y con el middleware de protección
router.post('/', checkJwt, registrarCompra);

export default router;
