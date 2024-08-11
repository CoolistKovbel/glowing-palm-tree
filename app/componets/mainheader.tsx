"use client";

import Link from "next/link";
import UserLogged from "./headers/userLogged";

interface MainHeaderProps {
  userSession: any;
  userCart: any;
}

const MainHeader = ({ userSession, userCart }: MainHeaderProps) => {
  const isLogged = userSession && JSON.parse(userSession).isLoggedIn;

  return (
    <header className="bg-[#222] p-4 text-white flex items-center justify-around w-full">
    
      <h2 className="text-2xl p-3 drop-shadow-lg">
        <Link href="/">Ezuaid</Link>
      </h2>

      <UserLogged isLogged={isLogged} userCart={userCart} />
    </header>
  );
};

export default MainHeader;
