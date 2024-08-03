import { getSession } from "@/app/lib/action";
import { userTransactionHistory } from "@/app/lib/getUserLib";
import Link from "next/link";

const Page = async () => {
  const gg = await getSession();
  const userTransaction: any = await userTransactionHistory(
    gg.userId as string
  );

  const UserTransactions = userTransaction.map((item:any) => (
    <div
      key={crypto.randomUUID()}
      className="w-[500px] h-[220px] relative flex flex-col justify-between bg-[#333] mx-auto bg-[#111] p-4 rounded-lg drop-shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-between w-full bg-[#444] p-4 rounded drop-shadow-lg">
        <h2 className="text-xl">user: {item.user}</h2>
      </div>

      <div className="flex items-center justify-between w-full border-2 p-2">
        <h2 className="flex flex-col gap-2 ">
          <span className="underline">Total: {item.total}</span>
          <span> Amount: {item.items.length}</span>
        </h2>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm p-1 bg-[#222]">Date: 22-3-44</h2>
          <Link
            href="/"
            className="text-sm p-1 bg-[#222] hover:bg-[#444] drop-shadow-lg rounded"
          >
            Block Tran. Hash
          </Link>
        </div>
      </div>
    </div>
  ));


  return (
    <main className="w-full min-h-screen p-10 ">
      <header className="mb-10">
        <h2 className="text-6xl font-bold">Transactions: </h2>
      </header>

      <section className="w-full flex flex-col gap-4  bg-[#222] p-10 rounded h-[800px] overflow-auto">
        {UserTransactions}
      </section>
    </main>
  );
};

export default Page;
