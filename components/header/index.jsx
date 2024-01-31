import React, { memo } from "react";
import AvatarDropdown from "../avatarDropdown";
import LangDropdown from "../langDropdown";
import { useAppContext } from "@/context";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import {
  RiArrowLeftSLine,
  RiBarChartBoxLine,
  RiFilter2Fill,
  RiGraduationCapLine,
  RiLineChartLine,
  RiMenu5Line,
  RiSettings2Line,
} from "react-icons/ri";
import { lang } from "@lang/langT";
import Basket from "@components/basket";

const Header = () => {
  const { setIsOpenSidebar } = useAppContext();
  const { push, locale, pathname } = useRouter();

  const t = lang(locale);

  return (
    <header
      className={`h-24 relative px-4 z-10 py-4 bg-zinc-800 duration-300 `}
    >
      <div className=" bg-zinc-900/80 border-2 border-zinc-950/50 h-full rounded-md shadow-lg shadow-zinc-950/20  flex justify-between items-center px-4 py-3 z-20 relative ">
        <div className="left flex items-center flex-shrink-0">
          <div className={"flex "}>
            <div className={"w-full "}>
              <div className=" flex items-center gap-4">
                <Dropdown
                  showArrow
                  classNames={{
                    base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    arrow: "bg-default-200",
                  }}
                >
                  <DropdownTrigger className={"lg:hidden"}>
                    <Button
                      variant="bordered"
                      isIconOnly={true}
                      color="default"
                      className="rounded mr-4"
                    >
                      <RiFilter2Fill
                        fontSize={20}
                        className={"text-zinc-500"}
                      />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions" variant={"solid"}>
                    <DropdownItem
                      key="analysis"
                      onClick={() =>
                        !pathname.includes("/analysis")
                          ? push("/analysis")
                          : push("/feed")
                      }
                    >
                      <div
                        className={`flex gap-2 ${
                          pathname.includes("/analysis")
                            ? "text-yellow-500"
                            : "text-zinc-500"
                        }`}
                      >
                        <RiLineChartLine fontSize={20} />
                        {t.analysis}
                      </div>
                    </DropdownItem>
                    <DropdownItem
                      key="education"
                      onClick={() =>
                        !pathname.includes("/education")
                          ? push("/education")
                          : push("/feed")
                      }
                    >
                      <div
                        className={`flex gap-2 ${
                          pathname.includes("/education")
                            ? "text-yellow-500"
                            : "text-zinc-500"
                        }`}
                      >
                        <RiGraduationCapLine fontSize={20} />
                        {t.education}
                      </div>
                    </DropdownItem>
                    <DropdownItem
                      key="tools"
                      onClick={() =>
                        !pathname.includes("/tools")
                          ? push("/tools")
                          : push("/feed")
                      }
                    >
                      <div
                        className={`flex gap-2 ${
                          pathname.includes("/tools")
                            ? "text-yellow-500"
                            : "text-zinc-500"
                        }`}
                      >
                        <RiSettings2Line fontSize={20} />
                        {t.freeTools}
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <div className="hidden lg:flex gap-4">
                  <Button
                    size="md"
                    color={
                      pathname.includes("/analysis") ? "warning" : "default"
                    }
                    className="rounded gap-2"
                    variant={pathname.includes("/analysis") ? "solid" : "ghost"}
                    onClick={() =>
                      !pathname.includes("/analysis")
                        ? push("/analysis")
                        : push("/feed")
                    }
                  >
                    <RiBarChartBoxLine fontSize={20} />
                    {t.analytics.title}
                  </Button>
                  <Button
                    size="md"
                    color={
                      pathname.includes("/education") ? "warning" : "default"
                    }
                    className="rounded gap-2"
                    variant={
                      pathname.includes("/education") ? "solid" : "ghost"
                    }
                    onClick={() =>
                      !pathname.includes("/education")
                        ? push("/education")
                        : push("/feed")
                    }
                  >
                    <RiGraduationCapLine fontSize={20} />
                    {t.education}
                  </Button>
                  <Button
                    size="md"
                    color={pathname.includes("/tools") ? "warning" : "default"}
                    className="rounded gap-2"
                    variant={pathname.includes("/tools") ? "solid" : "ghost"}
                    onClick={() =>
                      !pathname.includes("/tools")
                        ? push("/tools")
                        : push("/feed")
                    }
                  >
                    <RiSettings2Line fontSize={20} className="animate-spin" />
                    {t.freeTools}
                  </Button>
                </div>
              </div>
            </div>

            <Button
              size="md"
              color="warning"
              className="rounded flex md:hidden"
              variant="ghost"
              isIconOnly={true}
              onClick={() => setIsOpenSidebar(false)}
            >
              <RiMenu5Line fontSize={20} />
            </Button>
          </div>
        </div>

        <div className="right flex gap-2 items-center flex-shrink-0">
          <div>
            <Basket />
          </div>
          <div className="flag">
            <LangDropdown />
          </div>
          {/*<div className="flag">
            <NotificationDropdown/>
          </div>*/}
          <div className="avatar">
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
