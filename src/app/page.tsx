import { RouterProvider } from "@/lib/router";
import { DocsApp } from "@/components/docs/docs-app";

export default function Home() {
  return (
    <RouterProvider>
      <DocsApp />
    </RouterProvider>
  );
}
