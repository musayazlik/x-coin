import React from "react";
import Image from "next/image";

const LangDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [lang, setLang] = React.useState("tr");
  return (
    <>
      <div className="relative">
        <button
          className="w-8 h-8 p-1 rounded-full hover:scale-110 duration-200 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {lang === "tr" ? (
            <Image
              src="/turkish.png"
              alt="tr"
              width={28}
              height={28}
              className="inline-block border-2 border-red-600 rounded-full shadow-md shadow-red-600/50"
            />
          ) : (
            <Image
              src="/united-states.png"
              alt="tr"
              width={28}
              height={28}
              className="inline-block border-indigo-600 border-2 rounded-full shadow-md shadow-indigo-600/50"
            />
          )}
        </button>

        {isOpen && (
          <>
            <div
              className={`absolute z-20 border-b-4 before:w-full before:h-2 before:block before:bg-yellow-400/50 before:-bottom-2 before:z-0 before:rounded-md before:blur-[6px] before:absolute border-b-yellow-400  right-0 w-48 bg-zinc-800 rounded-md py-1 border-2 border-zinc-950 duration-300 ${
                isOpen ? "top-12" : "top-0"
              }`}
            >
              <a
                href="#"
                className="flex px-4 py-2.5 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white gap-3"
                onClick={() => {
                  setLang("tr");
                  setIsOpen(false);
                }}
              >
                <Image
                  src="/turkish.png"
                  alt="tr"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                Turkish
              </a>
              <a
                href="#"
                className="flex px-4 py-2.5 text-sm text-zinc-200 duration-300 hover:bg-indigo-600 hover:text-white gap-3 "
                onClick={() => {
                  setLang("en");
                  setIsOpen(false);
                }}
              >
                <Image
                  src="/united-states.png"
                  alt="en"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                English
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

export default LangDropdown;
