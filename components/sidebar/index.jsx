import React from "react";
import Link from "next/link";
import {
  BiChevronLeft,
  BiStar,
  BiExit,
  BiBasket,
  BiGlobe,
  BiBarChartAlt,
  BiDrink,
  BiBookmarks,
  BiBuildings,
} from "react-icons/bi";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";

import { signOut } from "next-auth/react";

/** Style */
import S from "./style.module.css";

const Sidebar = ({ setIsOpenSidebar, isOpenSidebar }) => {
  const { pathname } = useRouter();
  return (
    <aside
      className={`${S.asideWrapper} ${isOpenSidebar ? "" : ""} duration-300 `}
    >
      <div className="logo flex flex-col  items-center justify-center py-4">
        <span
          className={` duration-300 ${
            isOpenSidebar ? "text-5xl" : "text-4xl"
          } text-yellow-400  font-bold -mb-2 `}
        >
          X
        </span>
        <span className="text-lg font-bold tracking-tighter text-slate-600">
          Coin
        </span>
      </div>
      <div
        className={S.menuOnOffIcon}
        onClick={() => {
          setIsOpenSidebar((prev) => !prev);
        }}
      >
        <BiChevronLeft
          fontSize={28}
          className={`${isOpenSidebar ? "rotate-0" : "rotate-180"}`}
        />
      </div>
      <nav className="menu flex flex-col justify-between ">
        <ul className="flex flex-col gap-2  h-full flex-shrink">
          <Link href="/">
            <li
              className={`${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"} 
						${
              pathname === "/"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
            `
            }
						
						 `}
            >
              <HiOutlineHome fontSize={24} className="inline-block " />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Spot Market
              </span>
            </li>
          </Link>
          <Link href="/future-market">
            <li
              className={`${S.menuItem}  ${isOpenSidebar ? "" : "sm:!gap-0"} 
						${
              pathname === "/future-market"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                   `
            }
               
                `}
            >
              <BiBasket className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Future Market
              </span>
            </li>
          </Link>

          <Link href="/global-metrics">
            <li
              className={`${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"}
						${
              pathname === "/global-metrics"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                   
               
               `
            }
               
                `}
            >
              <BiGlobe className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Global Metrics
              </span>
            </li>
          </Link>

          <Link href="/LongShortRatio">
            <li
              className={`${S.menuItem}  ${isOpenSidebar ? "" : "sm:!gap-0"}
						${
              pathname === "/follow"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                  
               
               `
            }
               
                `}
            >
              <BiBarChartAlt className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Followed Collections
              </span>
            </li>
          </Link>

          <Link href="/long-short-ratio">
            <li
              className={`${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"}
						${
              pathname === "/long-short-ratio"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                   
               
               `
            }
               
                `}
            >
              <BiDrink className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Long Short Ratio
              </span>
            </li>
          </Link>

          <Link href="/funding-rates">
            <li
              className={` ${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"}
               ${
                 pathname === "/"
                   ? S.menuActive
                   : `${S.menuDontActive} ${S.menuNotActive}
                   
               
               `
               }
               
                `}
            >
              <BiBookmarks className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Funding Rates
              </span>
            </li>
          </Link>

          <Link href="/liquidations-stream">
            <li
              className={`${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"}
						${
              pathname === "/liquidations-stream"
                ? S.menuActive
                : `${S.menuDontActive} ${S.menuNotActive}
                   
               
               `
            }
               
                `}
            >
              <BiBuildings className=" inline-block " fontSize={24} />
              <span
                className={`duration-300 ${S.menuItemText} ${
                  isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
                }`}
              >
                Liquidations Stream
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
