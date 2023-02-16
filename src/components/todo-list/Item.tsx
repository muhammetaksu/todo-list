import CheckedBox from "@/assets/CheckedBox";
import EmptyBox from "@/assets/EmptyBox";
import { useTodoContext } from "@/context";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

const TodoMenuModal = dynamic(() => import("../modals/TodoMenuModal"), {
  ssr: false,
});

type Props = {
  todo: {
    id: number;
    completed: boolean;
    pinned: boolean;
    description: string;
  };
  setModalOpen: any;
};

const Item = (props: Props) => {
  const { todo, setModalOpen } = props;
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const { completeTodo } = useTodoContext();

  return (
    <>
      <div className="flex my-6 items-center">
        <a onClick={() => completeTodo(todo.id)}>
          {todo.completed ? <CheckedBox /> : <EmptyBox />}
        </a>
        <p className="mx-4 h-5 not-italic font-normal text-base leading-5 text-black">
          {todo.description}
        </p>
        <Image
          onClick={() => setMenuModalOpen(true)}
          className="absolute right-4"
          width={24}
          height={24}
          src="images/dots.svg"
          alt="dots"
        />
      </div>
      <TodoMenuModal
        selectedTodo={todo}
        isOpen={menuModalOpen}
        setOpen={setMenuModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default Item;
