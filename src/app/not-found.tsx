import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-primary text-6xl font-bold sm:text-7xl">404</p>

        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Page not found
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold shadow transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
