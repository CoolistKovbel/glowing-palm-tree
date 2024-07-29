"use client";

import { useRouter } from "next/navigation";
import { AddToCheckOut } from "../lib/action";
import { useModal } from "../hooks/use-modal-store";
import { ethers } from "ethers";

interface OrderNowFormProps {
  isLogged: any;
}

const OrderNowForm = ({ isLogged }: OrderNowFormProps) => {
  const router = useRouter();
  const { onOpen } = useModal();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      console.log("what is life");

      const total = 49.99 * e.target.amount.value;
      const valueEth = ethers.utils.parseEther((total / 3190).toString());

      const web3 = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await web3.getSigner();

      const sendMessage = `Hi, you are purchasing the container correct a total of ${total}`;
      const sign = await signer.signMessage(sendMessage);

      const gg = await AddToCheckOut(formData, sign);

      if (gg.startsWith("Success")) {
        console.log(gg);
        router.push("/cart");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleLogin = async () => {
    try {
      console.log("handling login");

      onOpen("signUserIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full min-h-screen">
      <header className="flex flex-col items-start gap-5 p-10 bg-[#222]">
        <h2 className="text-[2rem] capitalize">
          Your number medic pack suited and ready for any emergency.{" "}
        </h2>

        <p className="text-md">
          Suited with the latest and greatest health benifited items.
        </p>

        <ul className="p-2 drop-shadow-lg rounded text-xl flex w-full   ">
          <div className="bg-[#222] p-4 gap-4 flex flex-col w-full items-end">
            <li>2x banadges</li>
            <li>6x band aids</li>
            <li>4x alchole whips</li>
            <li>2x tweezzers </li>
            <li>1x hand santizers </li>
            <li>... and more</li>
          </div>
        </ul>
      </header>

      <form
        className="flex flex-col mx-auto mt-20 gap-4 w-[80%] bg-[#444] drop-shadoow-lg rounded p-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount" className="flex items-start justify-between ">
          <span className="text-2xl">Amount of pouches:</span>
          <input
            type="amount"
            placeholder="amount of pouches"
            className="p-2 bg-[#222] text-white"
            name="amount"
            id="amount"
          />
        </label>

        <label
          htmlFor="pouch"
          className="bg-[#222] p-4 flex items-center justify-between"
        >
          <span className="font-bold text-2xl underline p-2">
            Type of pouch
          </span>
          <select
            name="pouch"
            id="pouch"
            className="bg-[#333] p-2 drop-shadow-lg"
          >
            <option value="xxx">xxx</option>
            <option value="basic">Basic</option>
            <option value="bulk">Bulk</option>
          </select>
        </label>

        {isLogged.isLoggedIn ? (
          <div>
            <button className="text-xl font-bold bg-[#222] p-4 hover:bg-[#333] rounded ">
              add item to cart
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleLogin}
              className="text-xl font-bold bg-[#222] p-2 hover:bg-[#333]"
              type="button"
            >
              login
            </button>
          </div>
        )}
      </form>

      <section className="p-10 flex flex-col gap-5">

        <article className="bg-[#222] p-4 drop-shadow-lg rounded flex flex-col gap-5">
          <header>
            <h2 className="text-4xl">Basic Aid Package</h2>
          </header>

          <div>

            <p className="text-md mb-5">
              In our basic aid package we basically provide the neccessities for
              any scrapes and falls. Where you will be able to handle any
              situate without an extra help.
            </p>
            <p>
              Our package includes: 
            </p>

            <ul className="p-2 drop-shadow-lg rounded text-xl flex w-full   ">
              <div className="bg-[#222] p-4 gap-4 flex flex-col w-full items-end">
                <li>2x banadges</li>
                <li>6x band aids</li>
                <li>4x alchole whips</li>
                <li>2x tweezzers </li>
              </div>
            </ul>
          </div>

        </article>


        <article className="bg-[#222] p-4 drop-shadow-lg rounded flex flex-col gap-5">
          <header>
            <h2 className="text-4xl">Bulk Aid Packge</h2>
          </header>


          <div>

            <p className="text-md mb-5">
              In our basic aid package we basically provide the neccessities for
              any scrapes and falls. Where you will be able to handle any
              situate without an extra help.
            </p>
            <p>
              Our package includes: 
            </p>

            <ul className="p-2 drop-shadow-lg rounded text-xl flex w-full   ">
              <div className="bg-[#222] p-4 gap-4 flex flex-col w-full items-end">
                <li>2x banadges</li>
                <li>6x band aids</li>
                <li>4x alchole whips</li>
                <li>2x tweezzers </li>
              </div>
            </ul>
          </div>


        </article>

      </section>
    </section>
  );
};

export default OrderNowForm;
