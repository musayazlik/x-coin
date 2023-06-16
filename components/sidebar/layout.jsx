/** Icons */
import { BiChevronLeft } from "react-icons/bi";

/** Context */
import { useAppContext } from "@/context";

/** Style */
import S from "./style.module.css";

const SidebarLayout = ({ children }) => {
  const { setIsOpenSidebar, isOpenSidebar } = useAppContext();
  return (
    <aside className={`${S.asideWrapper} duration-300   `}>
      <div className="logo inline-flex flex-col  items-center justify-center py-4">
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
      <nav className="menu ">
        <ul className="inline-flex flex-col gap-2">{children}</ul>
      </nav>
    </aside>
  );
};

export default SidebarLayout;
