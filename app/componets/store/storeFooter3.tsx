"use client";

import PurchaseForm from "../purchaseform";

interface StoreFooter3Props {
  user: any;
}

const StoreFooter3 = ({ user }: StoreFooter3Props) => {
  return (
    <footer className="bg-[#444] p-4 mt-10 rounded-lg">
      <header className="flex items-center justify-around relative my-10">
        <h2 className="text-4xl font-bold flex items-center justify-between">
          Get your own comfy box
          <span className="block absolute bg-[#888] p-4 font-bold -top-20 right-0 drop-shadow-lg rounded ">
            $49.99
          </span>
        </h2>

        <p className="text-8xl">🎆</p>
      </header>
      <p className="text-md text-gray-400 font-bold">
        Get your self situated, snuggled, and ready for any night out going with
        our basic package you will be able to recieve:
      </p>
      <ul className="p-3">
        <li>4x pillows </li>
        <li>2x blankets</li>
        <li>1x Bedcover</li>
      </ul>

      <PurchaseForm user={JSON.stringify(user)} storeItem="MedicalUtilityBox" />
    </footer>
  );
};

export default StoreFooter3;
