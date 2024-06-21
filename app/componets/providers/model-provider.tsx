"use client";

import { useEffect, useState } from "react";
import UploadImage from "../modals/uploadImage";
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
      <UploadImage />
      <SignInModal />
    </>
  );
};
