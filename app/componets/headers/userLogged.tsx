"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { ethers } from "ethers";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import LogoutButton from "../logoutbutton";

interface UserLoggedProps {
  isLogged: boolean;
  userCart: any;
}

const UserLogged = ({ isLogged, userCart }: UserLoggedProps) => {
  const { onOpen } = useModal();
  const [handleUserToggle, sethandleUserToggle] = useState(false);

  const handleSignIn = async () => {
    try {
      console.log("handle sign in ");

      if (window?.ethereum === null || window?.ethereum === undefined)
        return toast(".... my node server no worky contact please");

      const gg = new ethers.providers.Web3Provider(window?.ethereum);

      const signer = gg.getSigner();
      const sAd = await signer.getAddress();

      const sendMessage = `Hi, welcome ${sAd}, you're going to be creating an account today right.`;
      const sign = await signer.signMessage(sendMessage);

      onOpen("signUserIn", JSON.stringify({ sign: sign, sAd: sAd }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLogged ? (
        <nav className=" w-[50%] relative flex items-center justify-between bg-[#555] drop-shadow-lg p-4 z-[100]">
          <div className="flex items-center md:gap-5">
            <Link href="/about" className="bg-[#222] p-2 hover:underline ">
              About
            </Link>
            <Link href="/shop" className="bg-[#222] p-2 hover:underline ">
              Shop
            </Link>
            <Link
              href={"/cart"}
              className="bg-[#222] p-2 hover:underline relative"
            >
              Cart{" "}
              <span className="p-2 bg-[#444] absolute -top-5 -right-5 rounded-full">
                {JSON.parse(userCart).length}
              </span>
            </Link>
          </div>

          <button
            onClick={() => sethandleUserToggle((prev: any) => !prev)}
            className="bg-[#444] p-2 rounded-lg drop-shadow-lg"
          >
            <span className="rotate-45">🌠</span>
          </button>

          {handleUserToggle && (
            <div className="w-[300px] h-[300px] absolute top-14 right-0 flex flex-col gap-4 bg-[#111] p-4 drop-shadow-lg rounded-lg z-[100] ">
              <Link href="/profile" className="bg-[#222] p-2">
                profile
              </Link>
              <Link href="/contact" className="bg-[#222] p-2">
                Contact
              </Link>
              <Link href="/transaction" className="bg-[#222] p-2">
                transactions
              </Link>
              <LogoutButton />
            </div>
          )}
        </nav>
      ) : (
        <nav className="w-[50%] flex items-center justify-between bg-[#444] p-4">
          <div className="flex items-center  w-[50%]">
            <Link href="/about" className=" p-2 hover:underline ">
              About
            </Link>
            <Link href="/shop" className=" p-2 hover:underline ">
              Shop
            </Link>
            <Link href="/contact" className=" p-2 hover:underline ">
              Contact
            </Link>
            <Link href="/hub" className=" p-2 hover:underline ">
              hub
            </Link>
          </div>

          <button
            onClick={handleSignIn}
            className="p-2 hover:underline bg-[#333] hover:bg-[#111]"
          >
            Sign In
          </button>
        </nav>
      )}
    </>
  );
};

export default UserLogged;
