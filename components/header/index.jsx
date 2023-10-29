import React from "react";
import AvatarDropdown from "../avatarDropdown";
import LangDropdown from "../langDropdown";
import NotificationDropdown from "../notificationDropdown";
import {useAppContext} from "@/context";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import {useRouter} from "next/router";
import {
  RiArrowLeftFill,
  RiGraduationCapLine,
  RiLineChartLine,
  RiListSettingsFill,
  RiSettings2Line,
} from "react-icons/ri";
import {lang} from "@lang/langT";

const Header = () => {
  const {setIsOpenSidebar} = useAppContext();
  const {push, locale, pathname} = useRouter();

  const t = lang(locale);

  return (
    <header
      className={`h-24 relative px-4 z-10 py-4 bg-zinc-800 duration-300 `}
    >
      <div
        className=" bg-zinc-900/80 border-2 border-zinc-950/50 h-full rounded-md shadow-lg shadow-zinc-950/20  flex justify-between items-center px-4 py-3 z-20 relative ">
        <div className={"w-full hidden lg:flex"}>
          {
            !pathname.includes("/dashboard") ? (
              <div className=" flex items-center gap-4">
                {
                  !pathname.includes("/feed") && (
                    <Button
                      size="md"
                      color="default"
                      className="rounded flex gap-3 pr-5"
                      variant="ghost"
                      onClick={() =>
                        push("/feed")
                      }
                    >
                      <RiArrowLeftFill fontSize={20}/>

                      {
                        t.homepage.menu.feed
                      }

                    </Button>
                  )
                }
                <Button
                  size="md"
                  color={pathname.includes("/analysis") ? "warning" : "default"}
                  className="rounded gap-2"
                  variant={pathname.includes("/analysis") ? "solid" : "ghost"}
                  onClick={() =>
                    !pathname.includes("/analysis")
                      ? push("/analysis")
                      : push("/feed")
                  }
                >
                  <RiLineChartLine fontSize={20}/>
                  {t.analysis}
                </Button>
                <Button
                  size="md"
                  color={pathname.includes("/education") ? "warning" : "default"}
                  className="rounded gap-2"
                  variant={pathname.includes("/education") ? "solid" : "ghost"}
                  onClick={() =>
                    !pathname.includes("/education")
                      ? push("/education")
                      : push("/feed")
                  }
                >
                  <RiGraduationCapLine fontSize={20}/>
                  {t.education}
                </Button>
                <Button
                  size="md"
                  color={pathname.includes("/tools") ? "warning" : "default"}
                  className="rounded gap-2"
                  variant={pathname.includes("/tools") ? "solid" : "ghost"}
                  onClick={() =>
                    !pathname.includes("/tools") ? push("/tools") : push("/feed")
                  }
                >
                  <RiSettings2Line fontSize={20} className="animate-spin"/>
                  {t.freeTools}
                </Button>
              </div>
            ) : (
              <div className=" flex items-center gap-4">
                <Button
                  size="md"
                  color="warning"
                  className="rounded flex gap-3 pr-5"
                  variant="ghost"
                  onClick={() =>
                    push("/feed")
                  }
                >
                  <RiArrowLeftFill fontSize={20}/>

                  {
                    t.homepage.menu.feed
                  }

                </Button>

              </div>
            )
          }
        </div>

        <div className={"w-full  lg:hidden"}>
          {
            pathname.includes("/dashboard") && !pathname.includes("/feed") && (
              <Button
                size="md"
                color="default"
                className="rounded flex gap-3 pr-5"
                variant="ghost"
                onClick={() =>
                  push("/feed")
                }
              >
                <RiArrowLeftFill fontSize={20}/>

                {
                  t.homepage.menu.feed
                }

              </Button>
            )
          }
          <Dropdown showArrow
                    classNames={{
                      base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                      arrow: "bg-default-200",
                    }}>
            <DropdownTrigger>
              <Button
                variant="bordered"
                isIconOnly={true}
              >
                <RiListSettingsFill fontSize={20} className={"text-zinc-500"}/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
                          variant={"solid"}
            >

              <DropdownItem key="feed"

                            onClick={() =>
                              push("/feed")
                            }
              >
                <div className={`flex gap-2 ${
                  pathname.includes("/feed") ? "text-yellow-500" : "text-zinc-500"
                }`}>
                  <RiArrowLeftFill fontSize={20}/>
                  {t.feed}
                </div>
              </DropdownItem>

              <DropdownItem key="analysis"
                            onClick={() =>
                              !pathname.includes("/analysis")
                                ? push("/analysis")
                                : push("/feed")
                            }
              >
                <div className={`flex gap-2 ${
                  pathname.includes("/analysis") ? "text-yellow-500" : "text-zinc-500"
                }`}>
                  <RiLineChartLine fontSize={20}/>
                  {t.analysis}
                </div>
              </DropdownItem>
              <DropdownItem key="education"

                            onClick={() =>
                              !pathname.includes("/education")
                                ? push("/education")
                                : push("/feed")
                            }
              >
                <div className={`flex gap-2 ${
                  pathname.includes("/education") ? "text-yellow-500" : "text-zinc-500"
                }`}>
                  <RiGraduationCapLine fontSize={20}/>
                  {t.education}
                </div>
              </DropdownItem>
              <DropdownItem key="tools"

                            onClick={() =>
                              !pathname.includes("/tools")
                                ? push("/tools")
                                : push("/feed")
                            }
              >
                <div className={`flex gap-2 ${
                  pathname.includes("/tools") ? "text-yellow-500" : "text-zinc-500"
                }`}>
                  <RiSettings2Line fontSize={20}/>
                  {t.freeTools}
                </div>
              </DropdownItem>


            </DropdownMenu>
          </Dropdown>
        </div>


        <div className="right flex gap-4 items-center flex-shrink-0">
          <div className="flag">
            <LangDropdown/>
          </div>
          <div className="flag">
            <NotificationDropdown/>
          </div>
          <div className="avatar">
            <AvatarDropdown/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
