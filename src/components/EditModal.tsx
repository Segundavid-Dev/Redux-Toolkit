import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function EditModal() {
  const modalContext = useContext(ModalContext);
  const { modal, setModal } = modalContext;

  function handleCloseModal() {
    setModal((modal) => !modal);
  }

  return (
    <div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
          <div className="bg-white text-gray-500 p-5 rounded-lg relative">
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute top-[-10px] right-0 cursor-pointer bg-[#183153] text-white px-2 py-[5px] rounded-full transition duration-300 hover:bg-red-500"
              onClick={handleCloseModal}
            />
            <p>My modal components</p>
          </div>
        </div>
      )}
    </div>
  );
}
