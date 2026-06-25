import { SiteHeader } from "@/components/docs/site-header";
import { HomePage } from "@/components/pages/home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-journal-paper">
      <SiteHeader />
      <main className="flex-1">
        <HomePage />
      </main>
    </div>
  );
}
