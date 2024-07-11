import { Router } from 'express';
import { createWaterIntake, getWaterIntakes, getDailyHydration, getMonthlyHydration } from '../controllers/waterIntakeController';

const waterIntakeRouter = Router();

waterIntakeRouter.post('/', createWaterIntake);
waterIntakeRouter.get('/', getWaterIntakes);
waterIntakeRouter.get('/daily/:userId', getDailyHydration);
waterIntakeRouter.get('/monthly/:userId', getMonthlyHydration);
export { waterIntakeRouter };
