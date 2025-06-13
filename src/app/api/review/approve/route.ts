import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return Response.json({ message: "Unauthorized." }, { status: 401 });
    }

    const { id } = await request.json();

    if (!id) {
      return Response.json(
        { message: "Review ID is required." },
        { status: 400 }
      );
    }

    const review = await db.review.update({
      where: { id: id },
      data: { approved: true },
      include: { user: true },
    });

    await db.notification.create({
      data: {
        userId: review.userId,
        type: "REVIEW_APPROVED",
        message: `Ulasan dari ${review.user.name} telah disetujui`,
        relatedReviewId: review.id,
      },
    });

    return Response.json({ message: "Review approved successfully." });
  } catch (error) {
    console.error("Error approving review:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
