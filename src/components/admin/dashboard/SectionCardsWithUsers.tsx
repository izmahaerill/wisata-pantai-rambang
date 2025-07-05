"use client";

import { IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "./data-table";

export type UserData = {
  no: number;
  name: string;
  email: string;
};

export function SectionCardsWithUsers({ users }: { users: UserData[] }) {
  const count = users.length;

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card>
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">
            {count}
          </CardTitle>
          <div>
            <Badge variant="outline">
              <IconTrendingUp />
              +5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">Users with reviews</div>
          <div className="text-muted-foreground">
            Engaged users who left feedback
          </div>
        </CardFooter>
      </Card>

      {/* Optional: bisa tambah card lain di sini */}

      {/* Full-width table */}
      <div className="col-span-full">
        <DataTable data={users} />
      </div>
    </div>
  );
}
