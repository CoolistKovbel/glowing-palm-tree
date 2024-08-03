import NotificationProfo from "@/app/componets/notificationProfo";
import { getSession } from "@/app/lib/action";
import { getCurrenbyUserId, userPurchesHistory, userTransactionHistory } from "@/app/lib/getUserLib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user: any = await getSession();
  const isDev = user.role === "DEV";

  const serverUser: any = await getCurrenbyUserId(user.userId as string);
  const suUser = JSON.parse(serverUser);

  const checkoutList = await userPurchesHistory(user.userId as string);
  const userTranasctoins = await userTransactionHistory(user.userId)

  return (
    <main className="min-h-screen flex-col items-center gap-10 flex p-5">
      {suUser.Address === null && <NotificationProfo />}

      <header className="p-10 bg-[#222] flex items-center justify-between w-full">
        <h2 className="text-2xl">PRofile</h2>

        <Link href="/profile/update" className="bg-gray-400 p-2 rounded-lg">
          Update profile
        </Link>
      </header>

      <section className="w-full">
        <header className="flex items-center justify-around p-10">
          <div className="w-[300px] h-[300px] relative">
            <Image src="https://picsum.photos/200" alt="eh" fill />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Role: {user?.role}</h2>
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
            metaAddress: <span>{suUser.address}</span>
          </p>
        </div>
      </section>

      <section className="w-full">
        <header className="mb-10">
          <h2 className="text-2xl">Recent Purchases:</h2>
        </header>
        <div className="w-[80%] mx-auto p-4 bg-[#555]">
          {checkoutList?.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="flex drop-shadow-lg rounded items-center justify-between bg-[#444] p-4"
            >
              <div>
                <h2>{item.product}</h2>
                <h3>{item.description}</h3>
              </div>
              <h2>Amount: {item.amount}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
