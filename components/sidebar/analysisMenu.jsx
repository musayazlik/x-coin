import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import { MdCurrencyBitcoin } from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import { BiDollarCircle } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import MenuItem from "@components/sidebar/menuItem";
import { BsQuestionLg } from "react-icons/bs";
import SubDropdownMenu from "@components/sidebar/subDropdownMenu";

const AnalysisMenu = () => {
  const { locale } = useRouter();
  const t = lang(locale);
  return (
    <>
      <DropdownMenu
        text={t.cryptoPage.crypto}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        defaultOpen={true}
        subMenuList={[
          "/analysis/",
          "/analysis/bitcoin",
          "/analysis/ethereum",
          "/analysis/crypto-indices",
          "/analysis/sub-coins",
          "/analysis/on-chain",
          "/analysis/blockchain/alarms",
        ]}
      >
        <SubMenuItem text={t.cryptoPage.bitcoin} url={"/analysis/bitcoin"} />
        <SubMenuItem text={t.cryptoPage.ethereum} url={"/analysis/ethereum"} />
        <SubMenuItem
          text={t.cryptoPage.cryptoIndices}
          url={"/analysis/crypto-indices"}
        />

        <SubMenuItem text={t.cryptoPage.subCoins} url={"/analysis/sub-coins"} />
        <SubMenuItem text={t.cryptoPage.onChain} url={"/analysis/on-chain"} />
        <SubMenuItem text={t.alarms} url={"/analysis/blockchain/alarms"} />
      </DropdownMenu>
      <DropdownMenu
        text={"Forex"}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={BiDollarCircle}
        subMenuList={[
          "/analysis/sp500",
          "/analysis/nasdaq",
          "/analysis/dax",
          "/analysis/dxy",
          "/analysis/eur-usd",
          "/analysis/usd-jpy",
          "/analysis/gold",
          "/analysis/silver",
          "/analysis/oil",
          "/analysis/forex/alarms",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/analysis/sp500"} />
        <SubMenuItem text={"Nasdaq"} url={"/analysis/nasdaq"} />
        <SubMenuItem text={"Dax"} url={"/analysis/dax"} />
        <SubMenuItem text={"Dxy"} url={"/analysis/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"/analysis/eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"/analysis/usd-jpy"} />
        <SubMenuItem text={t.forexPage.gold} url={"/analysis/gold"} />
        <SubMenuItem text={t.forexPage.silver} url={"/analysis/silver"} />
        <SubMenuItem text={t.forexPage.oil} url={"/analysis/oil"} />
        <SubMenuItem text={t.alarms} url={"/analysis/forex/alarms"} />
      </DropdownMenu>
      <DropdownMenu
        text={"All Markets"}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/analysis/coffee",
          "/analysis/cotton",
          "/analysis/live-cattle",
          "/analysis/orange-juice",
          "/analysis/soybean",
          "/analysis/sugar",
          "/analysis/wheat",
          "/analysis/energy-etf",
          "/analysis/natgas",
          "/analysis/copper",
          "/analysis/aluminum",
          "/analysis/nickel",
          "/analysis/paladium",
          "/analysis/platinium",
          "/analysis/aud-usd",
          "/analysis/gbp-usd",
          "/analysis/nzd-usd",
          "/analysis/usd-cad",
          "/analysis/usd-chf",
          "/analysis/china50",
          "/analysis/hangseng50",
          "/analysis/nse",
          "/analysis/nikkei",
          "/analysis/cac40",
          "/analysis/dax",
          "/analysis/stoxx50",
          "/analysis/ftse",
          "/analysis/smi",
          "/analysis/down-jones",
          "/analysis/nasdaq",
          "/analysis/russell2000",
          "/analysis/sp500",
        ]}
      >
        <SubDropdownMenu
          key={"Commodities"}
          title={"Commodities"}
          label={"Commodities"}
          primaryKey={"Commodities"}
        >
          <SubMenuItem text={"Coffee"} url={"/analysis/coffee"} />
          <SubMenuItem text={"Cotton"} url={"/analysis/cotton"} />
          <SubMenuItem text={"Live Cattle"} url={"/analysis/live-cattle"} />
          <SubMenuItem text={"Orange Juice"} url={"/analysis/orange-juice"} />
          <SubMenuItem text={"Soybean"} url={"/analysis/soybean"} />
          <SubMenuItem text={"Sugar"} url={"/analysis/sugar"} />
          <SubMenuItem text={"Wheat"} url={"/analysis/wheat"} />
        </SubDropdownMenu>

        <SubDropdownMenu
          key={"Energy Market"}
          label={"Energy Market"}
          title={"Energy Market"}
        >
          <SubMenuItem text={"Energy ETF"} url={"/analysis/energy-etf"} />
          <SubMenuItem text={"Natgas"} url={"/analysis/natgas"} />
        </SubDropdownMenu>
        <SubDropdownMenu
          key={"Metal Market"}
          label={"Metal Market"}
          title={"Metal Market"}
        >
          <SubMenuItem text={"Copper"} url={"/analysis/copper"} />
          <SubMenuItem text={"Aluminum"} url={"/analysis/aluminum"} />
          <SubMenuItem text={"Nickel"} url={"/analysis/nickel"} />
          <SubMenuItem text={"Paladium"} url={"/analysis/paladium"} />

          <SubMenuItem text={"Platinium"} url={"/analysis/platinium"} />
        </SubDropdownMenu>
        <SubDropdownMenu key={"Parities"} label={"Parities"} title={"Parities"}>
          <SubMenuItem text={"Aud/Usd"} url={"/analysis/aud-usd"} />
          <SubMenuItem text={"Gbp/Usd"} url={"/analysis/gbp-usd"} />
          <SubMenuItem text={"Nzd/Usd"} url={"/analysis/nzd-usd"} />
          <SubMenuItem text={"Usd/Cad"} url={"/analysis/usd-cad"} />
          <SubMenuItem text={"Usd/Chf"} url={"/analysis/usd-chf"} />
        </SubDropdownMenu>

        <SubDropdownMenu
          key={"Stock Market"}
          label={"Stock Market"}
          title={"Stock Market"}
          menuList={[
            "china50",
            "hongkong50",
            "nse",
            "nikkei",
            "cac40",
            "dax",
            "stoxx50",
            "ftse",
            "smi",
            "dow-jones",
            "nasdaq",
            "russell2000",
            "sp500",
          ]}
        >
          <div className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 ">
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Asia
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"China50"}
              url={"/analysis/china50"}
            ></SubMenuItem>
            <SubMenuItem
              text={"Hongkong50 (HongKong)"}
              url={"/analysis/hongkong50"}
            />
            <SubMenuItem text={"Nse (India)"} url={"/analysis/nse"} />
            <SubMenuItem text={"Nikkei (Japan)"} url={"/analysis/nikkei"} />
          </div>

          <div className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 mt-3 ">
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Europa
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"Cac40 (France)"}
              url={"/analysis/cac40"}
            ></SubMenuItem>
            <SubMenuItem text={"Dax (Germany)"} url={"/analysis/europa-dax"} />
            <SubMenuItem text={"Stoxx50 (Euro)"} url={"/analysis/stoxx50"} />
            <SubMenuItem text={"Ftse (London)"} url={"/analysis/ftse"} />

            <SubMenuItem text={"Smi (Swiss)"} url={"/analysis/smi"} />
          </div>

          <div className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 mt-3 ">
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Usa
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"Down Jones"}
              url={"/analysis/down-jones"}
            ></SubMenuItem>
            <SubMenuItem text={"Nasdaq"} url={"/analysis/usa-nasdaq"} />
            <SubMenuItem text={"Russell2000"} url={"/analysis/russell2000"} />
            <SubMenuItem text={"Sp500"} url={"/analysis/usa-sp500"} />
          </div>
        </SubDropdownMenu>
      </DropdownMenu>
      <MenuItem
        url={"/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </>
  );
};

export default AnalysisMenu;
