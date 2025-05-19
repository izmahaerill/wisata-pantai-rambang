import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { PropsWithChildren } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="container w-full">
        <header className="flex items-center justify-between py-4">
          <SidebarTrigger />
          <Button variant="ghost" size="icon" className="size-7">
            <Bell />
          </Button>
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
