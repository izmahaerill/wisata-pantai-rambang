import { db } from "@/lib/db";
import { Role } from "@prisma/client";
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const IMAGE_UPLOAD_DIR = path.join(process.cwd(), "public", "images", "team");

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const team = await db.team.findUnique({
      where: { id },
    });

    if (!team) {
      return Response.json(
        { message: "Team member not found." },
        { status: 404 }
      );
    }

    return Response.json({
      message: "Team member fetched successfully.",
      team,
    });
  } catch (error) {
    console.error("Error fetching team member:", error);

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

    const name = formData.get("name");
    const role = formData.get("role");
    const file = formData.get("image") as File;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof role !== "string" ||
      !role.trim()
    ) {
      return Response.json(
        { message: "Name and role are required." },
        { status: 400 }
      );
    }

    if (!Object.values(Role).includes(role as Role)) {
      return Response.json({ message: "Invalid role value." }, { status: 400 });
    }

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

      image = `/images/team/${fileName}`;
    }

    const team = await db.team.update({
      where: { id },
      data: {
        name: name.trim(),
        role: role as Role,
        image,
      },
    });

    return Response.json({
      message: "Team member updated successfully.",
      team,
    });
  } catch (error) {
    console.error("Error updating team member:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
