import Link from "next/link";
import React from "react";
import { getSession } from "../lib/action";
import ProfileNav from "./profileNav";

const MainHeader = async () => {
  const user = await getSession();

  const isLogged = user.isLoggedIn;

  const handleClick = () => {
    try {
      console.log("handle click");
    } catch (error) {
      console.log("handle errror");
    }
  };


  return (
    <header className="flex items-center justify-between w-full bg-[#222] p-4 ">
      <h2 className="p-2 fomt-bold ">
        <Link
          href="/"
          className="flex items-center flex-row-reverse gap-4 font-bold"
        >
          EndourHealth
          {/* <Image src="/logo.png" alt=";ogsngs" width={80} height={80} /> */}
        </Link>
      </h2>

      <nav className="flex items-center justify-between  bg-[#111] p-4 rounded-lg ">
        {isLogged ? (
          <div className="w-[50%] flex items-center gap-4 ">
            <Link href="/ordernow">featured</Link>

            <Link href="/product">product</Link>

            <ProfileNav />
          </div>
        ) : (
          <div className="w-[50%] flex items-center gap-4">
            <Link
              href="/ordernow"
              className="bg-[#222] p-2 hover:bg-[#444] font-bold rounded-lg"
            >
              Order Now
            </Link>
          </div>
        )}

        {!isLogged && (
          <div className="w-[50%] flex items-center justify-around">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
