import PurchaseForm from "@/app/componets/purchaseform";
import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#111] p-10">
      <header className="flex items-center justify-between flex-col">
        <div className="w-[100%] md:w-[40%] bg-[#333] text-center">
          <h2 className="text-2xl bg-[#222] p-3">first aid</h2>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/" alt="image of first aid kit" fill />
          </div>
        </div>

        <div className="p-3">
          {/* Carosal */}
          <div className="w-[300px] h-[300px] relative">
            <Image src="/" alt="image booth" fill />
          </div>
        </div>
      </header>

      <footer className="bg-[#444] p-4 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold">
          Need something for cuts and falls
        </h2>
        <p className="text-sm">
          We have a perfect medical pack ready for moments of distress. We have
          a pack filled with all the essential items you will need. By going
          with our basic package you will be able to recieve:
        </p>
        <ul className="p-3">
          <li>4x bandages</li>
          <li>2x bandaids</li>
          <li>1x hydrogen poraxide</li>
        </ul>

        <PurchaseForm />
      </footer>
    </main>
  );
};

export default Page;