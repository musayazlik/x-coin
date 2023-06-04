import React from "react";
import AvatarDropdown from "../avatarDropdown";
import LangDropdown from "../langDropdown";
import NotificationDropdown from "../notificationDropdown";
import { BiMenu } from "react-icons/bi";

const Header = ({ setIsOpenSidebar, isOpenSidebar }) => {
  return (
    <header
      className={`h-24 py-4 duration-300  ${
        isOpenSidebar ? "sm:ml-[232px]" : "sm:ml-[72px]"
      }`}
    >
      <div className=" bg-zinc-800 h-full rounded-sm flex justify-between items-center px-4">
        <div className="">
          <button
            onClick={() => setIsOpenSidebar((prev) => !prev)}
            className="sm:hidden text-zinc-500"
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
