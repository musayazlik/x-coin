import React, { useEffect } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { connectMetamask } from "@/services/metamaskConnect";
import Link from "next/link";
import { FiUser, FiLock } from "react-icons/fi";
import { useRouter } from "next/router";
import { lang } from "@/lang/langT";
import LangDropdown from "@/components/langDropdown";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const { locale } = router;
  const t = lang(locale);

  const handleMetamaskLogin = async () => {
    const address = await connectMetamask();
    if (address) {
      signIn("credentials", {
        walletAddress: address,
        callbackUrl: "/",
      });
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const emailandusername = e.target.emailandusername.value;
    const password = e.target.password.value;

    signIn("credentials", {
      isData: emailandusername,
      password: password,
      callbackUrl: "/",
    });
  };

  useEffect(() => {
    if (router.query.error) {
      toast.error(router.query.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
  }, []);

  return (
    <div className="min-w-full relative min-h-screen loginBackground text-white flex justify-center items-center">
      <div className="wrapper relative focus:border-b-yellow-400 duration-300 hover:border-b-yellow-400 hover:before:w-full hover:before:h-2 hover:before:block hover:before:bg-yellow-400/50 hover:before:-bottom-2 hover:before:z-0 hover:before:rounded-md hover:before:blur-[6px] hover:before:absolute border-b-4 border-2 rounded-sm border-zinc-800 h-auto  px-4 sm:px-8 flex flex-col items-center py-3 sm:py-6 w-full max-w-lg z-10 bg-zinc-950 gap-6 shadow-xl sm:shadow-zinc-950 shadow-zinc-950/30 mx-4">
        <div className="mailLogin w-full sm:px-10">
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleEmailLogin}
          >
            <div className="input-group flex  items-center relative">
              <span className="input-group-addon absolute left-4">
                <FiUser fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="text"
                name="emailandusername"
                id="emailandusername"
                placeholder={t.loginPage.emailorusername}
                className="border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="input-group flex  items-center relative">
              <span className="input-group-addon absolute left-4">
                <FiLock fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder={t.loginPage.password}
                className="border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>
            <button
              type="submit"
              className="border-zinc-700 border-2 hover:border-blue-900 text-white font-semibold rounded-md px-4 py-3 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/50 duration-300"
            >
              {t.loginPage.login}
            </button>
          </form>
        </div>
        <div className="or flex flex-col items-center ">
          <span className="h-6 w-0.5 inline-block bg-zinc-700"></span>
          <span className="text-sm text-gray-400 font-semibold">{t.or}</span>
          <span className="h-6 w-0.5 inline-block bg-zinc-700"></span>
        </div>
        <div
          onClick={handleMetamaskLogin}
          className="metemask rounded-md border-b-4 w-full sm:w-auto justify-center  border-orange-600 px-4 sm:px-8 py-2 bg-orange-500 inline-flex  gap-3 sm:gap-6 items-center hover:shadow-lg hover:shadow-orange-600/50 duration-300 hover:scale-105 cursor-pointer"
        >
          <Image
            src="/metamask.svg"
            alt="metamask"
            width={40}
            height={40}
            className="bg-white p-1 rounded-full border-2 border-orange-700 shadow-lg shadow-orange-700/70"
          />
          <span className=" text-sm sm:text-xl font-semibold text-orange-900 mt-0.5">
            {t.loginPage.metamaskLogin}
          </span>
        </div>
        <div className="signIn text-xs sm:text-sm mt-6">
          <p className="flex sm:flex-row flex-col justify-center items-center gap-2">
            {t.loginPage.dontHaveAccount}
            <Link
              href={"/auth/register"}
              className="font-extrabold  cursor-pointer hover:text-yellow-400"
            >
              {t.loginPage.signUpFree}
            </Link>
          </p>
        </div>
      </div>
      <div
        className="fixedLeft absolute
       h-full bg-yellow-400/80 left-0 py-4 flex items-center  flex-col gap-4 min-w-[80px]"
      >
        <span className="font-bold text-5xl px-4 text-zinc-800 hidden sm:flex ">
          X
        </span>
        <div className=" flex-col gap-2 hidden sm:flex ">
          <span className="w-1 h-4 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
        </div>
        <div className=" flex-col items-center  text-2xl font-bold text-zinc-900 hidden sm:flex">
          <span>C</span>
          <span>O</span>
          <span>I</span>
          <span>N</span>
        </div>
      </div>

      <div className="langDropdown fixed top-4 right-4 ">
        <LangDropdown />
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
