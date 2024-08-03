"use client";

import Image from "next/image";

const HeaderHero = () => {

  const handleMint = async () => {
    try {
      console.log("handle mint");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="p-10 w-full">


      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-[300px] h-[300px] relative">
          <Image src="/aidpack2.jpg" alt="what is life health pack" fill />
        </div>

        <div className="md:w-[50%] flex md:items-start justtify-betweeen capitalize flex-col gap-4">
          <h2 className="text-4xl mb-2">
            Get yourself our unique kind of health kits suited to better your
            health
          </h2>
          <p className="text-md text-gray-500">
            with 3 option to choose from there are new updates every here and
            there
          </p>
        </div>
      </div>


      <button
          className="bg-[#222] mt-10 w-full uppercase p-4 rounded-lg drop-down-lg font-bold hover:bg-[#444]"
          onClick={handleMint}
        >
          mint to save
        </button>

    </header>
  );
};

export default HeaderHero;
