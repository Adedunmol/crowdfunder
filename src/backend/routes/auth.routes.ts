import { Router } from 'express';
import { registerUserController } from '../controllers/auth.controller';
import validateResource from '../middlewares/validateResource';
import { registerUser } from '../schema/user.schema';

const router = Router();

router.route('/register').post(validateResource(registerUser), registerUserController)

router.route('/login')

router.route('/refresh-token')

router.route('/logout')


export default router;