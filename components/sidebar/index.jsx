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

import { MdCurrencyBitcoin } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import { BsQuestionLg } from "react-icons/bs";

/** Style */
import S from "./style.module.css";
import SidebarLayout from "./layout";
import DropdownMenu from "./dropdownMenu";
import SubMenuItem from "./subMenuItem/index";
import MenuItem from "./menuItem/index";

const Sidebar = () => {
  const { setIsOpenSidebar, isOpenSidebar } = useAppContext();
  const { pathname } = useRouter();
  return (
    <SidebarLayout>
      <DropdownMenu
        text={"Kripto"}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        subMenuList={[
          "/",
          "/total-market-cap",
          "/altcoin-mix",
          "/sub-indices",
          "/on-chain",
          "/break-and-incom",
        ]}
      >
        <SubMenuItem text={"Total MC"} url={"/total-market-cap"} />
        <SubMenuItem text={"Altcoin Mix"} url={"/altcoin-mix"} />
        <SubMenuItem text={"Alt Endeksler"} url={"/sub-indices"} />
        <SubMenuItem text={"On Chain"} url={"/on-chain"} />
        <SubMenuItem
          text={"Kırılım ve Uyumsuzluklar"}
          url={"break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu text={"Forex"} dropMenuStatus={true} Icon={BiDollarCircle}>
        <SubMenuItem text={"Sp500"} url={"/sp500"} />
        <SubMenuItem text={"Nandaq"} url={"/nandaq"} />
        <SubMenuItem text={"Dax"} url={"/dax"} />
        <SubMenuItem text={"Dxy"} url={"/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"usd-jpy"} />
        <SubMenuItem text={"Altın"} url={"gold"} />
        <SubMenuItem text={"Gümüş"} url={"silver"} />
        <SubMenuItem text={"Petrol"} url={"oil"} />
        <SubMenuItem text={"Natqas"} url={"natqas"} />
        <SubMenuItem
          text={"Kırılım ve Uyumsuzluklar"}
          url={"forex-break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={"Tüm Piyasalar"}
        dropMenuStatus={true}
        Icon={RiGlobalLine}
      >
        <SubMenuItem text={"Borsalar"} url={"/borsalar"} />
        <SubMenuItem text={"Pariteler"} url={"/pariteler"} />
        <SubMenuItem text={"Enerji Piyasası"} url={"enerji-piyasasi"} />
        <SubMenuItem text={"Metal Piyasası"} url={"/metal-piyasasi"} />
        <SubMenuItem text={"Emtialar"} url={"/emtialar"} />
      </DropdownMenu>
      <MenuItem
        url={"/question-answer"}
        Icon={BsQuestionLg}
        text={"Soru Cevap"}
      />
    </SidebarLayout>
  );
};

export default Sidebar;
