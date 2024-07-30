"use client";

import PurchaseForm from "../purchaseform";

interface StoreFooter2Props {
  user: any;
}

const StoreFooter2 = ({ user }: StoreFooter2Props) => {
  return (
    <footer className="bg-[#444] p-4 mt-10 rounded-lg">
      <header className="flex items-center justify-around relative my-10">
        <h2 className="text-4xl font-bold flex items-center justify-between">
          Want to get your head up
          <span className="block absolute bg-[#888] p-4 font-bold -top-20 right-0 drop-shadow-lg rounded ">
            $49.99
          </span>
        </h2>

        <p className="text-8xl">🎆</p>
      </header>
      <p className="text-md text-gray-400 font-bold">
        We have a perfect medical pack ready for moments when you feeling like
        you need a little boost. We have a pack filled with all the essential
        items you will need. By going with our basic package you will be able to
        recieve:
      </p>
      <ul className="p-3">
        <li>4x Energy Balls</li>
        <li>2x Energy shots</li>
        <li>1x Water</li>
      </ul>

      <PurchaseForm user={JSON.stringify(user)} storeItem="MEDICALFOODCONTAINER" />
    </footer>
  );
};

export default StoreFooter2;
