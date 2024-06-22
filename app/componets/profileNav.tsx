"use client";

import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./logoutbutton";

const ProfileNav = () => {
  const [navTog, setNavTog] = useState<any>(false);

  const handleClick = () => {
    try {
      console.log("handle clck");
      setNavTog((prev:any) => !prev);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-[#333] p-3 rounded-lg hover:bg-[#222] relative"
      >
        Profile
      </button>

      {navTog && (
        <div className="absolute -top-[40] -right-[40] h-[400px] w-[300px] bg-[#222] p-4 flex flex-col">
          <Link
            href="/profile"
            className="bg-[#111] p-2 w-full hover:bg-[#444]"
          >
            Profile
          </Link>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default ProfileNav;
