import type { Metadata } from "next";
import { Inter, Notable } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import FooterSmall from "./components/FooterSmall"; // Import FooterSmall component

// Import Google Notable font
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const notable = Notable({ subsets: ['latin'], weight: '400', variable: '--font-notable' });

export const metadata: Metadata = {
  title: "AZAHARUL ISLAM | Portfolio",
  description: "Educator, Developer, and Seeker of Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${notable.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <FooterSmall /> {/* Add FooterSmall component */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
