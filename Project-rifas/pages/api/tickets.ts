import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { generateRandomTicketNumber } from '../../lib/rng';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  let ticketNumber: number;
  let tries = 0;
  do {
    ticketNumber = generateRandomTicketNumber(100000, 999999);
    const existing = await prisma.ticket.findUnique({ where: { number: ticketNumber } });
    if (!existing) break;
    tries++;
  } while (tries < 5);
  if (tries === 5) {
    return res.status(500).json({ error: 'Could not generate unique ticket number' });
  }
  const ticket = await prisma.ticket.create({
    data: { name, email, number: ticketNumber }
  });
  res.status(201).json({ ticket });
} 