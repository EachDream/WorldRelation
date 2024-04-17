import { NextApiRequest, NextApiResponse } from 'next';
import { getRelationDataFromDebugFolder } from './get-relation-data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = getRelationDataFromDebugFolder({ name: '' });
  res.status(200).json(data);
}
