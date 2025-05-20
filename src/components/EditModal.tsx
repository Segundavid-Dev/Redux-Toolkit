import { useContext, useEffect, useState } from "react";

import { ModalContext } from "@/context/ModalContext";

import { editTask } from "@/Todo/todoSlice";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function EditModal() {
  const dispatch = useDispatch();
  const selectedTask = useSelector(
    (state: RootState) => state.todo.selectedTask
  );
  const [updatedTask, setUpdatedTask] = useState(selectedTask?.task || "");

  const modalContext = useContext(ModalContext);
  const { modal, setModal } = modalContext;

  function handleCloseModal() {
    setModal((modal) => !modal);
  }

  useEffect(() => {
    setUpdatedTask(selectedTask?.task || "");
  }, [selectedTask]);

  return (
    <div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
          <div className="bg-white text-gray-500 p-5 rounded-lg relative">
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute top-[-10px] right-0 cursor-pointer bg-red-500 text-white px-2 py-[5px] rounded-full"
              onClick={handleCloseModal}
            />
            <div className="flex flex-col gap-3">
              <p className="text-[#333]">
                <FontAwesomeIcon icon={faPencil} />
                <span> Update task!</span>
              </p>
              <input
                type="text"
                className="border-2 border-gray-500 p-2 rounded-lg"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
              />
              <button
                className="border p-2 bg-[#238638] text-white rounded-md cursor-pointer transition duration-300 hover:bg-[#3FB558]"
                onClick={() => {
                  dispatch(
                    editTask({ id: selectedTask?.id, task: updatedTask })
                  );
                  handleCloseModal();
                }}
              >
                Update task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
