import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar/accountSidebar";
import { useAppContext } from "@/context";

const Layout = ({ children }) => {
  const { isOpenSidebar } = useAppContext();
  return (
    <div className="w-screen h-screen bg-zinc-950 flex">
      <Sidebar />
      <div className="flex flex-col w-full px-4">
        <Header />
        <main
          className={`h-24 duration-300 ${
            isOpenSidebar ? "sm:ml-[232px]" : " sm:ml-[72px]"
          }  py-4  bg-zinc-800`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
