import React, {memo} from "react";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {BsCurrencyDollar} from "react-icons/bs";
import {FiSettings, FiUser} from "react-icons/fi";
import {BiExit, BiHelpCircle} from "react-icons/bi";
import {useRouter} from "next/router";
import {lang} from "@/lang/langT";

const AvatarDropdown = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  const [isOpen, setIsOpen] = React.useState(false);
  const {data: session} = useSession();
  return (
    <>
      <div className="relative">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            className="w-8 h-8 p-1 rounded-full ring-2 hover:shadow-lg shadow-yellow-400/60 hover:ring-yellow-400 duration-300 ring-zinc-500 cursor-pointer object-cover"
            src={session?.user?.image || "/avatars/avatar7.png"}
            alt="Bordered avatar"
          />
        </div>

        <div
          className={`absolute z-50 border-b-4 before:w-full before:h-2 before:block before:bg-yellow-400/50 before:-bottom-2 before:z-0 before:rounded-md before:blur-[6px] before:absolute border-b-yellow-400  right-0 w-48 bg-zinc-800 rounded-md py-1 border-2 border-zinc-950 duration-300 ease-in-out ${
            isOpen
              ? "top-14 opacity-100"
              : "top-20 opacity-0 pointer-events-none"
          }`}
        >
          <div className="authInformation text-zinc-500 px-4 py-2 text-sm">
            <p className="whitespace-nowrap text-ellipsis overflow-hidden">
              {t.profileDropdown.hello},{" "}
              <span className="font-extrabold whitespace-nowrap">
                {session?.user?.name} !
              </span>
            </p>
            <p
              className="text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
              {session?.user?.walletAddress
                ? session?.user?.walletAddress
                : session?.user?.email}
            </p>
          </div>
          <div className="border-b border-zinc-950"></div>
          {session && session.user.role === "admin" && (
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white"
            >
              <FiSettings className="inline-block mr-2"/>
              {t.profileDropdown.dashboard}
            </Link>
          )}

          <div className="">
            <Link
              href="/feed/pricing"
              className="block px-4 py-2 text-sm border bg-indigo-700/80 border-indigo-600 duration-300 hover:bg-indigo-700 hover:text-white bg-inborder-indigo-500 border-s-0 border-e-0 text-indigo-200"
            >
              <BsCurrencyDollar className="inline-block mr-1" fontSize={16}/>
              {t.profileDropdown.pricing}
            </Link>
          </div>
          <Link
            href="/feed/profile"
            className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white"
          >
            <FiUser className="inline-block mr-2"/>
            {t.profileDropdown.profile}
          </Link>
          <Link
            href="/feed/support"
            className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white"
          >
            <BiHelpCircle className="inline-block mr-2" fontSize={16}/>
            {t.profileDropdown.support}
          </Link>

          <button
            className="block px-4 py-2 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white w-full text-start"
            onClick={() => {
              signOut();
            }}
          >
            <BiExit className="inline-block mr-2" fontSize={16}/>
            {t.profileDropdown.signout}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute -top-5 right-0 w-screen h-screen bg-transparent z-10 rounded-md shadow-lg py-1"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default memo(AvatarDropdown);
