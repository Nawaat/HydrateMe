import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routes/userRouter';
import { waterIntakeRouter } from './routes/waterIntakeRouter';
import { reminderRouter } from './routes/reminderRouter';
import { hydrationGoalRouter } from './routes/hydrationGoalRouter';
import prisma from './prismaClient';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    // Essayez de récupérer tous les utilisateurs
    const users = await prisma.user.findMany();
    res.json({ message: 'Connection successful', users });
  } catch (error) {
    res.status(500).json({ message: 'Connection failed' });
  } finally {
    await prisma.$disconnect();
  }
});

app.use('/users', userRouter);
app.use('/water-intake', waterIntakeRouter);
app.use('/reminders', reminderRouter);
app.use('/hydration-goals', hydrationGoalRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
