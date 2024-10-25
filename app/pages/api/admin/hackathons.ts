import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma'; // Assuming you have prisma setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const hackathons = await prisma.hackathon.findMany(); // Fetch all hackathons
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching hackathons' });
  }
}
