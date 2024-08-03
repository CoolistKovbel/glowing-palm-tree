import type { Metadata } from "next";
import { inter } from "./componets/ui/fonts";
import MainHeader from "./componets/mainheader";
import "./globals.css";
import MainFooter from "./componets/mainfooter";
import { getSession } from "./lib/action";
import { ModalProvider } from "./componets/providers/model-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserCheckout } from "./lib/getUserLib";

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
  let gg: any = {};

  // Checkout
  if (user.isLoggedIn === true) {
    gg = await getUserCheckout(user.userId as string);
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
