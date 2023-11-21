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

      <MenuItem
        url={"/feed/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </>
  );
};

export default FeedMenu;