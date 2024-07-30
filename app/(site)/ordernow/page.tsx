import Image from "next/image";
import React from "react";
import OrderNowForm from "../../componets/ordernowform";
import { getSession } from "@/app/lib/action";

const Page = async () => {
  const isLogged = await getSession();

  console.log(isLogged, "order now user")

  return (
    <main className="text-2xl">

      <header className="flex items-center justify-around p-10 flex-col md:flex-row gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">EzuHealth Pouch</h1>

        <div className="w-[300px] h-[300px] relative">
          <Image src="/aidpack2.jpg" alt="pouch" fill className="rounded-lg" />
        </div>
      </header>

      <OrderNowForm isLogged={isLogged} />
    </main>
  );
};

export default Page;
