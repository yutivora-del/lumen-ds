import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumen — a quiet design system",
  description:
    "An editorial, open design system. Tokens, components, and copy-paste code. Built by Yuti.",
  metadataBase: new URL("https://lumen-ds.vercel.app"),
  openGraph: {
    title: "Lumen — a quiet design system",
    description: "Tokens, components, and copy-paste code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <ToastProvider>
              <div className="flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
            </ToastProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
