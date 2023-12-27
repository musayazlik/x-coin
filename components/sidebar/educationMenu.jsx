import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import { MdCurrencyBitcoin } from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import { BiDollarCircle } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import MenuItem from "@components/sidebar/menuItem";
import { BsQuestionLg } from "react-icons/bs";

const EducationMenu = () => {
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
          "/education/blockchain/",
          "/education/blockchain/bitcoin",
          "/education/blockchain/ethereum",
          "/education/blockchain/crypto-indices",
          "/education/blockchain/sub-coins",
          "/education/blockchain/on-chain",
          "/analysis/blockchain/alarms",
        ]}
      >
        <SubMenuItem
          text={t.cryptoPage.bitcoin}
          url={"/education/blockchain/bitcoin"}
        />
        <SubMenuItem
          text={t.cryptoPage.ethereum}
          url={"/education/blockchain/ethereum"}
        />
        <SubMenuItem
          text={t.cryptoPage.cryptoIndices}
          url={"/education/blockchain/crypto-indices"}
        />

        <SubMenuItem
          text={t.cryptoPage.subCoins}
          url={"/education/blockchain/sub-coins"}
        />
        <SubMenuItem
          text={t.cryptoPage.onChain}
          url={"/education/blockchain/on-chain"}
        />
        <SubMenuItem
          text={t.cryptoPage.breakAndIncom}
          url={"/analysis/blockchain/alarms"}
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
          "/analysis/forex/forex-alarms",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/education/forex/sp500"} />
        <SubMenuItem text={"Nasdaq"} url={"/education/forex/nasdaq"} />
        <SubMenuItem text={"Dax"} url={"/education/forex/dax"} />
        <SubMenuItem text={"Dxy"} url={"/education/forex/dxy"} />
        <SubMenuItem text={"Eur/Usd"} url={"/education/forex/eur-usd"} />
        <SubMenuItem text={"Usd/Jpy"} url={"/education/forex/usd-jpy"} />
        <SubMenuItem text={t.forexPage.gold} url={"/education/forex/gold"} />
        <SubMenuItem
          text={t.forexPage.silver}
          url={"/education/forex/silver"}
        />
        <SubMenuItem text={t.forexPage.oil} url={"/education/forex/oil"} />
        <SubMenuItem text={"Natqas"} url={"/education/forex/natqas"} />
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/analysis/forex/forex-alarms"}
        />
      </DropdownMenu>

      <DropdownMenu
        text={"All Markets"}
        dropMenuStatus={true}
        defaultOpen={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/education/all-markets/commodities/coffee",
          "/education/all-markets/commodities/cotton",
          "/education/all-markets/commodities/live-cattle",
          "/education/all-markets/commodities/orange-juice",
          "/education/all-markets/commodities/soybean",
          "/education/all-markets/commodities/sugar",
          "/education/all-markets/commodities/wheat",
          "/education/all-markets/energy-market/energy-etf",
          "/education/all-markets/energy-market/natgas",
          "/education/all-markets/metal-market/copper",
          "/education/all-markets/metal-market/aluminum",
          "/education/all-markets/metal-market/nickel",
          "/education/all-markets/metal-market/paladium",
          "/education/all-markets/metal-market/platinium",
          "/education/all-markets/parities/aud-usd",
          "/education/all-markets/parities/gbp-usd",
          "/education/all-markets/parities/nzd-usd",
          "/education/all-markets/parities/usd-cad",
          "/education/all-markets/parities/usd-chf",
          "/education/all-markets/stock-markets/asia",
          "/education/all-markets/stock-markets/europa",
          "/education/all-markets/stock-markets/usa",
        ]}
      >
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Commodities
        </span>
        <SubMenuItem
          text={"Coffee"}
          url={"/education/all-markets/commodities/coffee"}
        />
        <SubMenuItem
          text={"Cotton"}
          url={"/education/all-markets/commodities/cotton"}
        />
        <SubMenuItem
          text={"Live Cattle"}
          url={"/education/all-markets/commodities/live-cattle"}
        />
        <SubMenuItem
          text={"Orange Juice"}
          url={"/education/all-markets/commodities/orange-juice"}
        />
        <SubMenuItem
          text={"Soybean"}
          url={"/education/all-markets/commodities/soybean"}
        />
        <SubMenuItem
          text={"Sugar"}
          url={"/education/all-markets/commodities/sugar"}
        />
        <SubMenuItem
          text={"Wheat"}
          url={"/education/all-markets/commodities/wheat"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Energy Market
        </span>
        <SubMenuItem
          text={"Energy ETF"}
          url={"/education/all-markets/energy-market/energy-etf"}
        />
        <SubMenuItem
          text={"Natgas"}
          url={"/education/all-markets/energy-market/natgas"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Metal Market
        </span>
        <SubMenuItem
          text={"Copper"}
          url={"/education/all-markets/metal-market/copper"}
        />
        <SubMenuItem
          text={"Aluminum"}
          url={"/education/all-markets/metal-market/aluminum"}
        />
        <SubMenuItem
          text={"Nickel"}
          url={"/education/all-markets/metal-market/nickel"}
        />
        <SubMenuItem
          text={"Paladium"}
          url={"/education/all-markets/metal-market/paladium"}
        />

        <SubMenuItem
          text={"Platinium"}
          url={"/education/all-markets/metal-market/platinium"}
        />

        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Parities
        </span>
        <SubMenuItem
          text={"Aud/Usd"}
          url={"/education/all-markets/parities/aud-usd"}
        />
        <SubMenuItem
          text={"Gbp/Usd"}
          url={"/education/all-markets/parities/gbp-usd"}
        />
        <SubMenuItem
          text={"Nzd/Usd"}
          url={"/education/all-markets/parities/nzd-usd"}
        />
        <SubMenuItem
          text={"Usd/Cad"}
          url={"/education/all-markets/parities/usd-cad"}
        />
        <SubMenuItem
          text={"Usd/Chf"}
          url={"/education/all-markets/parities/usd-chf"}
        />
        <span className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block">
          Stock Market
        </span>
        <SubMenuItem
          text={"Asia"}
          url={"/education/all-markets/stock-markets/asia"}
        />
        <SubMenuItem
          text={"Europa"}
          url={"/education/all-markets/stock-markets/europa"}
        />
        <SubMenuItem
          text={"Usa"}
          url={"/education/all-markets/stock-markets/usa"}
        />
      </DropdownMenu>

      <MenuItem
        url={"/analysis/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </>
  );
};

export default EducationMenu;
