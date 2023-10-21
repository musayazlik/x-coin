import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import IsProfile from "@/components/isProfile";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className=" bg-zinc-950  flex gap-4 min-h-screen">
      <Sidebar />
      <div
        className={` flex flex-col justify-stretch w-full lg:w-[calc(100%_-_296px)]  `}
      >
        <Header />
        <main className={` h-full duration-300  bg-zinc-800 px-4`}>
          {(session?.user?.name === "" || session?.user?.surname === "") && (
            <IsProfile />
          )}
          {children}
        </main>

        <footer
          className={`m-0 py-2 px-4 duration-300 bg-zinc-900 text-zinc-400 text-center md:text-start  flex flex-col sm:flex-row justify-between items-center`}
        >
          <p className="font-normal text-sm m-0">
            2023 © Trader Haber - All rights reserved.
          </p>
          {/*  <p className="font-normal text-sm">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <Link
              href="https://musayazlik.com"
              target="_blank"
              aria-label={`Musa Yazlık's website`}
              rel="noopener noreferrer"
              className="font-semibold hover:text-green-600 duration-200"
            >
              Musa Yazlık
            </Link>
          </p>*/}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
