import { PrismaClient } from "@prisma/client";

const prismaClient =  new PrismaClient({
    // log: ["error", "info","query", "warn"],
    log: ["error", "info","warn"],
});

export { prismaClient };