import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

//👷開発用データベースURLを直接指定
// const DATABASE_URL =
//   "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNDNmMzZiZDktNWYyNS00MDAzLWFjYzYtY2Q2NDAzYzM5ODA2IiwidGVuYW50X2lkIjoiNWNmODVkZWI5NDIwYzk2ZWM4N2UzM2I4Zjg0YzFhMGNkYWE1N2ZkMzM5OTA1ZDE4NzA3MDM3ZmNiMzNmYTAwZCIsImludGVybmFsX3NlY3JldCI6IjUzZjM3YmEzLTFhODctNGFjNy05Mjc5LTM5MTY2ZDNmMmM1YiJ9.rqJvaAUSjy10_aozqN9AtzJr6PV0fPQ_vrmCcc3dqvQ";

//🔥本番用
const DATABASE_URL = process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());
