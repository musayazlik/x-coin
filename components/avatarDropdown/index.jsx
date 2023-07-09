import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="relative">
        <img
          className="w-8 h-8 p-1 rounded-full ring-2 hover:shadow-lg shadow-yellow-400/60 hover:ring-yellow-400 duration-300 ring-zinc-500 cursor-pointer"
          src="/robot.gif"
          alt="Bordered avatar"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        {isOpen && (
          <>
            <div
              className={`absolute z-20 border-b-4 before:w-full before:h-2 before:block before:bg-yellow-400/50 before:-bottom-2 before:z-0 before:rounded-md before:blur-[6px] before:absolute border-b-yellow-400  right-0 w-48 bg-zinc-800 rounded-md py-1 border-2 border-zinc-950 duration-300 ${
                isOpen ? "top-12" : "top-0"
              }`}
            >
              <div className="authInformation text-zinc-500 px-4 py-2 text-sm">
                <p>
                  Hello, <span className="font-extrabold">John Doe</span>
                </p>
                <p className="text-xs">0xdft5hgfgrtvb....</p>
              </div>
              <Link
                href="/account/profile"
                className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white"
              >
                Account settings
              </Link>
              <Link
                href="/account/support"
                className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white"
              >
                Support
              </Link>
              <button
                className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white w-full text-start"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
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

export default AvatarDropdown;
