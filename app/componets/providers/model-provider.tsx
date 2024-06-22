"use client";

import { useEffect, useState } from "react";
import SignInModal from "../modals/signInModal";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
   
      <SignInModal />
    </>
  );
};
