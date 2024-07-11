import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const createHydrationGoal = async (req: Request, res: Response) => {
  try {
    const hydrationGoal = await prisma.hydrationGoal.create({
      data: req.body,
    });
    res.status(201).send(hydrationGoal);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getHydrationGoals = async (req: Request, res: Response) => {
  try {
    const hydrationGoals = await prisma.hydrationGoal.findMany();
    res.status(200).send(hydrationGoals);
  } catch (error) {
    res.status(500).send(error);
  }
};
