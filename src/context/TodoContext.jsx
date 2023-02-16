import { sortByString } from "@/utils";
import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    const myTodos = JSON.parse(localTodos);
    if (!myTodos) {
      setTodos([]);
    } else {
      setTodos(sortByString(myTodos));
    }
  }, []);

  const saveTodo = async (todo) => {
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    setTodos(sortByString([...todos, todo]));
  };

  const completeTodo = async (id) => {
    const newTodo = await todos.find((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
    });
    const otherTodos = await todos.filter((todo) => todo.id !== id);
    setTodos(sortByString([...otherTodos, newTodo]));
    localStorage.setItem("todos", JSON.stringify([...otherTodos, newTodo]));
  };

  const pinTodo = async (id) => {
    const newTodo = await todos.find((todo) => {
      if (todo.id === id) {
        todo.pinned = !todo.pinned;
        return todo;
      }
    });
    const otherTodos = await todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify([...otherTodos, newTodo]));
  };

  const updateTodo = async (todo) => {
    const updatedTodo = await todos.find((item) => {
      if (todo.id === item.id) {
        item.pinned = todo.pinned;
        item.description = todo.description;
        return item;
      }
    });
    const otherTodos = await todos.filter((item) => todo.id !== item.id);
    setTodos(sortByString([...otherTodos, updatedTodo]));
    localStorage.setItem("todos", JSON.stringify([...otherTodos, updatedTodo]));
  };

  const deleteTodo = async (deleteId) => {
    const newTodos = await todos.filter((item) => item.id != deleteId);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify([...newTodos]));
  };

  const value = {
    todos: todos,
    saveTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
    pinTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
