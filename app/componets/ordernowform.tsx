"use client";

import { AddToCheckOut } from "../lib/action";

const OrderNowForm = () => {


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log("what is life");
      
      const formData = new FormData(e.currentTarget);
      AddToCheckOut(formData);



    } catch (error) {
      console.log("error");
    }
  };

  return (
    <section className="w-full min-h-screen" onSubmit={handleSubmit}>
      <header className="flex flex-col p-10">
        <p className="text-2xl">Your number one tool for your nessary needs</p>
        <p>Suited with the latest and greatest health benifited items.</p>
      </header>

      <form className="flex flex-col mx-auto  gap-4 w-[80%]">
        <label htmlFor="amount" className="flex items-center justify-between">
          <span>Amount of pouches:</span>
          <input
            type="amount"
            placeholder="amount of pouches"
            className="p-2 bg-[#222] text-white"
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

        <button
          className="text-xl font-bold bg-[#222] p-2 hover:bg-[#333]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default OrderNowForm;
