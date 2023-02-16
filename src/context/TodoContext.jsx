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
      setTodos(myTodos);
    }
  }, []);

  const saveTodo = async (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  const completeTodo = async (id) => {
    const newTodo = await todos.find((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
    });
    const otherTodos = await todos.filter((todo) => todo.id !== id);
    setTodos([...otherTodos, newTodo]);
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
    setTodos([...otherTodos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...otherTodos, newTodo]));
  };

  const updateTodo = async (todo) => {
    console.log(todo);
    const newTodo = await todos.find((item) => {
      if (todo.id === item.id) {
        item.completed = todo.completed;
        item.pinned = todo.pinned;
        item.description = todo.description;
        return item;
      }
    });
    const otherTodos = await todos.filter((item) => todo.id !== item.id);
    console.log(newTodo);
    // setTodos([...newTodos]);
    // localStorage.setItem("todos", JSON.stringify([...newTodos]));
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
