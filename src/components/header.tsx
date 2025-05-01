"use client";

import ModeToggle from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { client } from "@/lib/auth/client";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { data: session } = client.useSession();

  const handleSignIn = async () => {
    const { error } = await client.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      console.log(error.message);
    }
  };

  const handleSignOut = async () => {
    const { error } = await client.signOut();

    if (error) {
      console.log(error.message);
    }
  };

  return (
    <header>
      <nav className="flex items-center py-4">
        <div className="inline-flex w-1/2 items-center justify-start">
          <Link href="/">Your Logo</Link>
        </div>
        <div className="inline-flex shrink-0 items-center gap-8">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="inline-flex w-1/2 items-center justify-end gap-2">
          <ModeToggle />
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>{session.user.email}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={session.user.image ?? ""}
                        alt={session.user.name}
                      />
                      <AvatarFallback>
                        {session.user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p>{session.user.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {session.user.role === "admin" ? (
                  <Link href="/admin">
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                ) : (
                  <>
                    <Link href="/my-review">
                      <DropdownMenuItem>Ulasan</DropdownMenuItem>
                    </Link>
                    <Link href="/settings">
                      <DropdownMenuItem>Pengaturan</DropdownMenuItem>
                    </Link>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut />
                  <p>Sign out</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={handleSignIn}>Sign in</Button>
          )}
        </div>
      </nav>
    </header>
  );
}
