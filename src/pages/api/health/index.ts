// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('>>> TEST HEALT PLP ✅ <<<');
  res.status(200).json({ message: 'healt test' });
}