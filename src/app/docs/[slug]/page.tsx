import { notFound } from "next/navigation";
import { pageRegistry } from "@/components/docs/docs-app";

export function generateStaticParams() {
  return Object.keys(pageRegistry).map((slug) => ({ slug }));
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const PageComponent = pageRegistry[slug];

  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
