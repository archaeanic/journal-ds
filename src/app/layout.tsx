import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/docs/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lumen UI — Beautifully designed React components",
    template: "%s · Lumen UI",
  },
  description:
    "Lumen UI is a collection of beautifully designed, accessible components that you can copy and paste into your React apps. Built with Radix UI and Tailwind CSS.",
  keywords: [
    "Lumen UI",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "shadcn",
    "design system",
    "components",
  ],
  authors: [{ name: "Lumen UI" }],
  openGraph: {
    title: "Lumen UI — Beautifully designed React components",
    description:
      "A collection of beautifully designed, accessible components that you can copy and paste into your React apps.",
    url: "https://lumen-ui.dev",
    siteName: "Lumen UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen UI",
    description: "Beautifully designed React components. Open source.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
