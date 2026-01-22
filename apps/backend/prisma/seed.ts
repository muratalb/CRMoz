import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash("Password123!");
  const users = [
    { email: "admin@alb.local", name: "Yönetici", role: "YONETICI" },
    { email: "sales@alb.local", name: "Satış", role: "SATIS" },
    { email: "teknik@alb.local", name: "Teknik Ofis", role: "TEKNIK_OFIS" },
    { email: "partner@alb.local", name: "Partner", role: "PARTNER" }
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        passwordHash: password,
        role: user.role as any
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
