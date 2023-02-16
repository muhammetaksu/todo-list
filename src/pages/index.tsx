import Head from "next/head";
import TodoList from "@/components/todo-list/TodoList";
import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const UpdateTodoModal = dynamic(
  () => import("../components/modals/UpdateTodoModal"),
  {
    ssr: false,
  }
);
const TodoModal = dynamic(() => import("../components/modals/TodoModal"), {
  ssr: false,
});
const TodoMenuModal = dynamic(
  () => import("../components/modals/TodoMenuModal"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="Westerops to do list homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/westerops-small-logo.png" />
      </Head>
      <main
        style={{
          background: "linear-gradient(116.82deg, #85A1BA 0%, #194591 65.92%)",
        }}
        className="h-screen max-w-full"
      >
        {/* <StatusBar /> */}
        <Logo />
        <TodoList />
      </main>
      {/* MODALS */}
      <TodoModal />
      <TodoMenuModal />
      <UpdateTodoModal />
    </>
  );
}
