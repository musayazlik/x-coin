import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";

/** style */
import S from "../style.module.css";

const SubMenuItem = ({ text, url, Icon }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url || "/"}>
      <li
        className={`${pathname === url ? "text-yellow-500" : ""} ${
          S.menuSubItemText
        } py-1 pl-2 pr-4 `}
      >
        <BsDot className="inline-block mr-1" fontSize={20} />
        {text}
      </li>
    </Link>
  );
};

export default SubMenuItem;
