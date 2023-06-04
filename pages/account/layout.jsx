import React from "react";
import Header from "@/components/header";
import ProfileSidebar from "@/components/profile/sidebar";

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(true);
  return (
    <div className="w-screen h-screen bg-zinc-950 flex">
      <ProfileSidebar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      />
      <div className="flex flex-col w-full px-4">
        <Header
          setIsOpenSidebar={setIsOpenSidebar}
          isOpenSidebar={isOpenSidebar}
        />
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
