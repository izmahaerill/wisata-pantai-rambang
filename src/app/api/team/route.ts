// app/api/team/route.ts
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { db } from "@/lib/db";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const file = formData.get("image") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public/images", fileName);

  await writeFile(filePath, buffer);

  const imageUrl = `/images/${fileName}`;

  if (!Object.values(Role).includes(role as Role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  if (!name || !role || !file) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await db.team.create({
    data: {
      name,
      role: role as Role,
      image: imageUrl,
      social: {
        create: {
          github: "", // default atau nanti ditambahkan lewat form
        },
      },
    },
  });

  return NextResponse.json({ success: true });
}
