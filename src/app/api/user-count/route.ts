import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const count = await prisma.user.count({
    where: {
      OR: [{ Review: { some: {} } }, { emailVerified: true }],
    },
  });

  return NextResponse.json({ count });
}
