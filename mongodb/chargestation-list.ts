import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const chargestations = await prisma.chargestation.findMany({
    include: {
      physicalAddress: true,
      location: true
    }
  });

  console.log(chargestations);
}

main();
