import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#333] p-4">

      <header className="mb-4">
        <h2 className="text-6xl font-bold">Contact US</h2>
        <p className="text-gray-200 text-[18px] p-4">
          Need a quote or would like to know how much and how long it will take
          to get your website completed for you, contact us below and we will
          get it in contact with you as soon as possible.
        </p>
      </header>

      <form className="p-4">
        <label htmlFor="email">
          <span className="text-4xl font-bold">Email:</span>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 bg-[#222] w-full mb-4  mt-4"
          />
        </label>
        <label htmlFor="messaage">
          <span className="text-4xl font-bold">Message:</span>
          <textarea
            id="message"
            name="message"
            className="w-full h-[400px] overflow-auto bg-[#222] p-2 resize-none mt-4"
          />
        </label>
        
        <button className="bg-red-500 p-2 rounded-lg w-[30%] font-bold hover:bg-red-800 mt-4">
          contact
        </button>
      </form>

      <div className="flex items-center justify-around mt-10  bg-[#222] rounded drop-shadow-lg p-8 ">
        <Link
          href="http://twitter.com"
          target="_blank"
          className="bg-[#333] p-3 rounded-lg"
        >
          twitter
        </Link>
        <Link
          href="http://twitter.com"
          target="_blank"
          className="bg-[#212] p-3 rounded-lg"
        >
          linkin
        </Link>
        <Link
          href="http://twitter.com"
          target="_blank"
          className="bg-[#210] p-3 rounded-lg"
        >
          slack
        </Link>
      </div>

    </div>
  );
};

export default Contact;
