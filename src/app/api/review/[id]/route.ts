import { db } from "@/lib/db";

export async function DELETE(
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

    await db.review.delete({
      where: { id },
    });

    return Response.json({
      message: "Review deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting review:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
