import type { Metadata } from "next";
import { Lora, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/docs/theme-provider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Journal Design System — A Tailwind CSS Component Library",
    template: "%s · Journal DS",
  },
  description:
    "A warm, editorial journal-style component library for Tailwind CSS. Built on Radix UI primitives. Open source. Copy and paste into your apps.",
  keywords: [
    "Journal",
    "Journal Design System",
    "Lora",
    "Playfair Display",
    "Tailwind CSS",
    "Radix UI",
    "shadcn",
    "design system",
    "components",
    "editorial",
  ],
  authors: [{ name: "Journal DS" }],
  openGraph: {
    title: "Journal Design System — A Tailwind CSS Component Library",
    description:
      "A warm, editorial journal-style component library for Tailwind CSS. Inspired by the art of journaling and print publishing.",
    url: "https://journal-ds.dev",
    siteName: "Journal Design System",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal Design System",
    description:
      "A warm, editorial journal-style component library for Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
