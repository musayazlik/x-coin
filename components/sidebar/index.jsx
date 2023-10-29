import {useRouter} from "next/router";
import {lang} from "@/lang/langT";

import SidebarLayout from "./layout";

/** Menu items for sidebar */
import EducationMenu from "@components/sidebar/educationMenu";
import AnalysisMenu from "@components/sidebar/analysisMenu";
import FeedMenu from "@components/sidebar/feedMenu";

const Sidebar = () => {
  const {locale, pathname} = useRouter();
  const t = lang(locale);
  return (
    <SidebarLayout>
      {pathname.includes("/feed") && <FeedMenu/>}
      {pathname.includes("/analysis") && <AnalysisMenu/>}
      {pathname.includes("/education") && <EducationMenu/>}
    </SidebarLayout>
  );
};

export default Sidebar;
