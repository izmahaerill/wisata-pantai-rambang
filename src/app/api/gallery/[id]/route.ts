import { db } from "@/lib/db";
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];
const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const IMAGE_UPLOAD_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "gallery"
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const gallery = await db.gallery.findUnique({
      where: { id },
    });

    if (!gallery) {
      return Response.json(
        { message: "Gallery image not found." },
        { status: 404 }
      );
    }

    return Response.json({
      message: "Gallery image fetched successfully.",
      gallery,
    });
  } catch (error) {
    console.error("Error fetching gallery image:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const formData = await request.formData();
    const { id } = await params;

    const file = formData.get("image") as File;

    let image: string | undefined;

    if (file && file.size > 0) {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        return Response.json(
          { message: "Invalid image type." },
          { status: 400 }
        );
      }

      if (file.size > MAX_SIZE) {
        return Response.json(
          { message: "Image size exceeds 2MB." },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const ext = path.extname(file.name) || ".webp";
      const fileName = `${randomUUID()}${ext}`;
      const filePath = path.join(IMAGE_UPLOAD_DIR, fileName);

      await mkdir(IMAGE_UPLOAD_DIR, {
        recursive: true,
      });
      await writeFile(filePath, buffer);

      image = fileName;
    }

    const updated = await db.gallery.update({
      where: { id },
      data: {
        ...(image ? { image } : {}),
      },
    });

    return Response.json({
      message: "Gallery image updated successfully.",
      gallery: updated,
    });
  } catch (error) {
    console.error("Error updating gallery image:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const gallery = await db.gallery.findUnique({
      where: { id },
    });

    if (!gallery) {
      return Response.json(
        { message: "Gallery image not found." },
        { status: 404 }
      );
    }

    await db.gallery.delete({
      where: { id },
    });

    return Response.json({
      message: "Gallery image deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting gallery image:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
