"use client";
import Image from "next/image";

const firstmedkitcontainer = () => {
  const handleCart = async () => {
    try {
      console.log("error, handling is good");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 text-center items-start w-fit bg-[#222] p-4 ">
      <h2 className="text-2xl text-center font-bold">First Medkit</h2>

      <div>
        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/aidpack2.jpg"
            alt="our current basket filled with banddaids, bandages, neosporen, etc"
            fill
          />
        </div>

        <p className="text-xl font-bold bg-[#222] p-2 w-full">price: $250</p>

        <div className="flex items-center gap-4 flex-col p-4">
          <button
            className="bg-[#111] p-3 hover:bg-[#333]"
            onClick={handleCart}
          >
            add to cart
          </button>

          <link href="/viewmore" className="bg-[#111] p-3 hover:bg-[#333]">
            view more
          </link>
        </div>
      </div>
    </div>
  );
};

export default firstmedkitcontainer;
