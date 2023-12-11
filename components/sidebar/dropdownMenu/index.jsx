import React, {useState} from "react";
import {useRouter} from "next/router";

/** Style */
import S from "../style.module.css";
import {FiChevronRight} from "react-icons/fi";

const DropdownMenu = ({
                        text,
                        children,
                        dropMenuStatus = false,
                        subMenuList = [],
                        Icon,
                        defaultOpen = false,
                      }) => {
  const {pathname} = useRouter();

  const pathData = null

  const isItem = subMenuList.includes(pathname);
  const [isOpen, setIsOpen] = useState(defaultOpen ? !defaultOpen : !isItem);

  return (
    <li className="mx-2 overflow-hidden ">
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
              ? "bg-zinc-900 border-2 border-zinc-900"
              : "border-2 border-b-yellow-500 border-zinc-950"
          }
						 `}
        >
          <div className=" flex items-center">
            <Icon fontSize={20} className="inline-block mr-2 "/>
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
          className={`duration-500 overflow-hidden bg-zinc-900/50 rounded-md border-2 border-zinc-950/80 flex-col ${
            dropMenuStatus ? "" : "hidden"
          }  ${S.menuSubItemText} 
          ${
            isOpen
              ? "h-0 invisible opacity-0 overflow-hidden"
              : " mt-2 h-fit visible  opacity-100 "
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
