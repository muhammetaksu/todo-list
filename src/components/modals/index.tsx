import React from "react";
import TodoMenuModal from "./TodoMenuModal";
import TodoModal from "./TodoModal";
import UpdateTodoModal from "./UpdateTodoModal";

const AllModals = () => {
  return (
    <>
      <TodoModal />
      <TodoMenuModal />
      <UpdateTodoModal />
    </>
  );
};

export default AllModals;
