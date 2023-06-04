import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(true);
  return (
    <div className="w-screen h-screen bg-zinc-950 flex">
      <Sidebar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      />
      <div className="flex flex-col justify-stretch w-full px-4 pb-4">
        <Header
          setIsOpenSidebar={setIsOpenSidebar}
          isOpenSidebar={isOpenSidebar}
        />
        <main
          className={` h-full duration-300 mb-4 ${
            isOpenSidebar ? "ml-[232px]" : "ml-[72px]"
          }  py-4  bg-zinc-800`}
        >
          {children}
        </main>

        <footer
          className={` h-auto py-4 px-4 duration-300 ${
            isOpenSidebar ? "ml-[232px]" : "ml-[72px]"
          }  py-4  bg-zinc-800 text-zinc-500`}
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
