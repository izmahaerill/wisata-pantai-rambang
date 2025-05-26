// app/api/review/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, text, date, image } = body;

    if (!username || !text || !date) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: { username, text, date: new Date(date), image },
    });

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving review" },
      { status: 500 }
    );
  }
}
