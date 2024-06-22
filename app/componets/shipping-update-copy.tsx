"use client";

import { handleShippingInfo, updateUserAccount } from "../lib/action";

const ShippingUpdateForm = () => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log("hande submit");
      const formData = new FormData(e.currentTarget);
      const gg = await updateUserAccount(formData);

      e.target.reset()

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-[#222]">
      <label
        htmlFor="Address"
        className="bg-[#111] p-3 flex items-center justify-between"
      >
        <span>Address: </span>
        <input
          type="text"
          id="Address"
          name="Address"
          placeholder="enter address"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label
        htmlFor="city"
        className="bg-[#111] p-3 flex items-center justify-between"
      >
        <span>city: </span>
        <input
          type="city"
          id="city"
          name="city"
          placeholder="enter new city"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label
        htmlFor="state"
        className="bg-[#111] p-3 flex items-center justify-between"
      >
        <span>State: </span>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="enter new state"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label
        htmlFor="zip"
        className="bg-[#111] p-3 flex items-center justify-between"
      >
        <span>Zip: </span>
        <input
          type="number"
          id="zip"
          name="zip"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <button className="bg-[#111] block p-2 font-bold items-left hover:bg-[#444]">
        submit
      </button>
    </form>
  );
};

export default ShippingUpdateForm;
