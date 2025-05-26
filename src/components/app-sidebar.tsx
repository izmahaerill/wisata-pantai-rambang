import {
  BadgeCheck,
  BadgePlus,
  Calendar,
  Home,
  Inbox,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Gallery",
    url: "/admin/gallery",
    icon: Inbox,
  },
  {
    title: "Facilities",
    url: "/admin/facilities",
    icon: BadgePlus,
  },
  {
    title: "Team",
    url: "/admin/team",
    icon: Users,
  },
  {
    title: "Blog",
    url: "/admin/blog",
    icon: Settings,
  },
  {
    title: "Ulasan",
    url: "/admin/ulasan",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
