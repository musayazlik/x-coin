import React from "react";

/** style */
import S from "../style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ text, url, Icon }) => {
  const { pathname } = useRouter();

  return (
    <li className=" mx-2">
      <Link href={url || "/"} className=" relative">
        <div
          className={`${S.menuItem} rounded-md cursor-pointer

						${
              pathname === url || pathname === url + "/[slug]"
                ? " border-2 border-b-yellow-500 border-zinc-950"
                : "bg-zinc-900 border-2 border-transparent"
            }

				 `}
        >
          <div className=" flex items-center">
            <Icon fontSize={20} className="inline-block mr-2 " />
            <span className={`duration-300 `}>{text}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
