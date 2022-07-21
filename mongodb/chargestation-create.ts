import { PrismaClient } from "@prisma/client";
import { Chance } from "chance";

const prisma = new PrismaClient();
const chance = new Chance();

async function main() {
  const chargestation = await prisma.chargestation.create({
    data: {
      name: `Station ${chance.integer({ max: 999, min: 0 })}`,
      locationId: "cl5ue5cdo00011gzilz4lx8tb",
      physicalAddressId: "cl5ue4rb40000xvziohpqqhpl"
    }
  });

  console.log(chargestation);
}

main();
