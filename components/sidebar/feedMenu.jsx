import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import MenuItem from "@components/sidebar/menuItem";
import {RiGlobalLine, RiLayout2Fill} from "react-icons/ri";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import {MdCurrencyBitcoin} from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import {BiDollarCircle} from "react-icons/bi";
import {BsQuestionLg} from "react-icons/bs";
import SubDropdownMenu from "@components/sidebar/subDropdownMenu";

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

      <MenuItem url={"/feed"} Icon={RiLayout2Fill} text={t.home.menuName}/>

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
          "/feed/blockchain/crypto-indices",
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
          text={t.alarms}
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
          text={t.alarms}
          url={"/feed/forex/forex-break-and-incom"}
        />
      </DropdownMenu>

      <DropdownMenu
        text={"All Markets"}
        dropMenuStatus={true}
        Icon={RiGlobalLine}
        subMenuList={[
          "/feed/all-markets/commodities/coffee",
          "/feed/all-markets/commodities/cotton",
          "/feed/all-markets/commodities/live-cattle",
          "/feed/all-markets/commodities/orange-juice",
          "/feed/all-markets/commodities/soybean",
          "/feed/all-markets/commodities/sugar",
          "/feed/all-markets/commodities/wheat",
          "/feed/all-markets/energy-market/energy-etf",
          "/feed/all-markets/energy-market/natgas",
          "/feed/all-markets/metal-market/copper",
          "/feed/all-markets/metal-market/aluminum",
          "/feed/all-markets/metal-market/nickel",
          "/feed/all-markets/metal-market/paladium",
          "/feed/all-markets/metal-market/platinium",
          "/feed/all-markets/parities/aud-usd",
          "/feed/all-markets/parities/gbp-usd",
          "/feed/all-markets/parities/nzd-usd",
          "/feed/all-markets/parities/usd-cad",
          "/feed/all-markets/parities/usd-chf",
          "/feed/all-markets/stock-markets/asia/china50",
          "/feed/all-markets/stock-markets/asia/hangseng50",
          "/feed/all-markets/stock-markets/asia/nse",
          "/feed/all-markets/stock-markets/asia/nikkei",
          "/feed/all-markets/stock-markets/europa/cac40",
          "/feed/all-markets/stock-markets/europa/dax",
          "/feed/all-markets/stock-markets/europa/stoxx50",
          "/feed/all-markets/stock-markets/europa/ftse",
          "/feed/all-markets/stock-markets/europa/smi",
          "/feed/all-markets/stock-markets/usa/down-jones",
          "/feed/all-markets/stock-markets/usa/nasdaq",
          "/feed/all-markets/stock-markets/usa/russell2000",
          "/feed/all-markets/stock-markets/usa/sp500",

        ]}
      >

        <SubDropdownMenu key={1} title={"Commodities"} label={"Commodities"}>

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

        </SubDropdownMenu>

        <SubDropdownMenu key={2} label={"Energy Market"}
                         title={"Energy Market"}>
          <SubMenuItem
            text={"Energy ETF"}
            url={"/feed/all-markets/energy-market/energy-etf"}
          />
          <SubMenuItem
            text={"Natgas"}
            url={"/feed/all-markets/energy-market/natgas"}
          />
        </SubDropdownMenu>
        <SubDropdownMenu key={3} label={"Metal Market"} title={"Metal Market"}>
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
            text={"Platinium"}
            url={"/feed/all-markets/metal-market/platinium"}
          />

        </SubDropdownMenu>
        <SubDropdownMenu key={4} label={"Parities"} title={"Parities"}>
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
        </SubDropdownMenu>


        <SubDropdownMenu key={5} label={"Stock Market"} title={"Stock Market"}>


          <div
            className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 "
          >
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Asia
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"China50"}
              url={"/feed/all-markets/stock-markets/asia/china50"}
            >
            </SubMenuItem>
            <SubMenuItem
              text={"Hangseng50 (HongKong)"}
              url={"/feed/all-markets/stock-markets/asia/hangseng50"}
            />
            <SubMenuItem
              text={"Nse (India)"}
              url={"/feed/all-markets/stock-markets/asia/nse"}
            />
            <SubMenuItem
              text={"Nikkei (Japan)"}
              url={"/feed/all-markets/stock-markets/asia/nikkei"}
            />
          </div>


          <div
            className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 mt-3 "
          >
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Europa
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"Cac40 (France)"}
              url={"/feed/all-markets/stock-markets/europa/cac40"}
            >
            </SubMenuItem>
            <SubMenuItem
              text={"Dax (Germany)"}
              url={"/feed/all-markets/stock-markets/europa/dax"}
            />
            <SubMenuItem
              text={"Stoxx50 (Euro)"}
              url={"/feed/all-markets/stock-markets/europa/stoxx50"}
            />
            <SubMenuItem
              text={"Ftse (London)"}
              url={"/feed/all-markets/stock-markets/europa/ftse"}
            />

            <SubMenuItem
              text={"Smi (Swiss)"}
              url={"/feed/all-markets/stock-markets/europa/smi"}
            />
          </div>

          <div
            className="text-gray-200 flex items-center w-full  gap-2 text-xs font-semibold uppercase mb-2 px-1 mt-3 "
          >
            <span className={"w-3 h-0.5 bg-yellow-500 rounded-full "}></span>
            Usa
          </div>

          <div className="px-1">
            <SubMenuItem
              text={"Down Jones"}
              url={"/feed/all-markets/stock-markets/usa/down-jones"}
            >
            </SubMenuItem>
            <SubMenuItem
              text={"Nasdaq"}
              url={"/feed/all-markets/stock-markets/usa/nasdaq"}
            />
            <SubMenuItem
              text={"Russell2000"}
              url={"/feed/all-markets/stock-markets/usa/russell2000"}
            />
            <SubMenuItem
              text={"Sp500"}
              url={"/feed/all-markets/stock-markets/usa/sp500"}
            />
          </div>

        </SubDropdownMenu>
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
