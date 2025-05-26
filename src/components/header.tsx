"use client";

import ModeToggle from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      return;
    }

    console.log("Sign in successful");
  };

  const handleSignOut = async () => {
    const { error } = await client.signOut();

    if (error) {
      console.log(error.message);
      return;
    }

    console.log("Sign out successful");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent px-10 backdrop-blur-md">
      <nav className="flex items-center py-4">
        <div className="inline-flex w-1/2 items-center justify-start text-2xl">
          <Link href="/">Pantai Rambang</Link>
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
                      <DropdownMenuItem>Ulasan Saya</DropdownMenuItem>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button>Sign in</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={handleSignIn}>Sign in</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </nav>
    </header>
  );
}
