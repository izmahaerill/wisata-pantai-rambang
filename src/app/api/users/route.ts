import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    where: {
      Review: {
        some: {},
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  const withNo = users.map((u, i) => ({
    no: i + 1,
    email: u.email,
    name: u.name,
  }));

  return NextResponse.json(withNo);
}
