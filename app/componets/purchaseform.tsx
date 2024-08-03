"use client";

import Link from "next/link";
import { AddToCheckOut } from "../lib/action";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";

interface PurchaseFormProps {
  user: any;
  storeItem: string;
}

const PurchaseForm = ({ user, storeItem }: PurchaseFormProps) => {
  const deUser = JSON.parse(user);
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // const provider = new ethers.providers.Web3Provider(window?.location);
    // const signer = provider.getSigner();
    // const address = await signer.getAddress();

    // const message = `hey ${user.username}, this product is one of a kind you will handle it with caution.`;
    // const sig = await signer.signMessage(message);

    // console.log(sig, "user signature");

    try {
      formData.append("amount", e.target.amountNeed.value);
      formData.append("user", JSON.stringify(deUser));
      formData.append("userSignature", "ewcwevwev");
      formData.append("storeId", storeItem);

      const res = await AddToCheckOut(formData, undefined);

      if (res === "Success") {
        router.push("/cart");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center justify-between w-full bg-[#111] p-4 mt-4">

      <label htmlFor="amountNeed" className="flex flex-col gap-4">
        <span className="text-2xl">Amount: </span>

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
