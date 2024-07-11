import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
