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
  "facilities"
);

export async function GET() {
  try {
    const facilities = await db.facilities.findMany();
    return Response.json(facilities);
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const file = formData.get("image") as File;

    if (typeof name !== "string" || !name.trim()) {
      return Response.json({ message: "Name are required." }, { status: 400 });
    }

    let image: string = "";

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

      image = `/images/facilities/${fileName}`;
    }

    const team = await db.facilities.create({
      data: {
        name: name.trim(),
        image,
      },
    });

    return Response.json({
      message: "Facilities added successfully.",
      team,
    });
  } catch (error) {
    console.error("Error adding facilities:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
