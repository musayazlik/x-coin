import "@/styles/globals.css";
import {SessionProvider} from "next-auth/react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Wrapper} from "@/context";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import axios from "axios";
import 'swiper/css';


export default function App({
                              Component,
                              pageProps: {session, ...pageProps},
                            }) {

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <SessionProvider session={session}>
      <Wrapper>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Component {...pageProps} />

          </NextThemesProvider>
        </NextUIProvider>
        <ToastContainer/>
      </Wrapper>
    </SessionProvider>
  );
}
