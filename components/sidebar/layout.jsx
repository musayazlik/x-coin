/** Icons */
/** Context */
import {useAppContext} from "@/context";

/** Style */
import S from "./style.module.css";
import Link from "next/link";

const SidebarLayout = ({children}) => {
  const {setIsOpenSidebar, isOpenSidebar} = useAppContext();
  return (
    <>
      <aside
        className={`${
          S.asideWrapper
        } h-min-screen h-screen md:h-auto min-w-[280px] max-w-[280px] -left-[280px] md:left-0 relative duration-300 z-30 overflow-auto px-2 py-4 ${
          isOpenSidebar ? "" : "!left-0"
        } `}
      >
        <Link href={"/"} className="logo flex flex-col items-center mb-4 py-4 ">
          <div
            className={` duration-300 text-4xl text-yellow-400  font-bold -mb-2 `}
          >
            Trader
          </div>
          <div
            className="text-lg font-bold mt-1 tracking-tighter text-slate-600">
            Edit
          </div>
        </Link>
        <nav className="menu ">
          <ul className=" flex flex-col gap-3">{children}</ul>
        </nav>
      </aside>

      <div
        className={` fixed top-0 left-0 w-full h-full bg-black/50 z-20 duration-300 ${
          isOpenSidebar ? "opacity-0 pointer-events-none" : " opacity-100 "
        } `}
        onClick={() => setIsOpenSidebar(true)}
      ></div>
    </>
  );
};

export default SidebarLayout;
