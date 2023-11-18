import Menu from "@/components/menü";
import {Button} from "@nextui-org/react";
import {RiArrowRightDoubleFill} from "react-icons/ri";
import Image from "next/image";
import {useRouter} from "next/router";
import {lang} from "@/lang/langT";
import Link from "next/link";
import {BiBitcoin} from "react-icons/bi";
import {BsFillBookmarkCheckFill} from "react-icons/bs";
import {FiChevronRight} from "react-icons/fi";
import Pricing from "@components/homeSections/Pricing";
import Stats from "@components/homeSections/stats";
import Teams from "@components/homeSections/Teams";


const Home = () => {
  const {push, locale} = useRouter();

  const t = lang(locale);

  return (
    <>
      <Menu/>

      <section className={"py-16 min-h-screen"}>
        <div className="xl:container">
          <div className=" py-20 lg:py-0 flex flex-col lg:flex-row gap-6 ">
            <div className={" lg:py-40 flex flex-col gap-4 w-full" +
              " lg:w-1/2"}>
              {
                locale === "tr" ? (
                  <h2 className={"mb-4"}>
                    <div
                      className=" text-center lg:text-start font-extrabold text-2xl sm:text-4xl xl:text-5xl">
                      <span className="text-yellow-600">Trader Edit</span> '
                      e {' '}
                      Hoşgeldiniz...
                    </div>
                  </h2>
                ) : (
                  <h2 className={"mb-4"}>
                    <div
                      className=" text-center lg:text-start font-extrabold  text-2xl sm:text-4xl xl:text-5xl">
                      Welcome to {' '}
                      <span className="text-yellow-600">Trader Edit...</span>
                    </div>
                  </h2>
                )
              }


              <p className={" text-sm sm:text-lg mb-8 text-center" +
                " lg:text-start" +
                " text-zinc-400"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, autem consectetur delectus eaque et eum eveniet iure
                iusto minus nostrum perspiciatis provident.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Button color={"warning"} variant={"bordered"}
                        className={" text-base sm:text-xl rounded pr-8 py-7"}
                        onClick={() => {
                          push("/auth/register")
                        }}
                >
                  <RiArrowRightDoubleFill fontSize={26}/>
                  <span> Get Started</span>

                </Button>
              </div>
            </div>
            <div className={"flex justify-center items-center relative" +
              " w-full min-h-[400px] sm:min-h-[600px]" +
              " lg:w-1/2"}>
              <Image src={"/Home.png"} alt={"animation"} fill
                     className={" object-cover sm:object-contain"}/>
            </div>
          </div>
        </div>
      </section>

      <Stats/>

      <section className={"bg-black py-24 "}>
        <div className="xl:container px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div
              className=" w-full lg:w-4/12 relative max-w-lg mx-auto min-h-[60vw] sm:min-h-[420px] object-cover">
              <Image src={"/homImage1.jpg"} alt={"image"} fill
                     className={"object-cover rounded-3xl"}/>
            </div>
            <div
              className=" w-full lg:w-8/12 flex flex-col justify-center pt-8">
              <h3 className={"font-bold text-2xl md:text-4xl mb-4 flex" +
                " items-center"}>
                <BiBitcoin
                  className={"inline-block mr-1 text-yellow-500 animate-bounce"}
                  fontSize={48}/>
                Borsa ve kripto paralar
              </h3>
              <p
                className={"text-sm sm:text-base leading-5 sm:leading-6 font-light" +
                  " text-zinc-300" +
                  " mb-8"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, autem consectetur delectus eaque et eum eveniet iure
                iusto minus nostrum perspiciatis provident.
              </p>

              <ul className={"flex flex-col sm:flex-row gap-6 mb-12"}>

                <div className={"space-y-4 sm:space-y-8 "}>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </div>

                <div className={"space-y-4 sm:space-y-8"}>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li className={"flex gap-2 text-xs sm:text-base"}>
                    <BsFillBookmarkCheckFill color={"#F59E0B"} fontSize={24}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </div>
              </ul>

              <Link href="/analysis/blockchain/bitcoin"
                    className={"flex text-sm sm:text-base items-center" +
                      " text-blue-600 duration-300" +
                      " hover:text-blue-500"}>

                Daha fazla bilgi için tıklayınız
                <FiChevronRight fontSize={20} className={"inline-block ml-1"}/>
              </Link>

            </div>
          </div>
        </div>
      </section>

      <Pricing/>

      <Teams/>
      <footer className="bg-black border-t-2 border-zinc-800  shadow  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#"
               className="flex items-center mb-4 sm:mb-0">

                <span
                  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Trader Edit
                </span>
            </a>
            <ul
              className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-zinc-400">
              <li>
                <a href="#"
                   className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy
                  Policy</a>
              </li>
              <li>
                <a href="#"
                   className="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr
            className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8"/>
          <span
            className="block text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a
            href="#"
            className="hover:underline">TraderEdit™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </>
  );
};

export default Home;
