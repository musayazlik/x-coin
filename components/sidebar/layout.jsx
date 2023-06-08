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
        <ul className="flex flex-col gap-2  h-full flex-shrink">{children}</ul>
      </nav>
    </aside>
  );
};

export default SidebarLayout;
