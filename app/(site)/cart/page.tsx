import TransactionComp from "@/app/componets/cart/ transaction-comp";
import { PaymentOption } from "@/app/componets/paymentOption";
import { getSession } from "@/app/lib/action";
import { Checkout } from "@/app/models/checkout";

const page = async () => {
  const user = await getSession();

  const gg = await Checkout.find({
    author: user.userId,
  }).lean();

  return (
    <main className="w-full min-h-screen p-10">
      <h2 className="text-2xl">Tranasctoin</h2>

      <header className="h-[400px] flex-col flex gap-2 mt-5 overflow-auto ">
        <TransactionComp transactions={gg} />
      </header>

      <PaymentOption transactions={gg} />

      
    </main>
  );
};

export default page;
