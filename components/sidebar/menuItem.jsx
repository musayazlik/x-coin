import Link from "next/link";
import { useRouter } from "next/router";

/** Context */
import { useAppContext } from "@/context";

/** Style */
import S from "./style.module.css";

const MenuItem = ({ pathname, Icon, text }) => {
  const router = useRouter();
  const { isOpenSidebar } = useAppContext();
  return (
    <Link href="/">
      <li
        className={`${S.menuItem} ${isOpenSidebar ? "" : "sm:!gap-0"} 
			${
        router.pathname === pathname
          ? S.menuActive
          : `${S.menuDontActive} ${S.menuNotActive}
			`
      }
			
			 `}
      >
        <Icon fontSize={24} className="inline-block " />
        <span
          className={`duration-300 ${S.menuItemText} ${
            isOpenSidebar ? "sm:!text-[16px]" : " sm:!text-[0px]"
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
};

export default MenuItem;
