import React from "react";
import Image from "next/image";
import { BiBell } from "react-icons/bi";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [lang, setLang] = React.useState("tr");
  return (
    <>
      <div className="relative">
        <button
          className="w-8 h-8 p-1 rounded-full relative hover:scale-110 duration-200"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BiBell className=" text-zinc-500" fontSize={24} />
          <span className="w-2 h-2 rounded-full shadow-md shadow-emerald-400/80 border border-emerald-700 animate-ping absolute block bg-emerald-500 top-1 right-1 "></span>
        </button>

        {isOpen && (
          <>
            <div
              className={`absolute z-20 border-b-4 before:w-full before:h-2 before:block before:bg-yellow-400/50 before:-bottom-2 before:z-0 before:rounded-md before:blur-[6px] before:absolute border-b-yellow-400 top-14 right-0 w-48 bg-zinc-800 rounded-md py-1 border-2 border-zinc-950 duration-300  ${
                isOpen ? "top-12" : "top-0"
              }`}
            >
              <a
                href="#"
                className="flex px-4 py-2.5 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white gap-3 border-b-2 last:border-0 border-zinc-700"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p>
                  <span className="font-semibold">John Doe</span> liked your
                  collection
                </p>
              </a>
              <a
                href="#"
                className="flex px-4 py-2.5 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white gap-3 border-b-2 last:border-0  border-zinc-700"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p>
                  <span className="font-semibold">John Doe</span> liked your
                  collection
                </p>
              </a>
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <div
          className="absolute top-0 right-0 w-screen h-screen bg-transparent z-10 rounded-md shadow-lg py-1"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default NotificationDropdown;
