import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";

/** context */
import { useAppContext } from "@/context";

/** style */
import S from "../style.module.css";

const SubMenuItem = ({ text, url, Icon, children }) => {
  const { setIsOpenSidebar } = useAppContext();
  const { pathname } = useRouter();
  return (
    <Link href={url || "/"}>
      <li
        onClick={() => {
          setIsOpenSidebar(true);
        }}
        className={`${pathname.includes(url) ? "!text-yellow-500" : ""} ${
          S.menuSubItemText
        } py-1  pr-4 `}
      >
        <div className=" flex flex-col">
          <div className="flex">
            <BsDot className="inline-block mr-1" fontSize={20} />
            <p className="inline-block capitalize text-zinc-300">{text}</p>
          </div>
          <div className="ml-3">{children}</div>
        </div>
      </li>
    </Link>
  );
};

export default SubMenuItem;
