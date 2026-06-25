import Link from "next/link";
import { SiteHeader } from "@/components/docs/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-journal-paper">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="font-serif text-7xl font-bold tracking-tight text-journal-ink">
          404
        </h1>
        <p className="mt-4 font-serif text-lg text-journal-ink-light">
          Page not found. Use the sidebar to navigate to a docs page.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 font-serif text-sm text-journal-burgundy hover:underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
