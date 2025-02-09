import { PrismaClient } from '../../../database/prisma/generated/client-deno/deno/edge.ts';
export const prisma = new PrismaClient();
export type Prisma = typeof prisma;
