import { useState } from "react";
import { ModalContext } from "./ModalContext";

type children = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: children) {
  const [modal, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
