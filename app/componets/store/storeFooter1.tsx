"use client"

import Image from "next/image";
import React from "react";
import PurchaseForm from "../purchaseform";

interface StoreFooter1Props {
  user: any;
}

const StoreFooter1 = ({ user }: StoreFooter1Props) => {
    const storeID = "MEDICALPACK"

  return (
    <footer className="bg-[#444] p-4 mt-10 rounded-lg">
      <header className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold flex items-center justify-between w-[60%] mb-4">
          Need something for cuts and falls
          <span className="block">$49.99</span>
        </h2>
        <div className="w-[300px] h-[300px] relative">
          <Image src="/backpackaid.jpg" alt="sad life" fill />
        </div>
      </header>

      <p className="text-[21px]">
        We have a perfect medical pack ready for moments of distress. We have a
        pack filled with all the essential items you will need. By going with
        our basic package you will be able to recieve:
      </p>

      <ul className="p-3">
        <li>4x bandages</li>
        <li>2x bandaids</li>
        <li>1x hydrogen poraxide</li>
      </ul>

      <PurchaseForm user={JSON.stringify(user)} storeItem={storeID} />
    </footer>
  );
};

export default StoreFooter1;
