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
          "/feed/blockchain/",
          "/feed/blockchain/total-market-cap",
          "/feed/blockchain/altcoin-mix",
          "/feed/blockchain/sub-indices",
          "/feed/blockchain/on-chain",
          "/feed/blockchain/break-and-incom",
        ]}
      >
        <SubMenuItem text={t.cryptoPage.totalMc} url={"/feed/blockchain/total-market-cap"} />
        <SubMenuItem text={t.cryptoPage.subCoinMix} url={"/feed/blockchain/altcoin-mix"} />
        <SubMenuItem text={t.cryptoPage.subIndices} url={"/feed/blockchain/sub-indices"} />
        <SubMenuItem text={t.cryptoPage.onChain} url={"/feed/blockchain/on-chain"} />
        <SubMenuItem
          text={t.cryptoPage.breakAndIncom}
          url={"/feed/blockchain/break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={"Forex"}
        dropMenuStatus={true}
        Icon={BiDollarCircle}
        subMenuList={[
          "/feed/forex/sp500",
          "/feed/forex/nasdaq",
          "/feed/forex/dax",
          "/feed/forex/dxy",
          "/feed/forex/eur-usd",
          "/feed/forex/usd-jpy",
          "/feed/forex/gold",
          "/feed/forex/silver",
          "/feed/forex/oil",
          "/feed/forex/natqas",
          "/feed/forex/forex-break-and-incom",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/feed/forex/sp500"} />
        <SubMenuItem text={"Nasdaq"} url={"/feed/forex/nasdaq"} />
        <SubMenuItem text={"Dax"} url={"/feed/forex/dax"} />
        <SubMenuItem text={"Dxy"} url={"/feed/forex/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"/feed/forex/eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"/feed/forex/usd-jpy"} />
        <SubMenuItem text={t.forexPage.gold} url={"/feed/forex/gold"} />
        <SubMenuItem text={t.forexPage.silver} url={"/feed/forex/silver"} />
        <SubMenuItem text={t.forexPage.oil} url={"/feed/forex/oil"} />
        <SubMenuItem text={"Natqas"} url={"/feed/forex/natqas"} />
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/feed/forex/forex-break-and-incom"}
        />
      </DropdownMenu>
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
        <SubMenuItem
          text={t.allMarketsPage.stockMarkets}
          url={"/feed/all-markets/stock-markets"}
        />
        <SubMenuItem
          text={t.allMarketsPage.parities}
          url={"/feed/all-markets/parities"}
        />
        <SubMenuItem
          text={t.allMarketsPage.energyMarket}
          url={"/feed/all-markets/energy-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.metalMarket}
          url={"/feed/all-markets/metal-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.commodities}
          url={"/feed/all-markets/commodities"}
        />
      </DropdownMenu>
      <MenuItem
        url={"/feed/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </SidebarLayout>
  );
};

export default Sidebar;
