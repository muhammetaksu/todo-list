import CheckedBox from "@/assets/CheckedBox";
import Dots from "@/assets/Dots";
import EmptyBox from "@/assets/EmptyBox";
import { useModalContext, useTodoContext } from "@/context";
import { Todo } from "@/types";
import React from "react";

type Props = {
  todo: Todo;
};

const Item = (props: Props) => {
  const { todo } = props;

  const { setTodoMenuModal, setSelectedTodo } = useModalContext();
  const { completeTodo } = useTodoContext();

  return (
    <>
      <div className="flex my-6 items-center">
        <a onClick={() => completeTodo(todo.id)}>
          {todo?.completed ? <CheckedBox /> : <EmptyBox />}
        </a>
        <p className="mx-4 h-5 not-italic font-normal text-base leading-5 text-black">
          {todo?.description}
        </p>
        <a
          onClick={() => {
            setTodoMenuModal(true);
            setSelectedTodo(todo);
          }}
          className="absolute right-4"
        >
          <Dots />
        </a>
      </div>
    </>
  );
};

export default Item;
