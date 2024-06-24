import { Request, Response } from 'express';
import prisma from '../prismaClient';

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
