import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/TodoList.module.css";
import Item from "./Item";
import dynamic from "next/dynamic";
import HorizontalLine from "@/assets/HorizontalLine";
import Pin from "@/assets/Pin";
import { useTodoContext } from "@/context";

const TodoModal = dynamic(() => import("../modals/TodoModal"), {
  ssr: false,
});
const TodoMenuModal = dynamic(() => import("../modals/TodoMenuModal"), {
  ssr: false,
});

type Todo = {
  id: any;
  completed: boolean;
  description: string;
  pinned: boolean;
};

const TodoList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<object>({});
  const { todos, saveTodo, updateTodo, deleteTodo, completeTodo } =
    useTodoContext();

  return (
    <>
      <div
        style={{ top: "100px", bottom: "62px" }}
        className={`${styles.container} absolute bg-white rounded-lg mx-4 right-0 left-0 overflow-scroll`}
      >
        <div>
          <div className={`h-10 mt-4 mb-6`}>
            <p
              className={`h-5 not-italic font-semibold text-lg leading-5 text-center text-blue-800`}
            >
              To Do List
            </p>
            <span className={`flex w-40 h-1 bg-red-500 mt-4 mx-auto`}></span>
            <HorizontalLine />
          </div>

          <div className="mb-6 mx-4 flex flex-col">
            <div className="flex ">
              <Pin />
              <p
                className={`w-24 h-5 not-italic font-normal text-sm leading-5 text-red-500 mx-3`}
              >
                Pin on the top
              </p>
            </div>

            {/* TODO LIST */}
            <div>
              {/* Pinned Todos */}
              <div className="mb-8">
                {todos?.map((todo: Todo, index: any) =>
                  todo.pinned ? (
                    <Item key={index} todo={todo} setModalOpen={setModalOpen} />
                  ) : null
                )}
              </div>

              <HorizontalLine />

              {/* Other Todos */}
              <div className={styles.todoBox}>
                {todos?.map((todo: Todo, index: any) =>
                  !todo.pinned ? (
                    <Item key={index} todo={todo} setModalOpen={setModalOpen} />
                  ) : null
                )}
              </div>
            </div>

            {/* ADD A TODO BUTTON */}
            <div
              style={{ bottom: "62px" }}
              className="fixed bg-white bottom-0 h-20 left-4 right-4 rounded"
            >
              <button
                onClick={() => setModalOpen(true)}
                style={{ background: "#21A7F9" }}
                className={`${styles.addTodoButton} absolute flex bottom-0 left-0 right-0 h-12 rounded mx-4 my-4`}
              >
                <Image
                  className="mx-4 my-auto"
                  width={24}
                  height={24}
                  src="images/add-todo-quote.svg"
                  alt="quote"
                />
                <p
                  style={{ letterSpacing: "-0.015em" }}
                  className={`${styles.addTodoText} my-auto h-5 not-italic font-normal text-lg leading-5 text-white`}
                >
                  Add a task
                </p>
                <Image
                  className={`${styles.addTodoArrow} ml-auto my-auto mr-4`}
                  width={24}
                  height={24}
                  src="images/add-todo-arrow.svg"
                  alt="quote"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <TodoModal
        saveTodo={saveTodo}
        // selectedTodo={selectedTodo}
        isOpen={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  );
};

export default TodoList;
