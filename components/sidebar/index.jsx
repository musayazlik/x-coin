import Link from "next/link";
import {
  BiBasket,
  BiGlobe,
  BiBarChartAlt,
  BiDrink,
  BiBookmarks,
  BiBuildings,
} from "react-icons/bi";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";
import { useAppContext } from "@/context";

/** Style */
import S from "./style.module.css";
import SidebarLayout from "./layout";

const Sidebar = () => {
  const { setIsOpenSidebar, isOpenSidebar } = useAppContext();
  const { pathname } = useRouter();
  return (
    <SidebarLayout
      setIsOpenSidebar={setIsOpenSidebar}
      isOpenSidebar={isOpenSidebar}
    >
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
                 pathname === "/funding-rates"
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
    </SidebarLayout>
  );
};

export default Sidebar;
