import React from "react";
import AvatarDropdown from "../avatarDropdown";
import LangDropdown from "../langDropdown";
import NotificationDropdown from "../notificationDropdown";
import { BiMenu } from "react-icons/bi";
import { useAppContext } from "@/context";

const Header = () => {
  const { setIsOpenSidebar } = useAppContext();

  return (
    <header
      className={`h-24 relative px-4 z-10 py-4 bg-zinc-800 duration-300 `}
    >
      <div className=" bg-zinc-900/80 border-2 border-zinc-950/50 h-full rounded-md shadow-lg shadow-zinc-950/20  flex justify-between items-center px-4 py-6  z-20 relative ">
        <div className="">
          <button
            onClick={() => setIsOpenSidebar((prev) => !prev)}
            className="md:hidden text-zinc-500"
          >
            <BiMenu fontSize={28} />
          </button>
        </div>
        <div className="right flex gap-4 items-center">
          <div className="flag">
            <LangDropdown />
          </div>
          <div className="flag">
            <NotificationDropdown />
          </div>
          <div className="avatar">
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
