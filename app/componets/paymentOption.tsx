"use client";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import { createOrder } from "../lib/action";
import { useRouter } from "next/navigation";

interface PaymentOptionProp {
  transactions: any;
  user: any;
}

export const PaymentOption = ({ transactions, user }: PaymentOptionProp) => {
  let paymentTotal = 0;
  const router= useRouter()

  transactions.map((item: any) => {
    paymentTotal += Number(item.amount);
  });

  const handleSub = async () => {
    try {
      console.log("slow");

      const gg = new ethers.providers.Web3Provider(window.ethereum);
      const etherPrice = 3500;
      const price = (paymentTotal * 49.99) / etherPrice;

      const amountInWei = ethers.utils.parseEther(price.toString());

      const signer = await gg.getSigner();

      const basictranasction = await signer.sendTransaction({
        value: amountInWei,
        gasLimit: 900000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
      });
      console.log(basictranasction)
      toast("Setting transactoin", basictranasction.hash as any);

      await basictranasction.wait();

      toast("completing transactoin", basictranasction.hash as any);

      // Create server
      const transaction:any =  await createOrder(basictranasction.hash, user);

      if(transaction.status === "error") {
        toast(transaction.payload as string)
      }

      if(transaction.status === "success"){
        router.push(`/shop/confirmation?id=${transaction.payload._id as string}`)
      }
      
      console.log(transaction)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#222] p-4">
      <h2 className="text-2xl font-bold">Checkout with crypto</h2>

      <div className="flex items-center justify-center bg-[#444] p-3 mt-3 gap-4 flex-col">
        <p className="flex items-center justify-between w-full">
          <span className="block bg-[#222] p-3">Total Amount</span> 
          <span className="block underline">${paymentTotal * 49.99}</span>
        </p>

        <button onClick={handleSub} className="bg-[#111] hover:bg-[#666] p-2 rounded-lg w-full">
          pay
        </button>
      </div>
    </div>
  );
};
