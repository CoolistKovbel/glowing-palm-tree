import { getSession } from "@/app/lib/action";
import { getCurrenbyUserId } from "@/app/lib/getUserLib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user:any = await getSession();

  const isDev = user.role === "DEV";

  const serverUser:any = await getCurrenbyUserId(user.userId as string);

  const transactionHistory = [
    {
      title: "",
      description: "",
      accepted: false,
    },
    {
      title: "lifestyle blog",
      description: "NEed to create a webisite where it is a blog.",
      accepted: false,
    },
  ];

  console.log(user)

  return (
    <main className="min-h-screen flex-col items-center gap-4 p-5">
      <header className="p-10 bg-[#222] flex items-center justify-between">
        <h2 className="text-2xl">PRofile</h2>

        <Link href="/profile/update" className="bg-gray-400 p-2 rounded-lg">
          Update profile
        </Link>
      </header>

      <section>
        <header className="flex items-center justify-around p-10">
          <div className="w-[300px] h-[300px] relative">
            <Image src="https://picsum.photos/200" alt="eh" fill />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Role: {serverUser?.role}</h2>
            <h2 className="text-2xl">
              Status: {serverUser?.isPro ? "cool" : "sad"}
            </h2>
          </div>
        </header>

        <div className="bg-[#333] p-4 flex flex-col gap-3">
          <p className="bg-[#111] p-2">
            username: <span>{user.username}</span>
          </p>
          <p className="bg-[#111] p-2">
            email: <span>{user.email}</span>
          </p>
          <p className="bg-[#111] p-2">
            metaAddress: <span>{user.metaAccount}</span>
          </p>
        </div>

        {/* <div className="p-4">
          <h2 className="text-2xl font-bold">Transaction History:</h2>


        </div> */}
      </section>
    </main>
  );
};

export default Page;
