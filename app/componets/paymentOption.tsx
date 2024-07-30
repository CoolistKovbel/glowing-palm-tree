"use client";

import { ethers } from "ethers";
import { toast } from "react-toastify";

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
      const etherParsed = ethers.utils.parseUnits("314099999999999", "wei");

      const signer = await gg.getSigner();

      const basictranasction = await signer.sendTransaction({
        value: etherParsed,
        gasLimit: 900000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
      });

      toast("Setting transactoin", basictranasction.hash as any)
      
      await basictranasction.wait();

      toast("completing transactoin", basictranasction.hash as any)

      // Create server



    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#222] p-4">
      <h2 className="text-2xl font-bold">Checkout with crypto</h2>

      <div className="flex items-center justify-center bg-[#444] p-3 mt-3 gap-4">
        <p>
          <span className="bg-[#222] p-3">Total Amount</span> $
          {paymentTotal * 49.99}
        </p>

        <button onClick={handleSub} className="bg-[#111] p-2 rounded-lg">
          pay
        </button>
      </div>
    </div>
  );
};
