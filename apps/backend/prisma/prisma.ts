import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

//👷開発用データベースURLを直接指定
// const DATABASE_URL =
//   "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZjAzMjcyYzctYzNjYS00NWQzLTg4ZDktNjIwZmU2NTkzNTdjIiwidGVuYW50X2lkIjoiZjA4Y2Y2ZWRkYjY3OGQ5ZTgzYThiZGY5MmMyNzdjNzdmM2FkZTBjOGIwOTI0MGJiYTVmOGQ4YWY3ZjYwNmExZSIsImludGVybmFsX3NlY3JldCI6ImNiYzg1NzNmLTNjNWQtNDc1Zi05YzY0LWIzMjVkZGYwNjgwNSJ9.tOT0f2SLpM9edC4e3_mAUEE9JbK62_j8wS96aRotwp8";

//🔥本番用
const DATABASE_URL = process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());
