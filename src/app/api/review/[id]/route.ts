import { db } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const review = await db.review.findUnique({
      where: { id },
    });

    if (!review) {
      return Response.json({ message: "Review not found." }, { status: 404 });
    }

    await db.review.update({
      where: { id },
      data: {
        approved: null,
      },
    });

    await db.notification.create({
      data: {
        userId: review.userId,
        type: "REVIEW_REJECTED",
        message: `Ulasan anda ditolak`,
        relatedReviewId: review.id,
      },
    });

    return Response.json({
      message: "Review rejected successfully.",
    });
  } catch (error) {
    console.error("Error rejecting review:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
