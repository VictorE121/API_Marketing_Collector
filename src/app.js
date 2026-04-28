import prisma from "./config/db.js";

async function test() {
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log(result);
}

test();