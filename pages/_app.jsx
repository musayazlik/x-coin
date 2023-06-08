import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrapper } from "@/context";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Wrapper>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <ToastContainer />
      </SessionProvider>
    </Wrapper>
  );
}
