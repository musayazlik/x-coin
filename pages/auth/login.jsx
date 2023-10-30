import React, {useEffect} from "react";
import {getSession, signIn} from "next-auth/react";
import Link from "next/link";
import {FiLock, FiUser} from "react-icons/fi";
import {useRouter} from "next/router";
import {lang} from "@/lang/langT";
import LangDropdown from "@/components/langDropdown";
import {toast} from "react-toastify";

/**
 * Styles
 */
import styles from "./authStyles.module.scss";

const Login = () => {
  const router = useRouter();
  const {locale} = router;
  const t = lang(locale);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const emailandusername = e.target.emailandusername.value;
    const password = e.target.password.value;

    signIn("credentials", {
      isData: emailandusername,
      password: password,
      callbackUrl: "/feed/",
    }).then((res) => {
      router.push("/feed/");
    }).catch((err) => {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
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
    <div
      className="min-w-full relative min-h-screen loginBackground text-white flex justify-center items-center">
      <div className={styles.wrapper}>
        <div className="mailLogin w-full sm:px-10">
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleEmailLogin}
          >
            <div className="input-group flex  items-center relative">
              <span className="input-group-addon absolute left-4">
                <FiUser fontSize={20} className=" text-zinc-500"/>
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
                <FiLock fontSize={20} className=" text-zinc-500"/>
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

        <div className="signIn text-xs sm:text-sm mt-6">
          <p
            className="flex sm:flex-row flex-col justify-center items-center gap-2">
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
          T
        </span>
        <div className=" flex-col gap-2 hidden sm:flex ">
          <span className="w-1 h-4 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
        </div>
        <div
          className=" flex-col items-center  text-2xl font-bold text-zinc-900 hidden sm:flex">
          <span>E</span>
          <span>D</span>
          <span>I</span>
          <span>T</span>
        </div>
      </div>

      <div className="langDropdown fixed top-4 right-4 z-50 ">
        <LangDropdown/>
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
        destination: "/feed/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
