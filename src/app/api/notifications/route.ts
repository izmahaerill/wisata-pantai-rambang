import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return Response.json(
        { message: "Notification ID is required" },
        { status: 400 }
      );
    }

    await db.notification.update({
      where: { id },
      data: { read: true },
    });

    return Response.json(
      { message: "Notification read successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error reading notification:", error);

    return Response.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
