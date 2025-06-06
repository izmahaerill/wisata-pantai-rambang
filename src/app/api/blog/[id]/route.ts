// src/app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET Blog by ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // Pastikan `published` dikirim sebagai string
  return NextResponse.json({
    ...blog,
    published: blog.published.toISOString(),
  });
}

// PUT Blog
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const blog = await prisma.blog.update({
    where: { id: params.id },
    data: {
      title: body.title,
      summary: body.summary,
      image: body.image,
      published: new Date(body.published),
    },
  });
  return NextResponse.json(blog);
}

// DELETE Blog
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.blog.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
