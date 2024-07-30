"use client";

import { toast } from "react-toastify";
import { ContactEmail } from "../lib/action";

const ContactUs = () => {
  const handleContact = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = e.target as HTMLFormElement
    try {
      const res = await ContactEmail(undefined, formData);
      toast(res.message)
      form.reset()
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="p-4" onSubmit={handleContact}>
      <label htmlFor="email">
        <span className="text-4xl font-bold">Email:</span>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 bg-[#222] w-full mb-4  mt-4"
        />
      </label>

      <label htmlFor="content">
        <span className="text-4xl font-bold">Message:</span>
        <textarea
          id="content"
          name="content"
          className="w-full h-[400px] overflow-auto bg-[#222] p-2 resize-none mt-4"
        />
      </label>

      <button className="bg-red-500 p-2 rounded-lg w-[30%] font-bold hover:bg-red-800 mt-4">
        contact
      </button>
    </form>
  );
};

export default ContactUs;
