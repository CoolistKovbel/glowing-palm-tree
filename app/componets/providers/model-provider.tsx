"use client";

import { useEffect, useState } from "react";
import UploadImage from "../modals/uploadImage";

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
    </>
  );
};
