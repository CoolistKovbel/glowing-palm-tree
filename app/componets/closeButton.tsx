"use client";

import { handleCloseItem } from "../lib/action";


interface CloseButtonProps { 
    product: any;
}

const CloseButton = ({product}:CloseButtonProps) => {
  const handleClick = async () => {
    try {
      console.log("handle click");

      await handleCloseItem(product)


    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <button onClick={handleClick} className="p-1 bg-[#666] drop-shadow-lg hover:bg-[#888]  rounded absolute -top-0 right-0">
        ❌
      </button>
    </>
  );
};

export default CloseButton;
