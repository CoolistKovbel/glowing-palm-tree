"use client";

import { useRouter } from "next/navigation";
import { AddToCheckOut } from "../lib/action";
import Link from "next/link";

interface OrderNowFormProps {
  isLogged: any;
}

const OrderNowForm = ({ isLogged }: OrderNowFormProps) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log("what is life");

      const formData = new FormData(e.currentTarget);

      const gg = await AddToCheckOut(formData);

      if (gg.startsWith("Success")) {
        console.log(gg);
        router.push("/cart");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <section className="w-full min-h-screen">

      <header className="flex flex-col p-10">
        <p className="text-2xl">Your number one tool for your nessary needs</p>
        <p>Suited with the latest and greatest health benifited items.</p>
      </header>

      <form
        className="flex flex-col mx-auto  gap-4 w-[80%]"
        onSubmit={handleSubmit}
      >

        <label
          htmlFor="amount"
          className="flex items-start justify-between flex-col"
        >
          
          <span>Amount of pouches:</span>
          <input
            type="amount"
            placeholder="amount of pouches"
            className="p-2 bg-[#222] text-white"
            name="amount"
            id="amount"
          />
        </label>

        <label
          htmlFor="pouch"
          className="bg-[#222] p-4 flex items-center justify-between"
        >
          <span className="font-bold text-2xl bg-[#444] p-2">
            Type of pouch
          </span>
          <select name="pouch" id="pouch" className="bg-[#222] p-2">
            <option value="xxx">xxx</option>
            <option value="basic">Basic</option>
            <option value="bulk">Bulk</option>
          </select>
        </label>

        {isLogged.isLoggedIn ? (
          <div>
            <button className="text-xl font-bold bg-[#222] p-2 hover:bg-[#333]">
              add item to cart
            </button>
          </div>
        ) : (
          <div>
            <Link
              href="/login"
              className="text-xl font-bold bg-[#222] p-2 hover:bg-[#333]"
            >
              login
            </Link>
          </div>
        )}
      </form>
      
    </section>
  );
};

export default OrderNowForm;
