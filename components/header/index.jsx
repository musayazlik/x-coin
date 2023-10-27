import React from "react";
import AvatarDropdown from "../avatarDropdown";
import LangDropdown from "../langDropdown";
import NotificationDropdown from "../notificationDropdown";
import {useAppContext} from "@/context";
import {Button} from "@nextui-org/react";

import {MdOutlineSsidChart, MdSettings} from "react-icons/md";
import {useRouter} from "next/router";
import {RiArrowLeftFill} from "react-icons/ri";
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
        className=" bg-zinc-900/80 border-2 border-zinc-950/50 h-full rounded-md shadow-lg shadow-zinc-950/20  flex justify-between items-center px-4 py-6  z-20 relative ">
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
                className="rounded"
                variant={pathname.includes("/analysis") ? "solid" : "ghost"}
                onClick={() =>
                  !pathname.includes("/analysis")
                    ? push("/analysis")
                    : push("/feed")
                }
              >
                <MdOutlineSsidChart fontSize={20}/>
                {t.analysis}
              </Button>
              <Button
                size="md"
                color={pathname.includes("/tools") ? "warning" : "default"}
                className="rounded"
                variant={pathname.includes("/tools") ? "solid" : "ghost"}
                onClick={() =>
                  !pathname.includes("/tools") ? push("/tools") : push("/feed")
                }
              >
                <MdSettings fontSize={20} className="animate-spin"/>
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
        <div className="right flex gap-4 items-center">
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
