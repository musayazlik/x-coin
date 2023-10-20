import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrapper } from "@/context";
import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Wrapper>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
        <ToastContainer />
      </Wrapper>
    </SessionProvider>
  );
}
