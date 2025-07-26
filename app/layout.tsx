import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connvo - AI-Powered Phone Training Platform",
  description:
    "Improve your communication skills with AI-powered phone training. Practice cold calling, interviews, and small talk - no login required, just call!",
  keywords:
    "AI training, phone training, communication skills, cold calling, interview prep, small talk practice",
  authors: [{ name: "Muneeb Ali" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Connvo - AI-Powered Phone Training Platform",
    description:
      "Master communication skills with AI-powered phone training. Practice cold calling, interviews, and small talk.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connvo - AI-Powered Phone Training Platform",
    description: "Master communication skills with AI-powered phone training.",
  },
  icons: {
    icon: { url: "/globe.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
