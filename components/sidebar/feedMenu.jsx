import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import MenuItem from "@components/sidebar/menuItem";
import { RiLayout2Fill } from "react-icons/ri";

import { BsQuestionLg } from "react-icons/bs";

const FeedMenu = () => {
  const { locale } = useRouter();
  const t = lang(locale);
  return (
    <>
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
