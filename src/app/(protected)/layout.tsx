import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    notFound();
  }

  if (session?.user.role === "admin") {
    notFound();
  }

  return children;
}
