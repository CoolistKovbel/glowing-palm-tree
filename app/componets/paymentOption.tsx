"use client";

import { ethers } from "ethers";

interface PaymentOptionProp {
  transactions: any;
}

export const PaymentOption = ({ transactions }: PaymentOptionProp) => {

  let paymentTotal = 0;
  transactions.map((item: any) => {
    paymentTotal += Number(item.amount);
  });

  const handleSub = async () => {
    try {
      console.log("slow");

      const gg = new ethers.providers.Web3Provider(window.ethereum);

      const signer = await gg.getSigner();

      const basictranasction = await signer.sendTransaction({
        value: transactions,
        gasLimit: 900000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
      });

      await basictranasction.wait();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#222] p-4">
      <h2 className="text-2xl font-bold">Checkout with crypto</h2>

      <div className="flex items-center justify-center bg-[#444] p-3 mt-3 gap-4">
        <p>total amount: {paymentTotal}</p>

        <button onClick={handleSub} className="bg-[#111] p-2 rounded-lg">
          enter
        </button>
      </div>
    </div>
  );
};
