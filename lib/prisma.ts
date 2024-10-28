import { PrismaClient } from "@prisma/client/extension";

const PrismaClinetSingleton = () => {
    return new PrismaClient()

}

const globlForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
