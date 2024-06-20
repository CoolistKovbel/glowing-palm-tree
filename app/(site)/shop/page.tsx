import HeaderHero from "@/app/componets/headerhero";
import PurchaseForm from "@/app/componets/purchaseform";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen p-10 ">
      <HeaderHero />

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold">
          Need something for cuts and falls
        </h2>
        <p className="text-sm">
          We have a perfect medical pack ready for moments of distress. We have
          a pack filled with all the essential items you will need. By going
          with our basic package you will be able to recieve:
        </p>
        <ul className="p-3">
          <li>4x bandages</li>
          <li>2x bandaids</li>
          <li>1x hydrogen poraxide</li>
        </ul>

        <PurchaseForm />
      </footer>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold">Want to get your head up</h2>
        <p className="text-sm">
          We have a perfect medical pack ready for moments when you feeling like
          you need a little boost. We have a pack filled with all the essential
          items you will need. By going with our basic package you will be able
          to recieve:
        </p>
        <ul className="p-3">
          <li>4x Energy Balls</li>
          <li>2x Energy shots</li>
          <li>1x </li>
        </ul>

        <PurchaseForm />
      </footer>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold"> Need </h2>
        <p className="text-sm">
          We have a pack filled with all the essential items you will need. By
          going with our basic package you will be able to recieve:
        </p>
        <ul className="p-3">
          <li>4x </li>
          <li>2x Energy shots</li>
          <li>1x </li>
        </ul>

        <PurchaseForm />
      </footer>
    </main>
  );
};

export default page;
