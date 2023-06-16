import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/router";

/** Style */
import S from "../style.module.css";
import { FiChevronRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const DropdownMenu = ({ text, children, dropMenuStatus = false }) => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="mx-2 ">
      <div className=" relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${S.menuItem} rounded-md cursor-pointer
						${
              pathname === "/"
                ? S.menuActive
                : `${S.menuDontActive}  ${S.menuNotActive} rounded-t-md
            `
            }
            flex justify-between items-center

            ${
              isOpen
                ? "bg-zinc-900 border-2 border-transparent"
                : "border-2 border-b-yellow-500 border-zinc-950"
            }

            
						
						 `}
        >
          <div className=" flex items-center">
            <HiOutlineHome fontSize={20} className="inline-block mr-2 " />
            <span className={`duration-300 `}>{text}</span>
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
          className={`duration-500 bg-zinc-900/50 rounded-md  flex-col gap-1 ${
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
