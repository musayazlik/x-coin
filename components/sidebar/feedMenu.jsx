import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import MenuItem from "@components/sidebar/menuItem";
import {RiLayout2Fill} from "react-icons/ri";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import {MdCurrencyBitcoin} from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import {BiDollarCircle} from "react-icons/bi";
import {BsQuestionLg} from "react-icons/bs";

const FeedMenu = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (
    <>
      {/*
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          sdfsdsdfsdfslfffljk wewefkwefwle kfwejflwekfa eaeklfkle ffef jel
        </AccordionItem>
      </Accordion>
*/}

      <MenuItem
        url={"/feed"}
        Icon={RiLayout2Fill}
        text={t.home.menuName}
      />

      <DropdownMenu
        text={t.cryptoPage.crypto}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        subMenuList={[
          "/feed/blockchain/",
          "/feed/blockchain/bitcoin",
          "/feed/blockchain/ethereum",
          "/feed/blockchain/crypto-indices",
          "/feed/blockchain/sub-coins",
          "/feed/blockchain/sub-indices",
          "/feed/blockchain/on-chain",
          "/feed/blockchain/break-and-incom",
        ]}
      >
        <SubMenuItem
          text={t.cryptoPage.bitcoin}
          url={"/feed/blockchain/bitcoin"}
        />
        <SubMenuItem
          text={t.cryptoPage.ethereum}
          url={"/feed/blockchain/ethereum"}
        />
        <SubMenuItem
          text={t.cryptoPage.cryptoIndices}
          url={"/feed/blockchain/crypto-indices"}
        />
        <SubMenuItem
          text={t.cryptoPage.subCoins}
          url={"/feed/blockchain/sub-coins"}
        />
        <SubMenuItem
          text={t.cryptoPage.onChain}
          url={"/feed/blockchain/on-chain"}
        />
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
          "/feed/forex/forex-break-and-incom",
        ]}
      >
        <SubMenuItem text={"Sp500"} url={"/feed/forex/sp500"}/>
        <SubMenuItem text={"Nasdaq"} url={"/feed/forex/nasdaq"}/>
        <SubMenuItem text={"Dax"} url={"/feed/forex/dax"}/>
        <SubMenuItem text={"Dxy"} url={"/feed/forex/dxy"}/>
        <SubMenuItem text={"Eur/Usd"} url={"/feed/forex/eur-usd"}/>
        <SubMenuItem text={"Usd/Jpy"} url={"/feed/forex/usd-jpy"}/>
        <SubMenuItem text={t.forexPage.gold} url={"/feed/forex/gold"}/>
        <SubMenuItem text={t.forexPage.silver} url={"/feed/forex/silver"}/>
        <SubMenuItem text={t.forexPage.oil} url={"/feed/forex/oil"}/>
        <SubMenuItem
          text={t.forexPage.breakAndIncom}
          url={"/feed/forex/forex-break-and-incom"}
        />
      </DropdownMenu>

      <DropdownMenu
        text={"All Markets"}
        dropMenuStatus={true}
        Icon={BiDollarCircle}
        subMenuList={[
          "/feed/all-markets/commodities/coffee",
          "/feed/all-markets/commodities/cotton",
          "/feed/all-markets/commodities/live-cattle",
          "/feed/all-markets/commodities/orange-juice",
          "/feed/all-markets/commodities/soybean",
          "/feed/all-markets/commodities/sugar",
          "/feed/all-markets/commodities/wheat",
          "/feed/all-markets/enegry-market/energy-etf",
          "/feed/all-markets/enegry-market/natgas",
          "/feed/all-markets/metal-market/copper",
          "/feed/all-markets/metal-market/aluminum",
          "/feed/all-markets/metal-market/nickel",
          "/feed/all-markets/metal-market/paladium",
          "/feed/all-markets/metal-market/platinum",
          "/feed/all-markets/parities/aud-usd",
          "/feed/all-markets/parities/gbp-usd",
          "/feed/all-markets/parities/nzd-usd",
          "/feed/all-markets/parities/usd-cad",
          "/feed/all-markets/parities/usd-chf",
          "/feed/all-markets/stock-market/asia",
          "/feed/all-markets/stock-market/europe",
          "/feed/all-markets/stock-market/usa",
        ]}
      >
        <span
          className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block"

        >Commodities</span>
        <SubMenuItem
          text={"Coffee"}
          url={"/feed/all-markets/commodities/coffee"}
        />
        <SubMenuItem
          text={"Cotton"}
          url={"/feed/all-markets/commodities/cotton"}
        />
        <SubMenuItem
          text={"Live Cattle"}
          url={"/feed/all-markets/commodities/live-cattle"}
        />
        <SubMenuItem
          text={"Orange Juice"}
          url={"/feed/all-markets/commodities/orange-juice"}
        />
        <SubMenuItem
          text={"Soybean"}
          url={"/feed/all-markets/commodities/soybean"}
        />
        <SubMenuItem
          text={"Sugar"}
          url={"/feed/all-markets/commodities/sugar"}
        />
        <SubMenuItem
          text={"Wheat"}
          url={"/feed/all-markets/commodities/wheat"}
        />
        <span
          className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block"

        >Enegry Market</span>
        <SubMenuItem
          text={"Energy ETF"}
          url={"/feed/all-markets/enegry-market/energy-etf"}
        />
        <SubMenuItem
          text={"Natgas"}
          url={"/feed/all-markets/enegry-market/natgas"}
        />
        <span
          className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block"

        >Metal Market</span>
        <SubMenuItem
          text={"Copper"}
          url={"/feed/all-markets/metal-market/copper"}
        />
        <SubMenuItem
          text={"Aluminum"}
          url={"/feed/all-markets/metal-market/aluminum"}
        />
        <SubMenuItem
          text={"Nickel"}
          url={"/feed/all-markets/metal-market/nickel"}
        />
        <SubMenuItem
          text={"Paladium"}
          url={"/feed/all-markets/metal-market/paladium"}
        />

        <SubMenuItem
          text={"Platinum"}
          url={"/feed/all-markets/metal-market/platinum"}
        />

        <span
          className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block"

        >Parities</span>
        <SubMenuItem
          text={"Aud/Usd"}
          url={"/feed/all-markets/parities/aud-usd"}
        />
        <SubMenuItem
          text={"Gbp/Usd"}
          url={"/feed/all-markets/parities/gbp-usd"}
        />
        <SubMenuItem
          text={"Nzd/Usd"}
          url={"/feed/all-markets/parities/nzd-usd"}
        />
        <SubMenuItem
          text={"Usd/Cad"}
          url={"/feed/all-markets/parities/usd-cad"}
        />
        <SubMenuItem
          text={"Usd/Chf"}
          url={"/feed/all-markets/parities/usd-chf"}
        />
        <span
          className="text-gray-200 text-xs font-semibold uppercase mb-2 px-4 bg-zinc-800 py-2 border-b-2 border-rose-700  inline-block"

        >Stock Market</span>
        <SubMenuItem
          text={"Asia"}
          url={"/feed/all-markets/stock-market/asia"}
        />
        <SubMenuItem
          text={"Europe"}
          url={"/feed/all-markets/stock-market/europe"}
        />
        <SubMenuItem
          text={"Usa"}
          url={"/feed/all-markets/stock-market/usa"}
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

export default FeedMenu;