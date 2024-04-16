import { WorldRelationQuestionQuery } from '@/types/question';
import fs from 'fs';

export const getRelationDataFromDebugFolder = (
  query: WorldRelationQuestionQuery,
) => {
  const filePath = './debugging.data';

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileContentArray = fileContent.split('\n');
    const first100Items = fileContentArray.slice(0, 500);
    return first100Items;
  } catch (error) {}
};
