import Link from "next/link";
import React from "react";
import LogoutButton from "./logoutbutton";
import { getSession } from "../lib/action";

const MainHeader = async () => {
  const user = await getSession()
  console.log(user)
  const isLogged = user.isLoggedIn;

  return (
    <header className="flex items-center justify-between w-full bg-[#222] p-4 ">
      <h2 className="p-2 fomt-bold">
        <Link href="/">Phenuop</Link>
      </h2>

      <nav className="flex items-center justify-between w-[60%] bg-[#111] p-4">
        <Link href="#features">Discount</Link>
        <Link href="#contact">New</Link>
        <Link href="#contact">Contact</Link>

        {isLogged ? (
          <div>
            <LogoutButton />
          </div>
        ) : (
          <div className="w-[40%] flex items-center justify-around">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
