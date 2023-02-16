import { ModalContextProvider } from "@/context/ModalContext";
import { TodoContextProvider } from "@/context/TodoContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </ModalContextProvider>
  );
}
