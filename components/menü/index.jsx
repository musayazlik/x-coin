import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spinner,
  User,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LangDropdown from "@components/langDropdown";
import { lang } from "@/lang/langT";
import { RiUserAddLine, RiUserFill } from "react-icons/ri";
import Basket from "@components/basket";
import { PiUserDuotone } from "react-icons/pi";

const Menu = () => {
  const { locale, push, pathname } = useRouter();
  const { data: session, status } = useSession();
  const t = lang(locale);

  const menuItems = [
    { path: "/", label: "home" },
    { path: "/analysis", label: "analysis" },
    { path: "/about-us", label: "aboutus" },
    { path: "/education", label: "education" },
    { path: "/contact", label: "contact" },
  ];
  return (
    <Navbar
      maxWidth="2xl"
      position="sticky"
      isBordered
      isBlurred
      className={"py-2"}
    >
      <NavbarBrand>
        <Link href="/">
          <h1 className="font-bold text-inherit">TraderEdit</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4 md:gap-8" justify="center">
        {menuItems.map(({ path, label }) => (
          <NavbarItem key={path} isActive={pathname === path} path={path}>
            <Link color={pathname !== path ? "foreground" : ""} href={path}>
              {t.homepage.menu[label]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className={"gap-1"}>
        <Basket />

        <LangDropdown />
        {status === "authenticated" ? (
          <>
            <Dropdown
              backdrop={"blur"}
              variant="faded"
              showArrow
              placement="bottom-start"
              className={"mt-6"}
            >
              <DropdownTrigger>
                <div className={"relative flex flex-shrink-0"}>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: session.user.image,
                    }}
                    className="transition-transform"
                    description={`@${session.user.username}`}
                    name={`${session.user.name + " " + session.user.surname}`}
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="faded">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">
                    {session.user.name + " " + session.user.surname}
                  </p>
                  <p className="font-bold">@{session.user.username}</p>
                </DropdownItem>

                {session?.user?.role === "admin" && (
                  <DropdownItem
                    key="Dashboard"
                    onClick={() => push("/dashboard")}
                  >
                    {t.homepage.avatarDropdown.dashboard}
                  </DropdownItem>
                )}
                <DropdownItem key="Analysis" onClick={() => push("/analysis")}>
                  {t.homepage.avatarDropdown.analysis}
                </DropdownItem>
                <DropdownItem key="Profile">
                  {t.homepage.avatarDropdown.profile}
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  {t.homepage.avatarDropdown.support}
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  {t.homepage.avatarDropdown.signout}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : status === "loading" ? (
          <Spinner />
        ) : (
          <>
            <Dropdown backdrop={"blur"} showArrow variant="faded">
              <DropdownTrigger>
                <Button
                  isIconOnly={true}
                  variant={"light"}
                  className={
                    "w-10 h-10 p-1 flex " + " justify-center" + " items-center"
                  }
                >
                  <PiUserDuotone fontSize={22} className={"text-white"} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem
                  className={"duration-300"}
                  onClick={() => push("/auth/login")}
                >
                  <div className={"flex items-center gap-3 py-2 px-2 "}>
                    <RiUserFill fontSize={24} />
                    <span> {t.homepage.avatarDropdown.login}</span>
                  </div>
                </DropdownItem>
                <DropdownItem
                  variant={"bordered"}
                  color={"warning"}
                  className={"duration-300"}
                  onClick={() => push("/auth/register")}
                >
                  <div className={"flex items-center gap-3 py-1.5 px-2"}>
                    <RiUserAddLine fontSize={24} />
                    <span> {t.homepage.avatarDropdown.register}</span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Menu;
