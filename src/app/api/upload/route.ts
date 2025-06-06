import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs/promises";

const UPLOAD_DIR = path.join(process.cwd(), "public/images/blog");

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filename = `${uuidv4()}-${file.name.replace(/\s+/g, "")}`;
  const filePath = path.join(UPLOAD_DIR, filename);

  try {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({ url: `/images/blog/${filename}` });
  } catch (err) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
