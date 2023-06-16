import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useAppContext } from "@/context";

const Layout = ({ children }) => {
  const { isOpenSidebar } = useAppContext();
  return (
    <div className=" min-h-screen overflow-auto bg-zinc-950  flex gap-4">
      <Sidebar />
      <div className={` flex flex-col justify-stretch w-full overflow-auto `}>
        <Header />
        <main className={` h-full duration-300  bg-zinc-800`}>{children}</main>

        <footer
          className={` h-auto py-4 px-4 duration-300 bg-zinc-800 text-zinc-500`}
        >
          <p className="font-normal text-sm">
            2023 © X-Coin - All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
