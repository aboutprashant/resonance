import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// This will ensure that on hot reload, we don't create a new instance of the PrismaClient
const prisma = globalForPrisma.prisma || new PrismaClient({
    adapter,
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma};