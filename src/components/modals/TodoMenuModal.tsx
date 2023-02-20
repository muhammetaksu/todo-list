import Delete from "@/assets/Delete";
import HorizontalLine from "@/assets/HorizontalLine";
import Pin from "@/assets/Pin";
import Update from "@/assets/Update";
import { useModalContext, useTodoContext } from "@/context";
import React from "react";
import Sheet from "react-modal-sheet";

const TodoMenuModal = () => {
  const { deleteTodo, pinTodo } = useTodoContext();
  const { todoMenuModal, setTodoMenuModal, setUpdateTodoModal, selectedTodo } =
    useModalContext();

  const deleteItem = () => {
    deleteTodo(selectedTodo.id);
    setTodoMenuModal(false);
  };

  const pinItem = () => {
    pinTodo(selectedTodo.id);
    setTodoMenuModal(false);
  };

  return (
    <>
      <Sheet
        isOpen={todoMenuModal}
        onClose={() => setTodoMenuModal(false)}
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
              <p className="ml-2 h-5 not-italic font-normal text-base leading-5 text-custom-black">
                {selectedTodo?.pinned ? "Unpin on the top" : "Pin on the top"}
              </p>
            </button>
            <HorizontalLine />

            <button
              onClick={() => {
                setTodoMenuModal(false);
                setUpdateTodoModal(true);
              }}
              className="my-6 flex justify-center items-center"
            >
              <Update />
              <p className="ml-2 h-5 not-italic font-normal text-base leading-5 text-custom-black">
                Update
              </p>
            </button>
            <HorizontalLine />

            <button
              onClick={deleteItem}
              className="my-6 flex justify-center items-center"
            >
              <Delete />
              <p className="ml-2 h-5 not-italic font-normal text-base leading-5 text-custom-black">
                Delete
              </p>
            </button>
            <div className="mb-6">
              <HorizontalLine />
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={() => setTodoMenuModal(false)} />
      </Sheet>
    </>
  );
};

export default TodoMenuModal;
