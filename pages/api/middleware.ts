import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const currentTime = new Date().toLocaleTimeString();
  await new Promise((resolve) => setTimeout(resolve, 500));
  res.status(200).json({ currentTime });
}
