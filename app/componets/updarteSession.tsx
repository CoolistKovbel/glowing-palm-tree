"use client";

import { toast } from "react-toastify";
import { joinWaitList } from "../lib/action";

const MailingList = () => {

  const handleUserConnection = async (e: any) => {
    e.preventDefault();
    try {
      console.log("handling user connection");
        console.log(e.target.email.value)
      await joinWaitList(e.target.email.value);

      e.target.reset()

      toast("noise you are now on the waitlist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full ">
      <h2 className="text-2xl p-5 font-bold text-center bg-[#444] mb-4 uppercase">Join mailing list </h2>

      <form
        className="p-10 flex gap-4 flex-col bg-[#222] w-[60%] mx-auto drop-shadow-lg rounded"
        onSubmit={handleUserConnection}
      >
        <label
          htmlFor="email"
          className="bg-[#111] p-4 flex items-center justify-between "
        >
          <input
            type="email"
            placeholder="enter emeiaoil"
            className="p-2 bg-[#222] text-white w-full"
            id="email"
            name="email        "
          />
        </label>

        <button className="p-4 font-bold hover:bg-[#444] bg-[#111]">
          enter mailing
        </button>
      </form>

    </main>
  );
};

export default MailingList;
