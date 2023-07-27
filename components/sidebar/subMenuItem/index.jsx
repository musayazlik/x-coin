import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";

/** context */
import { useAppContext } from "@/context";

/** style */
import S from "../style.module.css";

const SubMenuItem = ({ text, url, Icon }) => {
  const { setIsOpenSidebar } = useAppContext();
  const { pathname } = useRouter();
  return (
    <Link href={url || "/"}>
      <li
        onClick={() => {
          setIsOpenSidebar(true);
        }}
        className={`${pathname === url ? "!text-yellow-500" : ""} ${
          S.menuSubItemText
        } py-1 pl-2 pr-4 `}
      >
        <BsDot className="inline-block mr-1" fontSize={20} />
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default SubMenuItem;
