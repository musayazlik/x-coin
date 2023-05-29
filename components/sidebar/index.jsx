import React from "react";
import Link from "next/link";
import { BiChevronLeft, BiStar } from "react-icons/bi";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";

import { signOut } from "next-auth/react";

/** Style */
import S from "./style.module.css";

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <aside className={S.asideWrapper}>
      <div className="logo flex flex-col  items-center justify-center py-4">
        <span className="text-5xl text-yellow-400  font-bold -mb-2">X</span>
        <span className="text-lg font-bold tracking-tighter text-slate-600">
          Coin
        </span>
      </div>
      <div className={S.menuOnOffIcon}>
        <BiChevronLeft fontSize={28} />
      </div>
      <nav className="menu flex flex-col justify-between  ">
        <ul className="flex flex-col gap-2  h-full flex-shrink">
          <Link href="/">
            <li
              className={`${S.menuItem} 
						${pathname === "/" ? S.menuActive : S.menuDontActive}
						
						 `}
            >
              <HiOutlineHome fontSize={28} className="inline-block w-8 " />
              <span className={S.menuItemText}>Top Collections</span>
            </li>
          </Link>
          <Link href="/follow">
            <li
              className={`${S.menuItem} 
						${pathname === "/follow" ? S.menuActive : S.menuNotActive}
						
						 `}
            >
              <BiStar className=" inline-block " fontSize={24} />
              <span className={S.menuItemText}>Followed Collections</span>
            </li>
          </Link>
        </ul>
        <div className="loyout px-3">
          <button
            onClick={() => {
              signOut();
            }}
            className="text-red-200 py-2 rounded-md border-2 border-red-900 hover:shadow-lg hover:shadow-red-700/50 duration-300 w-full text-sm font-medium bg-red-600"
          >
            Loyout
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
