import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import React from "react";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import {RiGlobalLine} from "react-icons/ri";
import S from "@components/sidebar/style.module.css";
import {BsDot} from "react-icons/bs";


const AllMarketsMenu = () => {
  const {locale, pathname} = useRouter();
  const t = lang(locale);
  return (
    <>
      <DropdownMenu
        text={t.allMarketsPage.allMarkets}
        dropMenuStatus={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/feed/all-markets/stock-markets",
          "/feed/all-markets/parities",
          "/feed/all-markets/energy-market",
          "/feed/all-markets/metal-market",
          "/feed/all-markets/commodities",
        ]}
      >
        <li
          onClick={() => {
            setIsOpenSidebar(true);
          }}
          className={`${pathname === url ? "!text-yellow-500" : ""} ${
            S.menuSubItemText
          } py-1 pl-2 pr-4 `}
        >
          <BsDot className="inline-block mr-1" fontSize={20}/>
          <span>sdfdff</span>
        </li>

      </DropdownMenu>

    </>
  );
}

export default AllMarketsMenu;