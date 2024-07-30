import HeaderHero from "@/app/componets/headerhero";
import PurchaseForm from "@/app/componets/purchaseform";
import StoreFooter1 from "@/app/componets/store/storeFooter1";
import StoreFooter2 from "@/app/componets/store/storeFooter2";
import StoreFooter3 from "@/app/componets/store/storeFooter3";
import StoreFooter4 from "@/app/componets/store/storeFooter4";
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

      <StoreFooter1 user={user} />

      <StoreFooter2 user={user}/>

      <StoreFooter3 user={user} />

      <StoreFooter4 user={user} />

    </main>
  );
};

export default page;
