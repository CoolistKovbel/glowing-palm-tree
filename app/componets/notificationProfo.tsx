"use client";

import { useState } from "react";

const NotificationProfo = () => {
  const [handleclose, setHandleClose] = useState(true);

  return (
    <>
      {handleclose && (
        <div className="relative w-full p-10 bg-[firebrick] text-center font-bold uppercase text-[1rem] drop-shadow-lg rounded">
          <h3>
            Your billing information hasnt been filled out yet please do so to
            recieve order
          </h3>
          <button
            className="absolute top-0 right-0 p-1 bg-[#444] hover:bg-[#111]"
            onClick={() => setHandleClose((prev) => !prev)}
          >
            ❌
          </button>
        </div>
      )}
    </>
  );
};

export default NotificationProfo;
