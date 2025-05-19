import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Role } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const roleString = formData.get("role") as string;
  const file = formData.get("image") as File;

  if (!name || !roleString || !file) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // 🔒 Validasi enum role
  if (!Object.values(Role).includes(roleString as Role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  // 💾 Simpan file gambar ke folder public/img
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${randomUUID()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public", "images", fileName);
  await writeFile(filePath, buffer);

  const imageUrl = `/images/${fileName}`;

  // 🧠 Simpan ke DB
  await db.team.create({
    data: {
      name,
      role: roleString as Role,
      image: imageUrl,
      social: {
        create: {
          github: "",
          facebook: "",
          instagram: "",
        },
      },
    },
  });

  return NextResponse.json(
    { message: "Team added successfully" },
    { status: 200 }
  );
}
