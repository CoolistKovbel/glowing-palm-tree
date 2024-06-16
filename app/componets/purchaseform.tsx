"use client";

import { ethers } from "ethers";
import React from "react";

const PurchaseForm = () => {
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const price = e.target.amountNeed.value * 100;

    try {
      console.log("amount", price);

      // await HandleFormSubmit(price);

      const gg = new ethers.providers.Web3Provider(window.ethereum);

      const signer = await gg.getSigner();

      const basictranasction = await signer.sendTransaction({
        value: ethers.utils.parseUnits(price.toString()),
        gasLimit: 900000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
      });

      await basictranasction.wait();



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
        />
      </label>

      <button className="text-2xl bg-[#222] mt-2 p-2 rounded-lg ">
        Enter amount
      </button>
    </form>
  );
};

export default PurchaseForm;
