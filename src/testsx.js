// src/testInsert.js
import prisma from "./config/db.js";

async function main() {
  await prisma.campaingMetric.create({
    data: {
      platform: "google",
      campaingId: "1234",
      campaingName: "PC MASTER RACE",
      date: new Date(),
      impressions: 200,
      clicks: 12122,
      spend: 1222.25,
      conversions: 110
    }
  });

  console.log("✅ Data insertada");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());