import prisma from '../prismaClient';

export const getDailyHydrationHistory = async (userId: string) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const waterIntakes = await prisma.waterIntake.findMany({
    where: {
      userId: userId,
      timestamp: {
        gte: startOfDay,
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  });

  return waterIntakes;
};

export const getMonthlyHydrationHistory = async (userId: string) => {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const waterIntakes = await prisma.waterIntake.findMany({
    where: {
      userId: userId,
      timestamp: {
        gte: startOfMonth,
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  });

  return waterIntakes;
};
