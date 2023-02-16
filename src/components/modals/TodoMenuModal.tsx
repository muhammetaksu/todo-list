import Delete from "@/assets/Delete";
import HorizontalLine from "@/assets/HorizontalLine";
import Pin from "@/assets/Pin";
import Update from "@/assets/Update";
import { useTodoContext } from "@/context";
import React from "react";
import Sheet from "react-modal-sheet";

type Props = {
  isOpen: boolean;
  setOpen: any;
  setModalOpen: any;
  selectedTodo: {
    id: number;
    completed: boolean;
    pinned: boolean;
    description: string;
  };
};

const TodoMenuModal = (props: Props) => {
  const { isOpen, setOpen, setModalOpen, selectedTodo } = props;
  const { updateTodo, deleteTodo, pinTodo } = useTodoContext();

  const deleteItem = () => {
    deleteTodo(selectedTodo.id);
    setOpen(false);
  };

  const pinItem = () => {
    pinTodo(selectedTodo.id);
    setOpen(false);
  };

  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          {/* <Sheet.Backdrop
            style={{ backgroundColor: "transparent", zIndex: "-9" }}
            onTap={() => setOpen(false)}
          /> */}
          <Sheet.Content className="flex flex-col">
            <button
              onClick={pinItem}
              className="my-6 flex justify-center items-center"
            >
              <Pin color="black" />
              <p
                style={{ letterSpacing: "-0.015em;" }}
                className="ml-2 h-5 not-italic font-normal text-base leading-5 text-black"
              >
                {selectedTodo?.pinned ? "Unpin on the top" : "Pin on the top"}
              </p>
            </button>
            <HorizontalLine />

            <button
              onClick={() => setModalOpen(true)}
              className="my-6 flex justify-center items-center"
            >
              <Update />
              <p
                style={{ letterSpacing: "-0.015em;" }}
                className="ml-2 h-5 not-italic font-normal text-base leading-5 text-black"
              >
                Update
              </p>
            </button>
            <HorizontalLine />

            <button
              onClick={deleteItem}
              className="my-6 flex justify-center items-center"
            >
              <Delete />
              <p
                style={{ letterSpacing: "-0.015em;" }}
                className="ml-2 h-5 not-italic font-normal text-base leading-5 text-black"
              >
                Delete
              </p>
            </button>
            <div className="mb-6">
              <HorizontalLine />
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default TodoMenuModal;
