// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Suspense } from "react";

export const metadata = {
  title: "netflix",
  description: "this is a netflix show"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />
        <main style={{ paddingTop: "4rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
