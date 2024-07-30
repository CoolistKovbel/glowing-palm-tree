import TransactionComp from "@/app/componets/cart/ transaction-comp";
import { PaymentOption } from "@/app/componets/paymentOption";
import { getSession } from "@/app/lib/action";
import { Checkout } from "@/app/models/Checkout";

const page = async () => {
  const user = await getSession();
  const gg = await Checkout.find({
    customer: user.userId,
  });

  return (
    <main className="w-full min-h-screen p-10">
      <h2 className="text-2xl">Tranasction</h2>
      <header className="h-[400px] flex-col flex gap-2 mt-5 overflow-auto ">
        <TransactionComp transactions={gg} />
      </header>

      <PaymentOption transactions={gg} user={user} />
    </main>
  );
};

export default page;
