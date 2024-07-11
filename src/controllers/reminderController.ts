import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const createReminder = async (req: Request, res: Response) => {
  try {
    const reminder = await prisma.reminder.create({
      data: req.body,
    });
    res.status(201).send(reminder);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getReminders = async (req: Request, res: Response) => {
  try {
    const reminders = await prisma.reminder.findMany();
    res.status(200).send(reminders);
  } catch (error) {
    res.status(500).send(error);
  }
};
