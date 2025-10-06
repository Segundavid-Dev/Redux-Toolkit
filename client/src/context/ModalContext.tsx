import { createContext } from "react";

type ModalContext = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContext>({
  modal: false,
  setModal: () => {},
});
