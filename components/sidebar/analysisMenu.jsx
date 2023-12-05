import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import { MdCurrencyBitcoin } from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import { BiDollarCircle } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import MenuItem from "@components/sidebar/menuItem";
import { BsQuestionLg } from "react-icons/bs";

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
          "/analysis/blockchain/",
          "/analysis/blockchain/bitcoin",
          "/analysis/blockchain/ethereum",
          "/analysis/blockchain/crypto-indices",
          "/analysis/blockchain/sub-coins",
          "/analysis/blockchain/on-chain",
          "/feed/blockchain/break-and-incom",
        ]}
      >
        <SubMenuItem
          text={t.cryptoPage.bitcoin}
          url={"/analysis/blockchain/bitcoin"}
        />
        <SubMenuItem
          text={t.cryptoPage.ethereum}
          url={"/analysis/blockchain/ethereum"}
        />
        <SubMenuItem
          text={t.cryptoPage.cryptoIndices}
          url={"/analysis/blockchain/crypto-indices"}
        />

        <SubMenuItem
          text={t.cryptoPage.subCoins}
          url={"/analysis/blockchain/sub-coins"}
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
        <SubMenuItem text={"Sp500"} url={"/analysis/forex/sp500"} />
        <SubMenuItem text={"Nasdaq"} url={"/analysis/forex/nasdaq"} />
        <SubMenuItem text={"Dax"} url={"/analysis/forex/dax"} />
        <SubMenuItem text={"Dxy"} url={"/analysis/forex/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"/analysis/forex/eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"/analysis/forex/usd-jpy"} />
        <SubMenuItem text={t.forexPage.gold} url={"/analysis/forex/gold"} />
        <SubMenuItem text={t.forexPage.silver} url={"/analysis/forex/silver"} />
        <SubMenuItem text={t.forexPage.oil} url={"/analysis/forex/oil"} />
        <SubMenuItem text={"Natqas"} url={"/analysis/forex/natqas"} />
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/feed/forex/forex-break-and-incom"}
        />
      </DropdownMenu>
      <DropdownMenu
        text={"All Markets"}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/analysis/all-markets/commodities/coffee",
          "/analysis/all-markets/commodities/cotton",
          "/analysis/all-markets/commodities/live-cattle",
          "/analysis/all-markets/commodities/orange-juice",
          "/analysis/all-markets/commodities/soybean",
          "/analysis/all-markets/commodities/sugar",
          "/analysis/all-markets/commodities/wheat",
          "/analysis/all-markets/energy-market/energy-etf",
          "/analysis/all-markets/energy-market/natgas",
          "/analysis/all-markets/metal-market/copper",
          "/analysis/all-markets/metal-market/aluminum",
          "/analysis/all-markets/metal-market/nickel",
          "/analysis/all-markets/metal-market/paladium",
          "/analysis/all-markets/metal-market/platinium",
          "/analysis/all-markets/parities/aud-usd",
          "/analysis/all-markets/parities/gbp-usd",
          "/analysis/all-markets/parities/nzd-usd",
          "/analysis/all-markets/parities/usd-cad",
          "/analysis/all-markets/parities/usd-chf",
          "/analysis/all-markets/stock-markets/asia",
          "/analysis/all-markets/stock-markets/europa",
          "/analysis/all-markets/stock-markets/usa",
        ]}
      >
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Commodities
        </span>
        <SubMenuItem
          text={"Coffee"}
          url={"/analysis/all-markets/commodities/coffee"}
        />
        <SubMenuItem
          text={"Cotton"}
          url={"/analysis/all-markets/commodities/cotton"}
        />
        <SubMenuItem
          text={"Live Cattle"}
          url={"/analysis/all-markets/commodities/live-cattle"}
        />
        <SubMenuItem
          text={"Orange Juice"}
          url={"/analysis/all-markets/commodities/orange-juice"}
        />
        <SubMenuItem
          text={"Soybean"}
          url={"/analysis/all-markets/commodities/soybean"}
        />
        <SubMenuItem
          text={"Sugar"}
          url={"/analysis/all-markets/commodities/sugar"}
        />
        <SubMenuItem
          text={"Wheat"}
          url={"/analysis/all-markets/commodities/wheat"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Energy Market
        </span>
        <SubMenuItem
          text={"Energy ETF"}
          url={"/analysis/all-markets/energy-market/energy-etf"}
        />
        <SubMenuItem
          text={"Natgas"}
          url={"/analysis/all-markets/energy-market/natgas"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Metal Market
        </span>
        <SubMenuItem
          text={"Copper"}
          url={"/analysis/all-markets/metal-market/copper"}
        />
        <SubMenuItem
          text={"Aluminum"}
          url={"/analysis/all-markets/metal-market/aluminum"}
        />
        <SubMenuItem
          text={"Nickel"}
          url={"/analysis/all-markets/metal-market/nickel"}
        />
        <SubMenuItem
          text={"Paladium"}
          url={"/analysis/all-markets/metal-market/paladium"}
        />

        <SubMenuItem
          text={"Platinium"}
          url={"/analysis/all-markets/metal-market/platinium"}
        />

        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Parities
        </span>
        <SubMenuItem
          text={"Aud/Usd"}
          url={"/analysis/all-markets/parities/aud-usd"}
        />
        <SubMenuItem
          text={"Gbp/Usd"}
          url={"/analysis/all-markets/parities/gbp-usd"}
        />
        <SubMenuItem
          text={"Nzd/Usd"}
          url={"/analysis/all-markets/parities/nzd-usd"}
        />
        <SubMenuItem
          text={"Usd/Cad"}
          url={"/analysis/all-markets/parities/usd-cad"}
        />
        <SubMenuItem
          text={"Usd/Chf"}
          url={"/analysis/all-markets/parities/usd-chf"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Stock Market
        </span>
        <SubMenuItem
          text={"Asia"}
          url={"/analysis/all-markets/stock-markets/asia"}
        />
        <SubMenuItem
          text={"Europa"}
          url={"/analysis/all-markets/stock-markets/europa"}
        />
        <SubMenuItem
          text={"Usa"}
          url={"/analysis/all-markets/stock-markets/usa"}
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
