import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import MenuItem from "@components/sidebar/menuItem";
import { RiGlobalLine, RiLayout2Fill } from "react-icons/ri";
import DropdownMenu from "@components/sidebar/dropdownMenu";
import { MdCurrencyBitcoin } from "react-icons/md";
import SubMenuItem from "@components/sidebar/subMenuItem";
import { BiDollarCircle } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import SubDropdownMenu from "@components/sidebar/subDropdownMenu";

const FeedMenu = () => {
  const { locale } = useRouter();
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

      <MenuItem url={"/feed"} Icon={RiLayout2Fill} text={t.home.menuName} />

      <MenuItem
        url={"/analysis/question-answer"}
        Icon={BsQuestionLg}
        text={t.questionAnswerPage.questionAnswer}
      />
    </>
  );
};

export default FeedMenu;
