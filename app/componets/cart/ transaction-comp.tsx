import React from "react";
import moment from "moment";
import CloseButton from "../closeButton";

interface TransactionCompProps {
  transactions: any;
}

const TransactionComp = ({ transactions }: TransactionCompProps) => {
  const pendingTransactions = transactions.filter((item:any) => item.pendingShipping === true)

  let fullPAyment = 0;
  pendingTransactions.forEach((item:any) => {
    fullPAyment += Number(item.amount);
  });

  

  return (
    <div className="flex items-center flex-col gap-4 ">

      {pendingTransactions.map((item:any) => {
        return (
          <section key={crypto.randomUUID()} className="bg-[#222] p-2 w-full relative">

            <div className="p-4 flex flex-row gap-2 flex items-center justify-between ">
              <h2 className="text-2xl">{item.product}</h2>
              <p className="text-gray-500 font-bold">Amount: {item.amount}</p>

              <p className="text-lg">
                <span>date:</span>
                {moment(item.createdAt).format("MMM Do YY")}
              </p>

              <p className="text-lg">
                <span>amount:</span> {item.amount}
              </p>
            </div>

            <CloseButton product={item._id} />

          </section>
        );
      })}
      
    </div>
  );
};

export default TransactionComp;
