import type { Metadata } from "next";
import { Sedan } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const roboto = Sedan({
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
      <body className={roboto.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
