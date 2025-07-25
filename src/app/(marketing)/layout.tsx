import Header from "@/components/header";
import FloatingWhatsApp from "@/components/micro/FloatingWhatsApp";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

export default async function MarketingLayout({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const notifications = await db.notification.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <div className="container">
      <Header notifications={notifications} />
      <main>{children}</main>
      <FloatingWhatsApp />
    </div>
  );
}
