import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CODELINK — Where Vision Becomes Product",
  description:
    "CODELINK is a modern software development company based in Uzbekistan. We build world-class mobile apps, web platforms, and backend systems for ambitious companies.",
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "iOS development",
    "Android development",
    "Uzbekistan IT company",
    "Codelink",
    "UI/UX design",
    "DevOps",
  ],
  authors: [{ name: "CODELINK", url: "https://codelink.uz" }],
  openGraph: {
    title: "CODELINK — Where Vision Becomes Product",
    description:
      "Modern software development company. Mobile apps, web platforms, and backend systems.",
    url: "https://codelink.uz",
    siteName: "CODELINK",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODELINK — Where Vision Becomes Product",
    description:
      "Modern software development company based in Uzbekistan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="noise-bg min-h-screen bg-black font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
