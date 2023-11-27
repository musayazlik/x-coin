/** Style */
import SidebarLayout from "./layout";
import MenuItem from "./menuItem/index";
import DropdownMenu from "./dropdownMenu";
import SubMenuItem from "./subMenuItem/index";
import {MdCurrencyBitcoin} from "react-icons/md";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {
  RiDraftLine,
  RiLayout2Line,
  RiShoppingBasketLine,
  RiUser3Line
} from "react-icons/ri";
import {HiOutlineAcademicCap} from "react-icons/hi2";
import {HiMail} from "react-icons/hi";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <MenuItem url={"/dashboard"} Icon={RiLayout2Line}
                text={"Kontrol Paneli"}/>

      <MenuItem
        url={"/dashboard/users"}
        Icon={RiUser3Line}
        text={"Kullanıcılar"}
      />

      <MenuItem
        url={"/dashboard/membership-sales"}
        Icon={RiShoppingBasketLine}
        text={"Üyelik Satışı"}
      />

      <MenuItem
        url={"/dashboard/posts"}
        Icon={RiDraftLine}
        text={"Yazılar"}
      />

      <MenuItem
        url={"/dashboard/educations"}
        Icon={HiOutlineAcademicCap}
        text={"Eğitimler"}
      />

      <DropdownMenu
        text={"Kripto Ayarları"}
        dropMenuStatus={true}
        Icon={MdCurrencyBitcoin}
        subMenuList={["/dashboard/on-chain", "/dashboard/break-and-incom"]}
      >
        <SubMenuItem text={"On Chain"} url={"/dashboard/on-chain"}/>
        <SubMenuItem
          text={"Kırılım ve Uyumsuzluklar"}
          url={"/dashboard/break-and-incom"}
        />
      </DropdownMenu>

      <DropdownMenu
        text={"Forex Ayarları"}
        dropMenuStatus={true}
        Icon={AiOutlineDollarCircle}
        subMenuList={["/dashboard/forex-break-and-incom"]}
      >
        <SubMenuItem
          text={"Forex Kırılım ve Uyumsuzluklar"}
          url={"/dashboard/forex-break-and-incom"}
        />
      </DropdownMenu>

      <MenuItem
        url={"/dashboard/messages"}
        Icon={HiMail}
        text={"Mesajlar"}
      />
    </SidebarLayout>
  );
};

export default Sidebar;
