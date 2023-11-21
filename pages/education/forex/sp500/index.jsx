import React from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";
import {Button} from "@nextui-org/react";
import axios from "axios";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import {PiGraduationCapDuotone} from "react-icons/pi";

import Swippers from "@components/swipper";
import EmptyData from "components/emptyData";


const Sp500 = ({
                 data
               }) => {
  const {isServiceLoading, setIsServiceLoading} = useAppContext();
  const {locale} = useRouter();
  const t = lang(locale);


  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center  ">
          <h1
            className=" flex flex-col mb-4">
            <div>
              <Button isIconOnly color="warning" variant="faded"
                      aria-label="sdfdf" className={"p-1 w-16 mb-4 h-16"}>
                <PiGraduationCapDuotone fontSize={120}/>
              </Button>
            </div>
            <span
              className={"text-white mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"}>Sp500</span>
            <span
              className={"text-3xl text-yellow-500 font-bold "}>{
              t.education
            }</span>
          </h1>
          <p
            className=" text-sm sm:text-base text-gray-200 font-normal max-w-4xl mx-auto">
            {t.educationText}
          </p>
        </div>

        <section
          className=" mb-8 sm:px-4 px-2">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4" +
              " border-rose-700 px-4 bg-zinc-900 py-3 rounded"}>
              {t.freeTrainings}
            </h2>
          </div>

          {data.freeTrainings.length > 0 ? (
            <Swippers data={data.freeTrainings}
                      path={"/education/blockchain/bitcoin/"}/>
          ) : (
            <EmptyData/>
          )}


        </section>

        <section
          className=" mb-8 sm:px-4 px-2">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4" +
              " border-rose-700 px-4 bg-zinc-900 py-3 rounded"}>
              {t.paidTrainings}
            </h2>
          </div>

          {data.paidTrainings.length > 0 ? (
            <Swippers data={data.paidTrainings}
                      path={"/education/blockchain/bitcoin/"}/>
          ) : (
            <EmptyData/>
          )}


        </section>

        <section
          className="  mb-8 sm:px-4 px-2 ">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4" +
              " border-rose-700 px-4 bg-zinc-900 py-3 rounded"}>
              {t.liveTrainings}
            </h2>
          </div>

          {data.liveTrainings.length > 0 ? (
            <Swippers data={data.liveTrainings}
                      path={"/education/blockchain/bitcoin/"}/>
          ) : (
            <EmptyData/>
          )}


        </section>
      </div>
    </Layout>
  );
};

export default Sp500;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/education?category=sp500&limit=16&page=1`,
    {
      headers: {
        cookie: cookie,
      },
    }
  );


  return {
    props: {
      data: data.data,
    },
  };
}
