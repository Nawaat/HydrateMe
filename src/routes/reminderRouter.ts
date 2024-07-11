import { Router } from 'express';
import { createReminder, getReminders } from '../controllers/reminderController';

const reminderRouter = Router();

reminderRouter.post('/', createReminder);
reminderRouter.get('/', getReminders);

export { reminderRouter };
