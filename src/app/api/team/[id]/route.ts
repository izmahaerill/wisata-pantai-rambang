// app/api/team/[id]/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;

  if (!Object.values(Role).includes(role as Role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  try {
    await db.team.update({
      where: { id },
      data: {
        name,
        role: role as Role,
      },
    });

    return NextResponse.json({ message: "Team updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
