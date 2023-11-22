import Image from "next/image";
import Link from "next/link";
import {
  RiDiscordFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill
} from "react-icons/ri";

import {useRouter} from "next/router";
import {lang} from "@lang/langT";


const Footer = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (
    <footer className="bg-black border-t-2 border-zinc-800  shadow  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className="sm:flex sm:items-center sm:justify-between">


          <div className="flex flex-col gap-2 items-center">
            <a href="#"
               className="flex items-center mb-4 sm:mb-0">

                <span
                  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Trader Edit
                </span>
            </a>
            <div className="social-links flex gap-4">
              <Link href={"#"}>
                <RiFacebookFill className={" text-zinc-300" +
                  " hover:text-blue-600 duration-300 hover:scale-110"}
                                fontSize={20}/>
              </Link>

              <Link href={"#"}>
                <RiInstagramFill className={" text-zinc-300" +
                  " hover:text-blue-600 duration-300 hover:scale-110"}
                                 fontSize={20}/>
              </Link>
              <Link href={"#"}>
                <RiTwitterXFill className={" text-zinc-300" +
                  " hover:text-blue-600 duration-300 hover:scale-110"}
                                fontSize={20}/>
              </Link>

              <Link href={"#"}>
                <RiDiscordFill className={" text-zinc-300" +
                  " hover:text-blue-600 duration-300 hover:scale-110"}
                               fontSize={20}/>
              </Link>

              <Link href={"#"}>
                <RiLinkedinBoxFill className={" text-zinc-300" +
                  " hover:text-blue-600 duration-300 hover:scale-110"}
                                   fontSize={20}/>
              </Link>


            </div>
          </div>
          <ul
            className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">

            <li>
              <Link href={"privacy-policy"}
                    className="hover:underline hover:text-blue-600 duration-300 ">{t.footer.privacyPolicy}</Link>
            </li>
            <li>
              <Link href={"cookie-preferences"}
                    className="hover:underline hover:text-blue-600 duration-300  ">{t.footer.cookiePreferences}</Link>
            </li>
            <li>
              <Link href={"terms-of-use"}
                    className="hover:underline hover:text-blue-600 duration-300">{t.footer.termsOfUse}</Link>
            </li>
            <li>
              <Link href={"contact"}
                    className="hover:underline hover:text-blue-600 duration-300">{t.footer.contact}</Link>
            </li>
          </ul>
        </div>
        <hr
          className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8"/>
        <div
          className="flex flex-col gap-8 items-center sm:flex-row justify-between">
            <span
              className="block text-sm text-zinc-500 sm:text-center dark:text-zinc-300">© 2023 <a
              href="#"
              className="hover:underline hover:text-blue-500"> - TraderEdit™ - </a>{t.footer.allRightsReserved}</span>

          <div className="flex gap-4">
            <Image src={"/visa.svg"} alt={"visa card logo"} width={38}
                   height={38}/>
            <Image src={"/mastercard.svg"} alt={"master card logo"} width={30}
                   height={30}/>
            <Image src={"/ae.svg"} alt={"ae card logo"} width={30}
                   height={30}/>
            <Image src={"/troy.svg"} alt={"paypal card logo"} width={38}
                   height={38}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;