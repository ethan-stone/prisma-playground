import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const location = await prisma.location.create({
    data: {
      physicalAddressId: "cl5ue4rb40000xvziohpqqhpl"
    }
  });

  console.log(location);
}

main();
