import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      where: { approved: true },
      include: {
        user: true, // ✅ ini penting agar bisa ambil user.name dan user.image
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(reviews);
  } catch (error) {
    console.error("Error fetching approved reviews:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return Response.json({ message: "Unauthorized." }, { status: 401 });
    }

    const formData = await request.formData();

    const content = formData.get("content");

    if (typeof content !== "string" || !content.trim()) {
      return Response.json(
        { message: "Content is required." },
        { status: 400 }
      );
    }

    const review = await db.review.create({
      data: {
        userId: session.user.id,
        content,
      },
    });

    const admins = await db.user.findMany({
      where: {
        role: "admin",
      },
    });

    await Promise.all(
      admins.map((admin) => {
        return db.notification.create({
          data: {
            userId: admin.id,
            type: "REVIEW_SUBMITTED",
            message: `Review baru dari ${session.user.name}`,
            relatedReviewId: review.id,
          },
        });
      })
    );

    return Response.json(
      { message: "Review submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
