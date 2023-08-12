import React from "react";
import Header from "@/components/header";
import DashboardSidebar from "@/components/sidebar/dashboardSidebar";

const Layout = ({ children }) => {
  return (
    <div className=" bg-zinc-950  flex gap-4 min-h-screen">
      <DashboardSidebar />
      <div
        className={` flex flex-col justify-stretch w-full lg:w-[calc(100%_-_296px)]  `}
      >
        <Header />
        <main className={` h-full duration-300  bg-zinc-800 px-4`}>
          {children}
        </main>

        <footer
          className={` h-auto py-4 px-4 duration-300 bg-zinc-800 text-zinc-500 text-center md:text-start`}
        >
          <p className="font-normal text-sm">
            2023 © Thader Haber - All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
