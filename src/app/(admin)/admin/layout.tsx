import AppSidebar from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import { CSSProperties, PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
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
          <SidebarTrigger className="size-9" />
          <Button variant="ghost" size="icon">
            <Bell />
            <span className="sr-only">Toggle Notification</span>
          </Button>
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
