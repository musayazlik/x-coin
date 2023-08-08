import { useRouter } from "next/router";
import { lang } from "@/lang/langT";

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
  const { locale } = useRouter();
  const t = lang(locale);
  return (
    <SidebarLayout>
      <DropdownMenu
        text={t.cryptoPage.crypto}
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
        <SubMenuItem text={t.cryptoPage.totalMc} url={"/total-market-cap"} />
        <SubMenuItem text={t.cryptoPage.subCoinMix} url={"/altcoin-mix"} />
        <SubMenuItem text={t.cryptoPage.subIndices} url={"/sub-indices"} />
        <SubMenuItem text={t.cryptoPage.onChain} url={"/on-chain"} />
        <SubMenuItem
          text={t.cryptoPage.breakAndIncom}
          url={"/break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={"Forex"}
        dropMenuStatus={true}
        Icon={BiDollarCircle}
        subMenuList={[
          "/forex/sp500",
          "/forex/nasdaq",
          "/forex/dax",
          "/forex/dxy",
          "/forex/eur-usd",
          "/forex/usd-jpy",
          "/forex/gold",
          "/forex/silver",
          "/forex/oil",
          "/forex/natqas",
          "/forex/forex-break-and-incom",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/forex/sp500"} />
        <SubMenuItem text={"Nandaq"} url={"/forex/nasdaq"} />
        <SubMenuItem text={"Dax"} url={"/forex/dax"} />
        <SubMenuItem text={"Dxy"} url={"/forex/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"/forex/eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"/forex/usd-jpy"} />
        <SubMenuItem text={t.forexPage.gold} url={"/forex/gold"} />
        <SubMenuItem text={t.forexPage.silver} url={"/forex/silver"} />
        <SubMenuItem text={t.forexPage.oil} url={"/forex/oil"} />
        <SubMenuItem text={"Natqas"} url={"/forex/natqas"} />
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/forex/forex-break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={t.allMarketsPage.allMarkets}
        dropMenuStatus={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/all-markets/stock-markets",
          "/all-markets/parities",
          "/all-markets/energy-market",
          "/all-markets/metal-market",
          "/all-markets/commodities",
        ]}
      >
        <SubMenuItem
          text={t.allMarketsPage.stockMarkets}
          url={"/all-markets/stock-markets"}
        />
        <SubMenuItem
          text={t.allMarketsPage.parities}
          url={"/all-markets/parities"}
        />
        <SubMenuItem
          text={t.allMarketsPage.energyMarket}
          url={"/all-markets/energy-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.metalMarket}
          url={"/all-markets/metal-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.commodities}
          url={"/all-markets/commodities"}
        />
      </DropdownMenu>
      <MenuItem
        url={"/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </SidebarLayout>
  );
};

export default Sidebar;
