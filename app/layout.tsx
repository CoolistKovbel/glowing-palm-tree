import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { getSession } from "./lib/action";
import { ModalProvider } from "./componets/providers/model-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkout } from "./models/Checkout";

export const metadata: Metadata = {
  title: "Ezpeaid",
  description:
    "Welcome to Ezpeaid. Your #1 spot away from your monthly subscription for our special care  health aid box",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Grabbing user from server
  const user = await getSession();
  let gg:any = {};

  // Checkout
  if(user.isLoggedIn) {

    gg = await Checkout.find({
      customer: user.userId,
    });

    gg = gg.filter((item:any) => item.pendingShipping === true)

  }
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader
          userSession={JSON.stringify(user)}
          userCart={JSON.stringify(gg)}
        />
        {children}
        <MainFooter />
        <ModalProvider />
        <ToastContainer />
      </body>
    </html>
  );
}
