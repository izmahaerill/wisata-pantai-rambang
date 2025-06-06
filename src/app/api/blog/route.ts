//src\app\api\blog\route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function GET() {
  const blogs = await prisma.blog.findMany({ orderBy: { published: "desc" } });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const published = formData.get("published") as string;
  const imageFile = formData.get("image") as File;

  if (!title || !summary || !published || !imageFile) {
    return NextResponse.json(
      { message: "Field tidak lengkap" },
      { status: 400 }
    );
  }

  // Simpan file ke public/images/blog
  const buffer = Buffer.from(await imageFile.arrayBuffer());
  const filename = `${randomUUID()}-${imageFile.name}`;
  const filepath = path.join(
    process.cwd(),
    "public",
    "images",
    "blog",
    filename
  );
  await writeFile(filepath, buffer);

  const blog = await prisma.blog.create({
    data: {
      title,
      summary,
      image: `/images/blog/${filename}`,
      published: new Date(published),
    },
  });

  return NextResponse.json(blog);
}
