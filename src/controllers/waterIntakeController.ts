import { Request, Response } from 'express';
import prisma from '../prismaClient';
import { getDailyHydrationHistory, getMonthlyHydrationHistory } from '../services/waterIntakeService';

export const createWaterIntake = async (req: Request, res: Response) => {
  try {
    const waterIntake = await prisma.waterIntake.create({
      data: req.body,
    });
    res.status(201).send(waterIntake);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getWaterIntakes = async (req: Request, res: Response) => {
  try {
    const waterIntakes = await prisma.waterIntake.findMany();
    res.status(200).send(waterIntakes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getDailyHydration = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const waterIntakes = await getDailyHydrationHistory(userId);
    res.status(200).send(waterIntakes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getMonthlyHydration = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const waterIntakes = await getMonthlyHydrationHistory(userId);
    res.status(200).send(waterIntakes);
  } catch (error) {
    res.status(500).send(error);
  }
};