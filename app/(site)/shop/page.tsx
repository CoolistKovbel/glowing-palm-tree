import HeaderHero from "@/app/componets/headerhero";
import PurchaseForm from "@/app/componets/purchaseform";
import { getSession } from "@/app/lib/action";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ezpeaid | Shop",
  description:
    "Ezuaid Shop, where you can get your latest health supplies.",
};

const page = async () => {

  const user = await getSession();




  return (
    <main className="w-full min-h-screen p-10 ">

      <HeaderHero />

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">

        <header className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold flex items-center justify-between w-[60%] mb-4">
            Need something for cuts and falls
            <span className="block">$49.99</span>
          </h2>
          <div className="w-[300px] h-[300px] relative">
            <Image src="/backpackaid.jpg" alt="sad life" fill />
          </div>
        </header>

        <p className="text-[21px]">
          We have a perfect medical pack ready for moments of distress. We have
          a pack filled with all the essential items you will need. By going
          with our basic package you will be able to recieve:
        </p>

        <ul className="p-3">
          <li>4x bandages</li>
          <li>2x bandaids</li>
          <li>1x hydrogen poraxide</li>
        </ul>

        <PurchaseForm user={JSON.stringify(user)} />
      </footer>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <header className="flex items-center justify-around relative my-10">

          <h2 className="text-4xl font-bold flex items-center justify-between">
            Want to get your head up 
            <span className="block absolute bg-[#888] p-4 font-bold -top-20 right-0 drop-shadow-lg rounded ">$49.99</span>
          </h2>

          <p className="text-8xl">
            🎆
          </p>

        </header>
        <p className="text-md text-gray-400 font-bold">
          We have a perfect medical pack ready for moments when you feeling like
          you need a little boost. We have a pack filled with all the essential
          items you will need. By going with our basic package you will be able
          to recieve:
        </p>
        <ul className="p-3">
          <li>4x Energy Balls</li>
          <li>2x Energy shots</li>
          <li>1x Water</li>
        </ul>

        <PurchaseForm user={JSON.stringify(user)} />
      </footer>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold flex items-center justify-between w-full mb-4">
          Get your own comfy box<span className="block">$49.99</span>
        </h2>
        <p className="text-sm">
          Get your self situated, snuggled, and ready for any night out going
          with our basic package you will be able to recieve:
        </p>
        <ul className="p-3">
          <li>4x pillows </li>
          <li>2x blankets</li>
          <li>1x Bedcover</li>
        </ul>

        <PurchaseForm user={JSON.stringify(user)} />
      </footer>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <header className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold flex items-center justify-between w-[60%] mb-4">
            Need something for cuts and falls
            <span className="block">$49.99</span>
          </h2>
          <div className="w-[300px] h-[300px] relative">
            <Image src="/backpackaid.jpg" alt="sad life" fill />
          </div>
        </header>

        <p className="text-[21px]">
          We have a perfect medical pack ready for moments of distress. We have
          a pack filled with all the essential items you will need. By going
          with our basic package you will be able to recieve:
        </p>

        <ul className="p-3">
          <li>4x bandages</li>
          <li>2x bandaids</li>
          <li>1x hydrogen poraxide</li>
        </ul>

        <PurchaseForm user={JSON.stringify(user)} />
      </footer>

    </main>
  );
};

export default page;
