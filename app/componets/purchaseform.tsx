"use client";

import { ethers } from "ethers";
import Link from "next/link";
import { getCurrenbyUserId } from "../lib/getUserLib";
import { toast } from "react-toastify";
import { createTranscation, updateCurrentTransaction,  } from "../lib/action";

interface PurchaseFormProps {
  user: any;
}

const PurchaseForm = ({ user }: PurchaseFormProps) => {
  const deUser = JSON.parse(user);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const price = (e.target.amountNeed.value * 100) / 3269;

    try {
      console.log("amount", price);

      const gg = new ethers.providers.Web3Provider(window.ethereum);

      const signer = await gg.getSigner();

      const cgg: any = await getCurrenbyUserId(deUser.userId);

      const res = JSON.parse(cgg);

      if (res.Address === null || res.Address === undefined) {
        toast(
          `current your stupid please fill out the shipping info on your profile`
        );
        return;
      }

      const sendMessage = `You are certain you want this product...`;
      const sign = await signer.signMessage(sendMessage);

      if (sign.length > 0) console.log("signature is created");

      toast(`Creating trasnaction  `);

      const payload = {
        user: res._id as string,
        transactionsignature: sign,
        homeAddress: res.Address,
        address: res.address,
        city: res.city,
        state: res.state,
        zip: res.zip,
        phone: res.phone,
        email: res.email,
      };

      const transactionStart: any = await createTranscation(payload);

      console.log(transactionStart);

      const basictranasction = await signer.sendTransaction({
        value: ethers.utils.parseUnits(price.toString()),
        gasLimit: 900000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
      });

      toast(`current in progress ${basictranasction.hash} `);
      await basictranasction.wait();
      toast(`completed  trasnastion ${basictranasction.hash} `);

      const updateTransaction = await updateCurrentTransaction(
        basictranasction.hash,
        transactionStart._id
      );

      console.log("updated", updateTransaction);

      return "success";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="amountNeed" className="flex flex-col gap-4">
        <span className="text-2xl">Amount</span>

        <input
          type="text"
          placeholder="enter amount"
          id="amountNeed"
          className="p-2 text-white bg-[#222]"
          disabled={!JSON.parse(user).isLoggedIn}
        />
      </label>

      <button className="text-2xl bg-[#222] mt-2 p-2 rounded-lg ">
        {JSON.parse(user).isLoggedIn ? (
          "Enter amount"
        ) : (
          <Link href="/">login</Link>
        )}
      </button>
    </form>
  );
};

export default PurchaseForm;
