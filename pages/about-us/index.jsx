import Head from "next/head";
import Menu from "@components/menü";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import Teams from "@components/homeSections/Teams";
import {
  RiDraftLine,
  RiGroupLine,
  RiMailUnreadLine,
  RiTimeLine,
  RiUserLine
} from "react-icons/ri";
import Footer from "@components/footer";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const AboutUs = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (


    <>
      <Head>
        <title>Trader Edit | {t.aboutUsPage.title}</title>
        <meta name="description" content={t.aboutUsPage.description}/>
        <meta name="keywords"
              content={t.aboutUsPage.keywords}/>
        <meta name="author" content="Trader Edit"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#000000"/>

        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Menu/>

      <section
        className="container py-16 bg-zinc-950  relative z-10 ">
        <div className=" py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
            <span
              className="text-sm text-zinc-600 uppercase dark:text-zinc-400">
              Who we are?
            </span>
                  <h1
                    className="mt-2 text-3xl font-black text-zinc-700 md:text-5xl dark:text-zinc-300">
                    About Us
                  </h1>
                </div>
                <p
                  className="px-4 mb-10 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim
                  ad minim veniam Lorem ipsum dolor sit amet.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-zinc-900">
                <span className="text-blue-500 dark:text-blue-400">
                <RiDraftLine className={" text-blue-600 "} fontSize={40}/>
                </span>
                      <p
                        className="mt-4 mb-2 text-3xl font-bold text-zinc-700 dark:text-zinc-400">
                        2097
                      </p>
                      <h2 className="text-sm text-zinc-700 dark:text-zinc-400">
                        Projects and Plans
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-zinc-900">
                <span className="text-blue-500 dark:text-blue-400">
                 <RiGroupLine className={" text-blue-600 "} fontSize={40}/>
                </span>
                      <p
                        className="mt-4 mb-2 text-3xl font-bold text-zinc-700 dark:text-zinc-400">
                        3,590
                      </p>
                      <h2 className="text-sm text-zinc-700 dark:text-zinc-400">
                        Helped people
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-zinc-900">
                <span className="text-blue-500 dark:text-blue-400">
                  <RiUserLine className={" text-blue-600 "} fontSize={40}/>
                </span>
                      <p
                        className="mt-4 mb-2 text-3xl font-bold text-zinc-700 dark:text-zinc-400">
                        74
                      </p>
                      <h2 className="text-sm text-zinc-700 dark:text-zinc-400">
                        Volunteer
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-zinc-900">
                <span className="text-blue-500 dark:text-blue-400">
                  <RiTimeLine className={" text-blue-600 "} fontSize={40}/>
                </span>
                      <p
                        className="mt-4 mb-2 text-3xl font-bold text-zinc-700 dark:text-zinc-400">
                        100
                      </p>
                      <h2 className="text-sm text-zinc-700 dark:text-zinc-400">
                        Timing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="/about_us.svg"
                alt="about us "
                className="relative z-40 object-contain  w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <Teams/>

      <section
        className={" pt-40 pb-60 flex items-center justify-center" +
          " bg-zinc-900"}>
        <div className="container flex flex-col items-center justify-center">

          <RiMailUnreadLine className={" text-blue-600  mb-12 text-5xl" +
            " border-2 border-zinc-800 p-4 box-content rounded-xl shadow-lg" +
            " shadow-black/50" +
            " md:text-7xl"}
          />

          <h2
            className={"text-center font-bold text-6xl mb-14"}>{t.aboutUsPage.contactUs}</h2>
          <p className={"font-medium text-2xl text-zinc-300 mb-14"}>
            {t.aboutUsPage.contactUsText}
          </p>

          <Link href={"/contact"}>
            <Button variant={"bordered"} color={"default"} size={"lg"}
                    className={"rounded hover:bg-blue-700 text-xl py-8 px-10 " +
                      " hover:shadow-xl hover:shadow-blue-700/50" +
                      " hover:border-blue-900 hover:scale-110 duration-300"}>
              {t.aboutUsPage.button}
            </Button>
          </Link>

        </div>


      </section>

      <Footer/>


    </>


  )
}

export default AboutUs