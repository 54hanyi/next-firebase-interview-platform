import React from "react";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 模擬面試平台｜智慧面試官隨時陪你練習",
  description: "透過AI機器人，提供上百道業界真實面試題、擬真問答與多輪追問，並給出語速、結構與用詞的即時回饋與專屬練習報告，助您隨時隨地提升面試自信！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}

        <Toaster/>
      </body>
    </html>
  );
}
