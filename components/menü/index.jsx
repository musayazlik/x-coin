import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  User,
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const Menu = () => {
  const { locale, push } = useRouter();
  const { data: session } = useSession();
  return (
    <Navbar maxWidth="2xl" position="sticky" isBordered isBlurred>
      <NavbarBrand>
        <p className="font-bold text-inherit">TraderEdit</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/feed/">
            Feed
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: session.user.image,
                  }}
                  className="transition-transform"
                  description="@tonyreichert"
                  name="Tony Reichert"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="Feed" onClick={() => push("/feed")}>
                  Feed
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
