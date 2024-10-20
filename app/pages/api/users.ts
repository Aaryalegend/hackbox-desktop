import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
      },
    });
    res.json(newUser);
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}
