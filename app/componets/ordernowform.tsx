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

    try {
      console.log("what is life");

      const total = 49.99 * e.target.orderNow.value;
      const valueEth = ethers.utils.parseEther((total / 3590).toString());

      const web3 = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await web3.getSigner();

      const sendMessage = `Hi, you are purchasing the container correct a total of ${total}`;
      const sign = await signer.signMessage(sendMessage);

      const formData = new FormData(e.currentTarget);

      const gg = await AddToCheckOut(formData, sign);

      if (gg.startsWith("Success")) {
        console.log(gg);
        router.push("/cart");
      }
    } catch (error) {
      console.log("error");
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
      <header className="flex flex-col p-10">
        <p className="text-2xl">Your number one tool for your nessary needs</p>
        <p>Suited with the latest and greatest health benifited items.</p>
      </header>

      <form
        className="flex flex-col mx-auto  gap-4 w-[80%]"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="amount"
          className="flex items-start justify-between flex-col"
        >
          <span>Amount of pouches:</span>
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
          <span className="font-bold text-2xl bg-[#444] p-2">
            Type of pouch
          </span>
          <select name="pouch" id="pouch" className="bg-[#222] p-2">
            <option value="xxx">xxx</option>
            <option value="basic">Basic</option>
            <option value="bulk">Bulk</option>
          </select>
        </label>

        {isLogged.isLoggedIn ? (
          <div>
            <button className="text-xl font-bold bg-[#222] p-2 hover:bg-[#333]">
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
    </section>
  );
};

export default OrderNowForm;
