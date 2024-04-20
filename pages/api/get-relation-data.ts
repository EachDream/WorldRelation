import { WorldRelationQuestionQuery } from '@/types/question';
import fs from 'fs';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRelationDataFromDebugFolder(query: WorldRelationQuestionQuery) {
  try {
    const allUsers = await prisma.relation_main.findMany({
      take: 100,
    })  
    console.log(allUsers)
    return allUsers;
  } catch (error) {}

}
  

// export const getRelationDataFromDebugFolder = (
//   query: WorldRelationQuestionQuery,
// ) => {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
//   try {
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const fileContentArray = fileContent.split('\n');
//     const first100Items = fileContentArray.slice(0, 50);
//     return first100Items;
//   } catch (error) {}
// };
