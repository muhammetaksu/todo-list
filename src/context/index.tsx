import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { ModalContext } from "./ModalContext";

export const useTodoContext = () => useContext(TodoContext);
export const useModalContext = () => useContext(ModalContext);
