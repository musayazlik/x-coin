import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import {MdCurrencyBitcoin} from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import {BiDollarCircle} from "react-icons/bi";
import {RiGlobalLine} from "react-icons/ri";
import MenuItem from "@components/sidebar/menuItem";
import {BsQuestionLg} from "react-icons/bs";

const EducationMenu = () => {
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
          "/education/blockchain/",
          "/education/blockchain/total-market-cap",
          "/education/blockchain/altcoin-mix",
          "/education/blockchain/sub-indices",
          "/education/blockchain/on-chain",
          "/feed/blockchain/break-and-incom",
        ]}
      >
        <SubMenuItem
          text={t.cryptoPage.totalMc}
          url={"/education/blockchain/total-market-cap"}
        />
        <SubMenuItem
          text={t.cryptoPage.subCoinMix}
          url={"/education/blockchain/altcoin-mix"}
        />
        <SubMenuItem
          text={t.cryptoPage.subIndices}
          url={"/education/blockchain/sub-indices"}
        />
        <SubMenuItem
          text={t.cryptoPage.onChain}
          url={"/education/blockchain/on-chain"}
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
          "/education/forex/sp500",
          "/education/forex/nasdaq",
          "/education/forex/dax",
          "/education/forex/dxy",
          "/education/forex/eur-usd",
          "/education/forex/usd-jpy",
          "/education/forex/gold",
          "/education/forex/silver",
          "/education/forex/oil",
          "/education/forex/natqas",
          "/feed/forex/forex-break-and-incom",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/education/forex/sp500"}/>
        <SubMenuItem text={"Nasdaq"} url={"/education/forex/nasdaq"}/>
        <SubMenuItem text={"Dax"} url={"/education/forex/dax"}/>
        <SubMenuItem text={"Dxy"} url={"/education/forex/dxy"}/>
        <SubMenuItem text={"Eur/Usd"} url={"/education/forex/eur-usd"}/>
        <SubMenuItem text={"Usd/Jpy"} url={"/education/forex/usd-jpy"}/>
        <SubMenuItem text={t.forexPage.gold} url={"/education/forex/gold"}/>
        <SubMenuItem text={t.forexPage.silver} url={"/education/forex/silver"}/>
        <SubMenuItem text={t.forexPage.oil} url={"/education/forex/oil"}/>
        <SubMenuItem text={"Natqas"} url={"/education/forex/natqas"}/>
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
          "/education/all-markets/stock-markets",
          "/education/all-markets/parities",
          "/education/all-markets/energy-market",
          "/education/all-markets/metal-market",
          "/education/all-markets/commodities",
        ]}
      >
        <SubMenuItem
          text={t.allMarketsPage.stockMarkets}
          url={"/education/all-markets/stock-markets"}
        />
        <SubMenuItem
          text={t.allMarketsPage.parities}
          url={"/education/all-markets/parities"}
        />
        <SubMenuItem
          text={t.allMarketsPage.energyMarket}
          url={"/education/all-markets/energy-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.metalMarket}
          url={"/education/all-markets/metal-market"}
        />
        <SubMenuItem
          text={t.allMarketsPage.commodities}
          url={"/education/all-markets/commodities"}
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

export default EducationMenu;