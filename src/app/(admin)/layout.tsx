import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if (!session || session?.user.role === "user") {
  //   notFound();
  // }

  return children;
}
