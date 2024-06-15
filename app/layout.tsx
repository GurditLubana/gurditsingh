import type { Metadata } from "next";
import { Marcellus } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Gurdit Singh",
  description: "Gurdit Singh's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/siteICO.webp" />
      </head>
      <body className={marcellus.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
