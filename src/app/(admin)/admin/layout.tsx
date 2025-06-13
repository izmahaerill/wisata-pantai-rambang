import AppSidebar from "@/components/app-sidebar";
import NotificationToggle from "@/components/notification-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";
import { CSSProperties, PropsWithChildren } from "react";

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const notifications = await db.notification.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--sidebar-width-mobile": "20rem",
        } as CSSProperties
      }>
      <AppSidebar />
      <div className="container">
        <header className="flex items-center justify-between py-4">
          <SidebarTrigger className="size-10" />
          <NotificationToggle notifications={notifications} />
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
