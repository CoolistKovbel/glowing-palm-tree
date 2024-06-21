import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { getSession } from "./lib/action";
import { ModalProvider } from "./componets/providers/model-provider";

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Edehealthaid",
  description:
    "Welcome to Edehealthaid. Your #1 spot away from your monthly subscription for our special care  health aid box",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession()

  return (

    <html lang="en">
      <body className={inter.className}>
        <MainHeader userSession={JSON.stringify(user)} />
        {children}
        <MainFooter />
        <ModalProvider />
        <ToastContainer />
      </body>
    </html>
  );
}
