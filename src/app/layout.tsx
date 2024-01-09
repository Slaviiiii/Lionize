import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { dark } from "@clerk/themes";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./_trpc/Provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lionize",
  description: "A modern E-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#ff8500",
          colorBackground: "#22333b",
          colorInputBackground: "#393d3f",
          colorTextSecondary: "white",
          fontSmoothing: "antialiased",
          borderRadius: "0.650em",
          colorAlphaShade: "white",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            roboto.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Provider>{children}</Provider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
