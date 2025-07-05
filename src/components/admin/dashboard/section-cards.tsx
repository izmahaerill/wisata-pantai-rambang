// File: src/components/admin/dashboard/section-cards.tsx
"use client";

import { useEffect, useState } from "react";
import { IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const [activeAccounts, setActiveAccounts] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      setActiveAccounts(data.activeAccounts);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card>
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {activeAccounts}
          </CardTitle>
          <div>
            <Badge variant="outline">
              <IconTrendingUp />
              +0%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">Sudah memberikan review</div>
          <div className="text-muted-foreground">Total user yang aktif</div>
        </CardFooter>
      </Card>
    </div>
  );
}
