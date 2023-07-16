import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/router";

/** Style */
import S from "../style.module.css";
import { FiChevronRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const DropdownMenu = ({
  text,
  children,
  dropMenuStatus = false,
  subMenuList = [],
}) => {
  const { pathname } = useRouter();

  const isItem = subMenuList.includes(pathname);
  const [isOpen, setIsOpen] = useState(!isItem);
  return (
    <li className="mx-2 mb-2 ">
      <div className=" relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${S.menuItem} rounded-md cursor-pointer
						${
              pathname === "/"
                ? ""
                : `${S.menuDontActive}  ${S.menuNotActive} rounded-t-md
            `
            }
            flex justify-between items-center

            ${
              isOpen && dropMenuStatus
                ? "bg-zinc-900 border-2 border-transparent"
                : "border-2 border-b-yellow-500 border-zinc-950"
            }
						 `}
        >
          <div className=" flex items-center">
            <HiOutlineHome fontSize={20} className="inline-block mr-2 " />
            <p className={`duration-300 text-base font-medium `}>{text}</p>
          </div>
          {dropMenuStatus && (
            <FiChevronRight
              className={`duration-300 ${S.menuItemText} ${
                isOpen ? "rotate-0" : "rotate-90"
              } `}
              fontSize={20}
            />
          )}
        </div>

        <ul
          className={`duration-500 bg-zinc-900/50 rounded-md border-2 border-zinc-950/80   flex-col gap-1 ${
            dropMenuStatus ? "" : "hidden"
          }  ${S.menuSubItemText} 
          ${
            isOpen
              ? "h-0 invisible opacity-0"
              : " mt-2 h-fit visible py-2  opacity-100 "
          }

          
					`}
        >
          {children}
        </ul>
      </div>
    </li>
  );
};

export default DropdownMenu;
