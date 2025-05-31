import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

const galleryFolder = path.join(process.cwd(), "public/images/gallery");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Pastikan folder ada
    await mkdir(galleryFolder, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${randomUUID()}-${file.name}`;
    const filepath = path.join(galleryFolder, filename);

    await writeFile(filepath, buffer);

    // Simpan ke DB
    const saved = await prisma.gallery.create({
      data: { image: filename },
    });

    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload image", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  const images = await prisma.gallery.findMany({
    orderBy: { createdAt: "desc" },
  });

  const imagesWithUrl = images.map((img) => ({
    ...img,
    url: `/images/gallery/${img.image}`,
  }));

  return NextResponse.json(imagesWithUrl);
}
