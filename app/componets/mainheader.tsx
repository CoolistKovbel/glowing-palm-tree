import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-[#222] p-4 ">
      <h2 className="p-2 fomt-bold"><Link href="/">EpaMoment</Link></h2>

      <nav className="flex items-center justify-between w-[60%] bg-[#111] p-4">
        <Link href="#features">Features</Link>
        <Link href="#contact">contact</Link>

        <div className="w-[40%] flex items-center justify-around">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
