/** Icons */
import {
  BiBasket,
  BiGlobe,
  BiBarChartAlt,
  BiDrink,
  BiBookmarks,
  BiBuildings,
} from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";

/** Components */
import SidebarLayout from "./layout";
import MenuItem from "./menuItem";

const AccountSidebar = () => {
  return (
    <SidebarLayout>
      <MenuItem pathname="/" Icon={HiOutlineHome} text="Spot Market" />
      <MenuItem
        pathname="/future-market"
        Icon={BiBasket}
        text="Future Market"
      />
      <MenuItem
        pathname="/global-metrics"
        Icon={BiGlobe}
        text="Global Metrics"
      />
      <MenuItem
        pathname="/long-short-ratio"
        Icon={BiBarChartAlt}
        text="Long Short Ratio"
      />
      <MenuItem pathname="/funding-rates" Icon={BiDrink} text="Funding Rates" />
      <MenuItem pathname="/top-traders" Icon={BiBookmarks} text="Top Traders" />
      <MenuItem
        pathname="/liquidations-stream"
        Icon={BiBuildings}
        text="Liquidations Stream"
      />
    </SidebarLayout>
  );
};

export default AccountSidebar;
