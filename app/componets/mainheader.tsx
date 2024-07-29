"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoutButton from "./logoutbutton";
import { useModal } from "../hooks/use-modal-store";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { getSession } from "../lib/action";

interface MainHeaderProps {
  userSession: any;
}

const MainHeader = ({ userSession }: MainHeaderProps) => {
  const [handleUserToggle, sethandleUserToggle] = useState(false);
  const [sessionUser, setSessionUser] = useState<any>();
  const { onOpen } = useModal();

  const isLogged = userSession && JSON.parse(userSession).isLoggedIn;

  const handleSignIn = async () => {
    try {
      console.log("handle sign in ");

      if (window?.ethereum === null || window?.ethereum === undefined)
        return toast(".... my server no worky contact please");

      const gg = new ethers.providers.Web3Provider(window?.ethereum);

      const signer = gg.getSigner();
      const sAd = await signer.getAddress();

      const sendMessage = `Hi, welcome ${sAd}`;
      const sign = await signer.signMessage(sendMessage);

      onOpen("signUserIn", JSON.stringify({ sign: sign, sAd: sAd }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = async () => {
    const user = await getSession();
    console.log(user, "user data");
    setSessionUser(user);
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <header className="bg-[#222] p-4 text-white flex items-center justify-around w-full">
      <h2 className="text-2xl p-3 drop-shadow-lg">
        <Link href="/">Ezuaid</Link>
      </h2>

      {isLogged ? (
        <nav className="md:w-[30%] relative flex items-center justify-between bg-[#555] drop-shadow-lg p-2">

          <div className="flex items-center md:gap-5">
            <Link href="/about" className="bg-[#222] p-2 hover:underline ">
              About
            </Link>
            <Link href="/shop" className="bg-[#222] p-2 hover:underline ">
              Shop
            </Link>
          </div>

          <button
            onClick={() => sethandleUserToggle((prev: any) => !prev)}
            className="bg-[#444] p-2 rounded-lg drop-shadow-lg"
          >
            profile
          </button>

          {handleUserToggle && (
            <div className="w-[300px] h-[300px] absolute top-14 right-0 flex flex-col gap-4 bg-[#111] p-4 drop-shadow-lg rounded-lg z-[50] ">
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
        <nav className="w-[34%] flex items-center justify-between bg-[#444]">
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
          </div>

          <button onClick={handleSignIn} className="p-2 hover:underline bg-[#333] hover:bg-[#111]">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
