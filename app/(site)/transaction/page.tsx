import React from "react";

const Page = () => {
  const transactionstable = [
    {
      transactionUserA: "user one",
      transactionUserB: "user one",
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
  ];

  return (
    <main className="w-full min-h-screen p-10 ">
      <header className="mb-10">
        <h2 className="text-4xl font-bold">Transactions</h2>
      </header>
      <section className="w-full flex flex-col gap-4  bg-[#222] p-10">
        {transactionstable.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="w-[500px] h-[120px] relative flex flex-col mx-auto bg-[#111] p-4 rounded-lg drop-shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl">TO: {item.transactionUserA}</h2>
              <h2 className="text-xl">From: {item.transactionUserB}</h2>
            </div>

            <div className="flex items-center justify-between w-full">
              <h2 className="flex flex-col gap-2">
                <span>Product: {item.transactionUserA}</span>
                <span> Amount: {item.amount}</span>
              </h2>
              <h2 className="text-sm">Date: {item.date}</h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
