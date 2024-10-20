// pages/api/hackathons.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const hackathons = await prisma.hackathon.findMany();
      return res.status(200).json(hackathons);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch hackathons' });
    } finally {
      await prisma.$disconnect();
    }
  }

  if (req.method === 'POST') {
    const { title, description, date, location } = req.body;

    try {
      const newHackathon = await prisma.hackathon.create({
        data: {
          title,
          description,
          date: new Date(date), // Ensure that date is in the correct format
          location,
        },
      });
      return res.status(201).json(newHackathon);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create hackathon' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
