import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const activeAccounts = await prisma.user.count({
    where: {
      Review: {
        some: {},
      },
    },
  });

  return NextResponse.json({ activeAccounts });
}
