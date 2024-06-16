import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";


export const metadata: Metadata = {
  title: "Endourhealth",
  description:
    "Welcome to Endour Health. Your #1 spot away from your monthly subscription for our special care  health aid box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
