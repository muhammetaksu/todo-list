import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [addTodoModal, setAddTodoModal] = useState(false);
  const [todoMenuModal, setTodoMenuModal] = useState(false);
  const [updateTodoModal, setUpdateTodoModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const value = {
    addTodoModal,
    todoMenuModal,
    updateTodoModal,
    selectedTodo,
    setAddTodoModal,
    setTodoMenuModal,
    setUpdateTodoModal,
    setSelectedTodo,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
