import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import {MdCurrencyBitcoin} from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import {BiDollarCircle} from "react-icons/bi";
import {RiGlobalLine} from "react-icons/ri";
import MenuItem from "@components/sidebar/menuItem";
import {BsQuestionLg} from "react-icons/bs";

const AnalysisMenu = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (
    <>
      <DropdownMenu
        text={t.cryptoPage.crypto}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        defaultOpen={true}
        subMenuList={[
          "/analysis/blockchain/",
          "/analysis/blockchain/total-market-cap",
          "/analysis/blockchain/subcoin-mix",
          "/analysis/blockchain/sub-indices",
          "/analysis/blockchain/on-chain",
          "/feed/blockchain/break-and-incom",
        ]}
      >
        <SubMenuItem
          text={t.cryptoPage.totalMc}
          url={"/analysis/blockchain/total-market-cap"}
        />
        <SubMenuItem
          text={t.cryptoPage.subCoinMix}
          url={"/analysis/blockchain/subcoin-mix"}
        />
        <SubMenuItem
          text={t.cryptoPage.subIndices}
          url={"/analysis/blockchain/sub-indices"}
        />
        <SubMenuItem
          text={t.cryptoPage.onChain}
          url={"/analysis/blockchain/on-chain"}
        />
        <SubMenuItem
          text={t.cryptoPage.breakAndIncom}
          url={"/feed/blockchain/break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={"Forex"}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={BiDollarCircle}
        subMenuList={[
          "/analysis/forex/sp500",
          "/analysis/forex/nasdaq",
          "/analysis/forex/dax",
          "/analysis/forex/dxy",
          "/analysis/forex/eur-usd",
          "/analysis/forex/usd-jpy",
          "/analysis/forex/gold",
          "/analysis/forex/silver",
          "/analysis/forex/oil",
          "/analysis/forex/natqas",
          "/feed/forex/forex-break-and-incom",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/analysis/forex/sp500"}/>
        <SubMenuItem text={"Nasdaq"} url={"/analysis/forex/nasdaq"}/>
        <SubMenuItem text={"Dax"} url={"/analysis/forex/dax"}/>
        <SubMenuItem text={"Dxy"} url={"/analysis/forex/dxy"}/>
        <SubMenuItem text={"Eur/Usd"} url={"/analysis/forex/eur-usd"}/>
        <SubMenuItem text={"Usd/Jpy"} url={"/analysis/forex/usd-jpy"}/>
        <SubMenuItem text={t.forexPage.gold} url={"/analysis/forex/gold"}/>
        <SubMenuItem text={t.forexPage.silver} url={"/analysis/forex/silver"}/>
        <SubMenuItem text={t.forexPage.oil} url={"/analysis/forex/oil"}/>
        <SubMenuItem text={"Natqas"} url={"/analysis/forex/natqas"}/>
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/feed/forex/forex-break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={t.allMarketsPage.allMarkets}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/analysis/all-markets/stock-markets",
          "/analysis/all-markets/parities",
          "/analysis/all-markets/energy-market",
          "/analysis/all-markets/metal-market",
          "/analysis/all-markets/commodities",
        ]}
      >
        <SubMenuItem
          text={t.allMarketsPage.stockMarkets}
          url={"/analysis/all-markets/stock-markets"}
        />
        <SubMenuItem
          text={t.allMarketsPage.parities}
          url={"/analysis/all-markets/parities"}
        />
        <SubMenuItem
          text={t.allMarketsPage.energyMarket}
          url={"/analysis/all-markets/energy-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.metalMarket}
          url={"/analysis/all-markets/metal-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.commodities}
          url={"/analysis/all-markets/commodities"}
        />
      </DropdownMenu>
      <MenuItem
        url={"/feed/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </>
  );
};

export default AnalysisMenu;