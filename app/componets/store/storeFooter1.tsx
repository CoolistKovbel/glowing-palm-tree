"use client";

import Image from "next/image";
import React from "react";
import PurchaseForm from "../purchaseform";

interface StoreFooter1Props {
  user: any;
}

const StoreFooter1 = ({ user }: StoreFooter1Props) => {
  const storeID = "MEDICALPACK";

  return (
    <section className="bg-[#444] p-4 mt-10 rounded-lg flex items-center justify-between">
      <div className="w-[300px] h-[300px] relative">
        <Image src="/backpackaid.jpg" alt="sad life" fill />
      </div>

      <header className="flex items-center flex-col w-[60%] justify-between p-4 bg-[#222]">
        <h2 className="text-4xl font-bold flex items-center justify-between relative mb-4">
          Need something for cuts and falls
          <span className="block absolute bg-[#888] p-4 font-bold -top-20 -right-10 drop-shadow-lg rounded ">
            $49.99
          </span>
        </h2>

        <div className="flex items-center justify-between w-full">
          <p className="text-[21px] w-[50%]">
            We have a perfect medical pack ready for moments of distress. We
            have a pack filled with all the essential items you will need. By
            going with our basic package you will be able to recieve:
          </p>

          <div className="w-[40%]">
            <h6 className="font-bold">Items</h6>
            <ul className="p-3 w-full text-[20px] list-disc">
              <li>4x bandages</li>
              <li>2x bandaids</li>
              <li>1x hydrogen poraxide</li>
            </ul>
          </div>
        </div>

        <PurchaseForm user={JSON.stringify(user)} storeItem={storeID} />
      </header>
    </section>
  );
};

export default StoreFooter1;
