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
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import LangDropdown from "@components/langDropdown";
import Membership from "@components/icons/membership";
import {lang} from "@/lang/langT";
import {RiUser6Fill, RiUserAddLine, RiUserFill} from "react-icons/ri";

const Menu = () => {
  const {locale, push} = useRouter();
  const {data: session, status} = useSession();
  const t = lang(locale);
  return (
    <Navbar maxWidth="2xl" position="sticky" isBordered isBlurred
            className={"py-2"}>
      <NavbarBrand>
        <p className="font-bold text-inherit">TraderEdit</p>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4 md:gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/feed/">
            {
              t.homepage.menu.feed
            }
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {
              t.homepage.menu.aboutus
            }
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {
              t.homepage.menu.pricing
            }
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {
              t.homepage.menu.contact
            }
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <LangDropdown/>
        {status === "authenticated" ? (
          <>
            <Dropdown placement="bottom-start" className={"mt-6"}>
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

                  {session?.user?.memberShipType === "standard" && (
                    <div
                      className="w-5 h-5 rounded-full flex justify-center items-center absolute -top-1.5  bg-stone-400 left-5 z-20 border-2 border-stone-500 shadow-md shadow-stone-700">
                      <Membership
                        className=" "
                        width="16"
                        height="16"
                        color="#3f3f46"
                        stroke="#3f3f46"
                      />
                    </div>
                  )}

                  {session?.user?.memberShipType === "premium" && (
                    <div
                      className="w-5 h-5 rounded-full flex justify-center items-center absolute -top-1.5  bg-yellow-400 left-5 z-20 border-2 border-yellow-600 shadow-md shadow-yellow-700">
                      <Membership
                        className=" "
                        width="16"
                        height="16"
                        color="#ca8a04"
                        stroke="#ca8a04"
                      />
                    </div>
                  )}

                </div>


              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">
                    {session.user.name + " " + session.user.surname}
                  </p>
                  <p className="font-bold">@{session.user.username}</p>
                </DropdownItem>

                {session?.user?.role === "admin" && (
                  <DropdownItem key="Dashboard"
                                onClick={() => push("/dashboard")}>
                    {
                      t.homepage.avatarDropdown.dashboard
                    }
                  </DropdownItem>
                )
                }
                <DropdownItem key="Feed" onClick={() => push("/feed")}>
                  {
                    t.homepage.avatarDropdown.feed
                  }
                </DropdownItem>
                <DropdownItem key="Profile">
                  {
                    t.homepage.avatarDropdown.profile
                  }
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  {
                    t.homepage.avatarDropdown.support
                  }
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  {
                    t.homepage.avatarDropdown.signout
                  }
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : status === "loading" ? (
          <Spinner/>
        ) : (
          <>


            <Dropdown className={"mt-6"}>
              <DropdownTrigger>


                <Button isIconOnly={true} variant={"faded"}

                        className={"w-10 h-10 p-1 flex " +
                          " justify-center" +
                          " items-center" +
                          " rounded-full"}>
                  <RiUser6Fill fontSize={20} className={"text-gray-500"}/>
                </Button>

              </DropdownTrigger>
              <DropdownMenu variant="flat" aria-label="Static Actions">
                <DropdownItem className={"duration-300"}
                              onClick={() => push("/auth/login")}>
                  <div className={"flex items-center gap-3 py-2 px-2 "}

                  >
                    <RiUserFill fontSize={24}
                    />
                    <span> {
                      t.homepage.avatarDropdown.login
                    }</span>

                  </div>
                </DropdownItem>
                <DropdownItem variant={"bordered"} color={"warning"}
                              className={"duration-300"}
                              onClick={() => push("/auth/register")}
                >
                  <div className={"flex items-center gap-3 py-1.5 px-2"}>
                    <RiUserAddLine fontSize={24}/>
                    <span> {
                      t.homepage.avatarDropdown.register
                    }</span>

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
