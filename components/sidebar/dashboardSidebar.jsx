import { HiOutlineUsers, HiViewList } from "react-icons/hi";

/** Style */
import SidebarLayout from "./layout";
import MenuItem from "./menuItem/index";
import DropdownMenu from "./dropdownMenu";
import SubMenuItem from "./subMenuItem/index";
import { MdCurrencyBitcoin } from "react-icons/md";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <MenuItem url={"/dashboard"} Icon={HiViewList} text={"Kontrol Paneli"} />

      <MenuItem
        url={"/dashboard/users"}
        Icon={HiOutlineUsers}
        text={"Kullanıcılar"}
      />

      <DropdownMenu
        text={"Kripto Ayarları"}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        subMenuList={["/dashboard/on-chain", "/dashboard/break-and-incom"]}
      >
        <SubMenuItem text={"On Chain"} url={"/dashboard/on-chain"} />
        <SubMenuItem
          text={"Kırılım ve Uyumsuzluklar"}
          url={"/dashboard/break-and-incom"}
        />
      </DropdownMenu>
    </SidebarLayout>
  );
};

export default Sidebar;
