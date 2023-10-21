import { useRouter } from "next/router";
import { lang } from "@/lang/langT";
import { Button } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import Menu from "@/components/menü";

const Home = () => {
  const { locale, push } = useRouter();
  const t = lang(locale);
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {/* <header className="border-b-2 border-zinc-900">
        <div className="container">
          <div className="flex justify-between py-6 items-center">
            <div className="logo flex">
              <span>Logo</span>
            </div>
            <div className="authButtons flex gap-2">
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
                      <DropdownItem key="team_settings">
                        Team Settings
                      </DropdownItem>
                      <DropdownItem key="analytics">Analytics</DropdownItem>
                      <DropdownItem key="system">System</DropdownItem>
                      <DropdownItem key="configurations">
                        Configurations
                      </DropdownItem>
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
            </div>
          </div>
        </div>
      </header> */}

      <Menu />
    </>
  );
};

export default Home;
