import React from "react";
import Item from "./Item";
import HorizontalLine from "@/assets/HorizontalLine";
import Pin from "@/assets/Pin";
import { useModalContext, useTodoContext } from "@/context";
import Quote from "@/assets/Quote";
import Arrow from "@/assets/Arrow";
import { Todo } from "@/types";

const TodoList = () => {
  const { todos } = useTodoContext();
  const { setAddTodoModal } = useModalContext();
  return (
    <>
      <div
        style={{ top: "100px", bottom: "62px" }}
        className="absolute bg-white rounded-lg mx-4 right-0 left-0"
      >
        <div
          style={{ top: "0", bottom: "80px" }}
          className="absolute w-full overflow-auto"
        >
          <div className="h-10 mt-4 mb-6">
            <p className="h-5 not-italic font-semibold text-lg leading-5 text-center text-custom-blue">
              To Do List
            </p>
            <span
              style={{
                background: "rgba(255, 121, 100, 1)",
              }}
              className="flex w-40 h-1 mt-4 mx-auto"
            ></span>
            <HorizontalLine />
          </div>

          <div className="mb-4 mx-4 flex flex-col">
            <div className="flex ">
              <Pin />
              <p
                style={{
                  color: "rgba(255, 121, 100, 1)",
                }}
                className="w-24 h-5 not-italic font-normal text-sm leading-5 mx-3"
              >
                Pin on the top
              </p>
            </div>

            {/* TODO LIST */}
            <div className="z-20">
              {/* Pinned Todos */}
              <div className="mb-8">
                {todos?.map((todo: Todo, index: any) =>
                  todo?.pinned ? <Item key={index} todo={todo} /> : null
                )}
              </div>

              <HorizontalLine />

              {/* Other Todos */}
              <div>
                {todos?.map((todo: Todo, index: any) =>
                  !todo?.pinned ? <Item key={index} todo={todo} /> : null
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ADD A TODO BUTTON */}
        <div
          style={{ bottom: "62px" }}
          className="fixed bg-white bottom-0 h-20 left-4 right-4 rounded-lg"
        >
          <button
            onClick={() => setAddTodoModal(true)}
            className="absolute flex bottom-0 left-0 right-0 h-12 rounded mx-4 my-4 bg-custom-active-blue"
          >
            <span className="mx-4 my-auto">
              <Quote />
            </span>
            <p className="my-auto h-5 not-italic font-normal text-lg leading-5 text-white">
              Add a task
            </p>

            <span className="ml-auto my-auto mr-4">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
