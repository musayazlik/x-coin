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
  User,
} from "@nextui-org/react";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import LangDropdown from "@components/langDropdown";
import Membership from "@components/icons/membership";
import {lang} from "@/lang/langT";

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
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
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
            <Dropdown placement="bottom-start" backdrop="blur">
              <DropdownTrigger>
                <div className={"relative"}>
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
              <DropdownMenu aria-label="User Actions" variant="flat">
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
          <>
            <div className={"text-white"}>

            </div>
          </>
        ) : (
          <>
            <Button
              color="default"
              radius="sm"
              variant="light"
              className="border-2 border-zinc-800"
              size="lg"
              onClick={() => push("/auth/login")}
            >
              Sign In
            </Button>
            <Button
              color="warning"
              radius="sm"
              variant="shadow"
              className="border-2 border-yellow-600"
              size="lg"
              onClick={() => push("/auth/register")}
            >
              Sign Up
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Menu;
