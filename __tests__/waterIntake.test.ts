import app from '../src/app'
import request from "supertest";
import prisma from '../src/prismaClient';

describe('GET /waterIntakes', () => {
    afterAll(async () => {
      await prisma.$disconnect(); // Déconnecter Prisma après les tests
    });
  
    it('should return a list of water intakes', async () => {
      const response = await request(app).get('/water-intake/');
      
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
  
      if (response.body.length > 0) {
        expect(response.body[0]).toHaveProperty('quantity');
        expect(response.body[0]).toHaveProperty('timestamp');
      } else {
        console.log('No water intakes found in the database.');
      }
    });
  });