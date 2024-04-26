import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Car,
  ClipboardMinus,
  LayoutDashboard,
  MonitorCheck,
  Settings,
  StepForward,
  Truck,
} from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Roado dashboard assignment",
  description: "Interview assignment of roado.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-muted font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen">
            <nav className="flex flex-col py-3 border-r bg-background items-center gap-5 w-20 overflow-hidden h-full">
              <span className="text-sm font-bold text-foreground/[.8] ">
                LOGO
              </span>
              <LayoutDashboard className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <MonitorCheck className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <StepForward className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <ClipboardMinus className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <Car className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <Truck className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <Briefcase className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
              <Settings className="text-foreground/[.7] hover:text-foreground cursor-pointer" />
            </nav>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
