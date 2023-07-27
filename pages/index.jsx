import Layout from "./layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { lang } from "@/lang/langT";
import parse from "html-react-parser";

const SpotMarket = () => {
  const { data: session, status } = useSession();
  const { locale } = useRouter();
  const t = lang(locale);

  return (
    <>
      <Layout className=" bg-zinc-950 flex">
        <div className=" flex justify-center flex-col w-full items-center my-12">
          {parse(t.home.welcome)}
          <p className=" text-base lg:text-lg font-normal text-gray-400 mt-4 text-center max-w-3xl">
            {t.home.subText}
          </p>

          <div className=" flex flex-col lg:flex-row gap-4 mt-12 min-w-full max-w-2xl relative h-[400px]">
            <Image src="/home-picture.svg" alt="Home Picture" fill />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SpotMarket;
