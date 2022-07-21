import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const sessions = await prisma.session.findMany({
    include: {
      location: true,
      chargestation: true
    }
  });

  console.log(sessions);
}

main();
