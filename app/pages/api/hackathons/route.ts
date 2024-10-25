// app/api/hackathons/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET Request Handler
export async function GET() {
  try {
    const hackathons = await prisma.hackathon.findMany();
    return NextResponse.json(hackathons, { status: 200 });
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 });
  }
}

// POST Request Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, date, location } = body;

    const newHackathon = await prisma.hackathon.create({
      data: {
        title,
        description,
        date: new Date(date), // Ensure correct date format
        location,
      },
    });

    return NextResponse.json(newHackathon, { status: 201 });
  } catch (error) {
    console.error('Error creating hackathon:', error);
    return NextResponse.json({ error: 'Failed to create hackathon' }, { status: 500 });
  }
}
