"use client";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import { createOrder, updateCurrentOrder } from "../lib/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./ui/spinner";
import { checkUserAddress } from "../lib/getUserLib";

interface PaymentOptionProp {
  transactions: any;
  user: any;
}

export const PaymentOption = ({ transactions, user }: PaymentOptionProp) => {
  const [isLoading, setIsLoading] = useState(false);
  let paymentTotal = 0;
  const router = useRouter();

  transactions.map((item: any) => {
    if (item.pendingShipping === true) {
      paymentTotal += Number(item.amount);
    }
  });

  const handleSub6 = async () => {
    try {
      console.log("submiting trnasaction");
      const etherPrice = 3200;
      // const price = (paymentTotal * 49.99) / etherPrice;
      console.log("Checking to see if user has an address");
      const userAddress = await checkUserAddress(user.userId);

      if (userAddress !== null ) {
        const price = (paymentTotal * 3) / etherPrice;
        const gg = new ethers.providers.Web3Provider(window.ethereum);
        const message = `You have enough $$ for your order`;

        const signer = gg.getSigner();
        const address = await signer.getAddress();
        const sign: any = await signer.signMessage(message);

        const authorizationPrep = ethers.utils.verifyMessage(message, sign);
        const amountInWei = ethers.utils.parseEther(price.toString());

        if (authorizationPrep.toLowerCase() === address.toLowerCase()) {
          console.log("address correct");

          const basictranasction = await signer.sendTransaction({
            value: amountInWei,
            gasLimit: 900000,
            to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
          });

          console.log(basictranasction);
          setIsLoading(true);
          toast(`Setting transactoin ${JSON.stringify(basictranasction.hash)}`);

          await basictranasction.wait();
          const transaction: any = await createOrder(sign, user);

          if (transaction.status === "error") {
            toast(transaction.payload as string);
          }

          if (transaction.status === "success") {
            router.push(
              `/shop/confirmation?id=${transaction.payload as string}`
            );
          }

          setIsLoading(false);

          toast(
            `completing transactoin ${JSON.stringify(basictranasction.hash)}`
          );
        }

      } else {
        toast(
          "there doesnt seem to be an address, please make sure your account is updated"
        );
      }
    } catch (error) {
      console.log(error, "ERrrooooR");
      toast("An error accoured please check your account settings");
    }
  };

  return (
    <div className="bg-[#222] p-4">
      <h2 className="text-2xl font-bold">Checkout with crypto</h2>

      {isLoading && <Spinner />}

      <div className="flex items-center justify-center bg-[#444] p-3 mt-3 gap-4 flex-col">
        <p className="flex items-center justify-between w-full">
          <span className="block bg-[#222] p-3">Total Amount</span>
          <span className="block underline">${paymentTotal * 49.99}</span>
        </p>

        <button
          onClick={handleSub6}
          className="bg-[#111] hover:bg-[#666] p-2 rounded-lg w-full"
        >
          pay
        </button>
      </div>
    </div>
  );
};
