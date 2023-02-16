import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TodoList from "@/components/todo-list/TodoList";
import StatusBar from "@/components/StatusBar";
import Logo from "@/components/Logo";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Westerops todo list homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.container} h-screen max-w-full`}>
        {/* <StatusBar /> */}
        <Logo />
        <TodoList />
      </main>
    </>
  );
}
