import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const physicalAddresses = await prisma.physicalAddress.findMany({
    where: {
      city: "Ivitavdoj"
    },
    include: {
      location: true
    }
  });

  console.log(physicalAddresses);
}

main();
