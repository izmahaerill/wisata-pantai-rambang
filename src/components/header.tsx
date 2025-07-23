"use client";

import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/auth/client";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, Menu, BellIcon } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

export default function Header() {
  const { data: session } = client.useSession();

  const handleSignIn = async () => {
    const { error } = await client.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) {
      console.error(error.message);
      return;
    }
    console.log("Sign in successful");
  };

  const handleSignOut = async () => {
    const { error } = await client.signOut();
    if (error) {
      console.error(error.message);
      return;
    }
    console.log("Sign out successful");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent px-12 py-3 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <div className="text-sm font-semibold sm:text-lg lg:text-xl">
          <Link href="/" className="flex items-center justify-center gap-1">
            <img
              src="https://fav.farm/%F0%9F%8F%96%EF%B8%8F"
              alt="Pantai"
              className="h-8 w-8"
              loading="lazy"
            />
            Rambang
          </Link>
        </div>
        <div className="hidden items-center gap-6 md:flex"></div>
        <div className="hidden items-center md:flex md:gap-6 lg:gap-8">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage
                    src={session.user.image ?? ""}
                    alt={session.user.name ?? "User"}
                    loading="lazy"
                  />
                  <AvatarFallback>
                    {session.user.name?.charAt(0).toUpperCase() ?? "?"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={session.user.image ?? ""}
                        alt={session.user.name ?? "User"}
                        loading="lazy"
                      />
                      <AvatarFallback>
                        {session.user.name?.charAt(0).toUpperCase() ?? "?"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{session.user.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {session.user.role === "admin" && (
                  <Link href="/admin">
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                )}
                <DropdownMenuItem>
                  <BellIcon className="mr-2 h-4 w-4" />
                  Notifikasi
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <ModeToggle />
                    Switch Theme
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Sign in</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Masuk ke akunmu</DialogTitle>
                  <DialogDescription>
                    Gunakan akun Google untuk mengakses fitur lebih banyak.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    onClick={handleSignIn}
                    aria-label="Sign in with google">
                    Sign in dengan
                    <Image
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="pl-1"
                      loading="lazy"
                    />
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[50%] max-w-sm sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 px-4">
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                {session?.user && session.user.role === "admin" && (
                  <Link href="/admin">Dashboard</Link>
                )}
                <div className="pt-4">
                  <ModeToggle />
                </div>
                {session?.user ? (
                  <Button variant="ghost" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                ) : (
                  <Button onClick={handleSignIn}>
                    Sign in dengan
                    <Image
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="pl-1"
                      loading="lazy"
                    />
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
