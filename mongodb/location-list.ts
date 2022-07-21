import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const location = await prisma.location.findMany({
    include: {
      physicalAddress: true
    }
  });

  console.log(location);
}

main();
