import Image from "next/image";
import React from "react";
import PurchaseForm from "../purchaseform";

interface StoreFooter4Props {
  user: any;
}

const StoreFooter4 = ({ user }: StoreFooter4Props) => {
  return (
    <footer className="bg-[#444] p-4 mt-10 rounded-lg">
      <header className="flex items-center justify-around relative my-10">
        <h2 className="text-4xl font-bold flex items-center justify-between">
          Need something for cuts and falls
          <span className="block absolute bg-[#888] p-4 font-bold -top-20 right-0 drop-shadow-lg rounded ">
            $49.99
          </span>
        </h2>

        <p className="text-8xl">🎆</p>
      </header>
      <p className="text-md text-gray-400 font-bold">
        We have a perfect medical pack ready for moments of distress. We have a
        pack filled with all the essential items you will need. By going with
        our basic package you will be able to recieve:
      </p>
      <ul className="p-3">
        <li>4x pillows </li>
        <li>2x blankets</li>
        <li>1x Bedcover</li>
      </ul>

      <PurchaseForm user={JSON.stringify(user)} storeItem="MEDICALTOOLBAG" />
    </footer>
  );
};

export default StoreFooter4;
