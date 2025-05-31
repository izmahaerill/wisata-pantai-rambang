"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function LanguageSwitch({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isEnglish = currentLocale === "en";

  const toggleLanguage = (checked: boolean) => {
    const newLocale = checked ? "en" : "id";
    startTransition(() => {
      router.push(`/${newLocale}`);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="lang-switch">{isEnglish ? "🇬🇧" : "🇮🇩"}</Label>
      <Switch
        id="lang-switch"
        checked={isEnglish}
        onCheckedChange={toggleLanguage}
        disabled={isPending}
      />
    </div>
  );
}
