import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@gravity-ui/uikit"; // Temporarily disabled for build fix
// import "@gravity-ui/uikit/styles/styles.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MD Hasan Al Rashid | SQA Engineer",
  description: "Senior SQA Engineer Portfolio - Selenium, Appium, Cypress Automation.",
  icons: {
    icon: '/favicon.png',
  },
};

import { CustomCursor } from "@/components/layout/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "bg-zinc-950 text-white antialiased md:cursor-none")}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
