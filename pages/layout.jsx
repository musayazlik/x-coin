import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import IsProfile from "@/components/isProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className=" bg-zinc-950  flex gap-4 min-h-screen">
      <Sidebar />
      <div
        className={` flex flex-col justify-stretch md:w-[calc(100%_-_296px)]  `}
      >
        <Header />
        <main className={` h-full duration-300  bg-zinc-800 px-4`}>
          {(session?.user?.name === "" || session?.user?.surname === "") && (
            <IsProfile />
          )}
          {children}
        </main>

        <footer
          className={` h-auto py-4 px-4 duration-300 bg-zinc-800 text-zinc-500 text-center md:text-start  flex flex-col sm:flex-row justify-between items-center`}
        >
          <p className="font-normal text-sm">
            2023 © X-Coin - All rights reserved.
          </p>
          <p className="font-normal text-sm">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <Link
              href="https://musayazlik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-green-600 duration-200"
            >
              Musa Yazlık
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
