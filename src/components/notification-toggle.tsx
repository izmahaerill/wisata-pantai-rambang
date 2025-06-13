"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Notification } from "@prisma/client";
import { Bell, BellDot, Check, CheckCheck } from "lucide-react";
import { useMemo, useState } from "react";

interface Props {
  notifications: Notification[];
}

export default function NotificationToggle({ notifications }: Props) {
  const unread = useMemo(
    () => notifications.filter((notification) => !notification.read),
    [notifications]
  );

  const read = useMemo(
    () => notifications.filter((notification) => notification.read),
    [notifications]
  );

  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleNotificationClick = async (notification: Notification) => {
    try {
      await fetch("/api/notifications", {
        method: "POST",
        body: JSON.stringify({ id: notification.id }),
      });

      setPopoverOpen(false);
    } catch (error) {
      console.error("Error reading notification:", error);
    }
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setPopoverOpen(true)}>
          {unread.length > 0 ? <BellDot /> : <Bell />}
          <span className="sr-only">Toggle Notification</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96">
        <Tabs defaultValue="unread">
          <TabsList>
            <TabsTrigger value="unread">Belum dibaca</TabsTrigger>
            <TabsTrigger value="read">Sudah dibaca</TabsTrigger>
          </TabsList>
          <TabsContent value="unread">
            <div className="flex flex-col gap-2">
              {unread.length === 0 && (
                <p className="text-muted-foreground py-24 text-center text-sm">
                  Tidak ada notifikasi baru.
                </p>
              )}
              {unread.map((notification) => (
                <div
                  key={notification.id}
                  onClick={async () => handleNotificationClick(notification)}
                  className="cursor-pointer">
                  <Alert>
                    <Check />
                    <AlertTitle>{notification.message}</AlertTitle>
                  </Alert>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="read">
            <div className="flex flex-col gap-2">
              {read.length === 0 && (
                <p className="text-muted-foreground py-24 text-center text-sm">
                  Belum ada notifikasi yang dibaca.
                </p>
              )}
              {read.map((notification) => (
                <div key={notification.id} className="cursor-pointer">
                  <Alert>
                    <CheckCheck />
                    <AlertTitle>{notification.message}</AlertTitle>
                  </Alert>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
