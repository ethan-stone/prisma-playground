import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const session = await prisma.session.create({
    data: {
      startTime: new Date(),
      endTime: new Date(),
      reason: "StopTransaction",
      chargestationId: "cl5ue6dki000185zin9io57l9",
      locationId: "cl5ue5cdo00011gzilz4lx8tb",
      totalCost: 100,
      energyConsumed: 100
    }
  });

  console.log(session);
}

main();
