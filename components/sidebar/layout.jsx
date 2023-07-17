/** Icons */
import { BiChevronLeft } from "react-icons/bi";

/** Context */
import { useAppContext } from "@/context";

/** Style */
import S from "./style.module.css";

const SidebarLayout = ({ children }) => {
  const { setIsOpenSidebar, isOpenSidebar } = useAppContext();
  return (
    <aside
      className={`${S.asideWrapper} h-min-screen min-w-[280px]  duration-300 overflow-auto px-2 py-4 `}
    >
      <div className="logo flex flex-col items-center mb-4 ">
        <div
          className={` duration-300 ${
            isOpenSidebar ? "text-5xl" : "text-4xl"
          } text-yellow-400  font-bold -mb-2 `}
        >
          X
        </div>
        <div className="text-lg font-bold mt-1 tracking-tighter text-slate-600">
          Coin
        </div>
      </div>
      <nav className="menu  ">
        <ul className="">{children}</ul>
      </nav>
    </aside>
  );
};

export default SidebarLayout;
