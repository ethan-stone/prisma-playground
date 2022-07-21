import { PrismaClient } from "@prisma/client";
import { Chance } from "chance";

const prisma = new PrismaClient();
const chance = new Chance();

async function main() {
  const physicalAddress = await prisma.physicalAddress.create({
    data: {
      streetName: chance.street(),
      streetNumber: chance.integer({ max: 9999, min: 0 }).toString(),
      city: chance.city(),
      postalCode: chance.zip(),
      state: chance.state(),
      countryCode: chance.country()
    }
  });

  console.log(physicalAddress);
}

main();
