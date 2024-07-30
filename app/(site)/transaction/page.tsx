import { getAllTranasctions, getSession } from "@/app/lib/action";
import { getCurrentUserTransactionById } from "@/app/lib/getUserLib";
import {ethers} from "ethers"
import Link from "next/link";



const Page = async () => {

  const gg = await getSession();
  // const trnasaction =  await getAllTranasctions()

  const transactionstable = [
    {
      transactionUserA: "0x1421f23f",
      transactionUserB: "0x12412rf1",
      amount: "one",
      product: "firstaid one",
      date: "01-02-03",
    },
    {
      transactionUserA: "user two",
      transactionUserB: "user two",
      amount: "one",
      product: "firstaid one",
      date: "01-02-03",
    },
    {
      transactionUserA: "user three",
      transactionUserB: "user three",
      amount: "three",
      product: "firstaid three",
      date: "01-02-03",
    },
  ]

// const provider  = new ethers.providers.Web3Provider(window?.location)
// const getPriceFromEthjer = provider.getEtherPrice()
// const getPriceOfGass = provider.getGasPrice()
// const currentBlockBumber = provider.blockNumber
// const signer = provider.getSigner()




  return (
    <main className="w-full min-h-screen p-10 ">

      <header className="mb-10">
        <h2 className="text-6xl font-bold">Transactions: </h2>
      </header>

      <section className="w-full flex flex-col gap-4  bg-[#222] p-10 rounded h-[800px] overflow-auto">
        {transactionstable.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="w-[500px] h-[220px] relative flex flex-col justify-between bg-[#333] mx-auto bg-[#111] p-4 rounded-lg drop-shadow-lg overflow-hidden"
          >

            <div className="flex items-center justify-between w-full bg-[#444] p-4 rounded drop-shadow-lg">
              <h2 className="text-xl">TO: {item.transactionUserA}</h2>
              <h2 className="text-xl">From: {item.transactionUserB}</h2>
            </div>

            <div className="flex items-center justify-between w-full border-2 p-2">

              <h2 className="flex flex-col gap-2 ">
                <span className="underline">Product: {item.product}</span>
                <span> Amount: {item.amount}</span>
              </h2>

              <div className="flex flex-col gap-2">
                <h2 className="text-sm p-1 bg-[#222]">Date: {item.date} </h2>
                <Link href="/" className="text-sm p-1 bg-[#222] hover:bg-[#444] drop-shadow-lg rounded">Block Tran. Hash</Link>
              </div>

            </div>
            
          </div>
        ))}
      </section>

    </main>
  );
};

export default Page;
