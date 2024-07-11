import { Router } from 'express';
import { createHydrationGoal, getHydrationGoals } from '../controllers/hydrationGoalController';

const hydrationGoalRouter = Router();

hydrationGoalRouter.post('/', createHydrationGoal);
hydrationGoalRouter.get('/', getHydrationGoals);

export { hydrationGoalRouter };
