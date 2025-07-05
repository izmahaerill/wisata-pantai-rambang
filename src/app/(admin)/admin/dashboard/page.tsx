import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SectionCardsWithUsers } from "@/components/admin/dashboard/SectionCardsWithUsers";
import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const users = await prisma.user.findMany({
    where: { Review: { some: {} } },
    select: { name: true, email: true },
  });

  const userData = users.map((user, i) => ({
    no: i + 1,
    name: user.name,
    email: user.email,
  }));

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }>
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-4 py-6">
            <SectionCardsWithUsers users={userData} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
