import React from "react";
import Link from "next/link";
import { BiChevronLeft, BiStar, BiHome } from "react-icons/bi";
import { useRouter } from "next/router";

/** Style */
import S from "./style.module.css";

const ProfileSidebar = ({ setIsOpenSidebar, isOpenSidebar }) => {
  const { pathname } = useRouter();
  return (
    <div className="">
      <aside
        className={`${S.asideWrapper} ${
          isOpenSidebar
            ? "left-[0px] sm:left-auto"
            : "left-[-250px] sm:left-auto"
        } duration-300 `}
      >
        <div className="logo flex flex-col  items-center justify-center py-4">
          <span className={` text-yellow-400  font-bold -mb-2 text-5xl `}>
            X
          </span>
          <span className="text-lg font-bold tracking-tighter text-slate-600">
            Coin
          </span>
        </div>
        <div
          className={` hidden ` + S.menuOnOffIcon}
          onClick={() => {
            setIsOpenSidebar((prev) => !prev);
          }}
        >
          <BiChevronLeft
            fontSize={28}
            className={` ${isOpenSidebar ? "rotate-0" : "rotate-180"}`}
          />
        </div>
        <nav className={`menu flex flex-col justify-between relative `}>
          <ul className="flex flex-col gap-2  h-full flex-shrink py-4">
            <Link href="/account/top-collections" className="inline-flex">
              <li
                className={`${S.menuItem} 
						${
              pathname === "/"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                ${isOpenSidebar ? "" : "sm:!gap-0"}
            `
            }
						
						 `}
              >
                <BiHome fontSize={24} className="inline-block " />
                <span
                  className={`duration-300 ${S.menuItemText} ${
                    isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                  }`}
                >
                  Top Collections
                </span>
              </li>
            </Link>
            <Link href="/account/followed-collections" className="inline-flex">
              <li
                className={` ${S.menuItem} 
               ${
                 pathname === "/"
                   ? S.menuActive
                   : `${S.menuDontActive} ${S.menuNotActive}
                   ${isOpenSidebar ? "" : "sm:!gap-0"}
               
               `
               }
               
                `}
              >
                <BiStar className=" inline-block" fontSize={24} />
                <span
                  className={`duration-300 ${S.menuItemText} ${
                    isOpenSidebar ? "!text-[16px]" : "sm:!text-[0px]"
                  }`}
                >
                  Followed Collections
                </span>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>

      <div
        className={`w-screen h-screen sm:hidden bg-zinc-800/80 absolute top-0 left-0 z-10 ${
          isOpenSidebar ? "" : "hidden"
        }`}
        onClick={() => {
          setIsOpenSidebar(false);
        }}
      ></div>
    </div>
  );
};

export default ProfileSidebar;
