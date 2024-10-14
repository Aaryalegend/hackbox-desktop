// pages/api/hackathons.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, date, time, location } = req.body;

    // Here you can implement the logic to save the hackathon details to your database

    return res.status(201).json({ message: 'Hackathon created successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
