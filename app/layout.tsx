// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Notable } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import FooterSmall from "./components/FooterSmall";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const notable = Notable({ subsets: ['latin'], weight: '400', variable: '--font-notable' });

// Define metadata
export const metadata: Metadata = {
  title: "AZAHARUL ISLAM | Portfolio",
  description: "Educator, Developer, and Seeker of Knowledge",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/ai.png" }, // fallback or default
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notable.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <FooterSmall />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
