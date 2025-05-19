// app/(admin)/about/update/[id]/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Role } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const roleString = formData.get("role") as string;
  const file = formData.get("image") as File | null;

  if (!name || !roleString) {
    return NextResponse.json(
      { error: "Missing name or role" },
      { status: 400 }
    );
  }

  if (!Object.values(Role).includes(roleString as Role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  let imageUrl;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/images", fileName);
    await writeFile(filePath, buffer);
    imageUrl = `/images/${fileName}`;
  }

  await db.team.update({
    where: { id },
    data: {
      name,
      role: roleString as Role,
      ...(imageUrl && { image: imageUrl }),
    },
  });

  return NextResponse.json({ message: "Team updated successfully" });
}
