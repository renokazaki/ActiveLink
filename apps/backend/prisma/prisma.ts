import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
//👷開発用
// import { config } from 'dotenv';
// config();

const DATABASE_URL = process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());
