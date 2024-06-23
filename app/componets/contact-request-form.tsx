"use client";

import React from "react";
import { MakeARequest } from "../lib/action";


const ContactRequestForm = () => {


  const handleRequest = async (e: any) => {
    e.preventDefault();

    try {
      console.log("hjandling request");

      const formData = new FormData(e.currentTarget);

      const gg = await MakeARequest(formData);

      console.log(gg);

      // Reest form after
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <section className="p-10">
      <h2 className="text-2xl">Thanks for choosing us we are here to help</h2>

      <form className="p-5 flex flex-col gap-4" onSubmit={handleRequest}>

        <label className="bg-[#222] p-3 flex  text-center justify-between">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter a name"
            className="p-2 bg-[#111]"
          />
        </label>

        <label className="bg-[#222] p-3 flex  text-center justify-between">
          <span>Title:</span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="enter a title"
            className="p-2 bg-[#111]"
          />
        </label>

        <label className="bg-[#222] p-3">
          <span className="mb-2">Description:</span>
          <textarea
            className="w-full h-[200px] resize-none overflow-auto bg-[#111] text-white p-2"
            name="description"
            id="description"
          />
        </label>


        <button className="bg-[#222] p-2 hover:bg-[#333]">submit</button>

      </form>
    </section>
  );
};

export default ContactRequestForm;
