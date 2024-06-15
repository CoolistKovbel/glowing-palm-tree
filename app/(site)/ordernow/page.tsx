import Image from "next/image";
import React from "react";
import OrderNowForm from "../../componets/ordernowform";

const Page = () => {
  return (
    <main className="text-2xl">
      <header className="flex items-center justify-around p-10">
        <h1 className="text-2xl font-bold">EzueHealth Pouch</h1>

        <div className="w-[300px] h-[300px] relative">
          <Image src="/aidpack2.jpg" alt="pouch" fill className="rounded-lg" />
        </div>
      </header>

      <OrderNowForm />
    </main>
  );
};

export default Page;
