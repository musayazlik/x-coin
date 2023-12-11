import React from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";
import axios from "axios";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";

import Swippers from "@components/swipper";
import EmptyData from "components/emptyData";


const Dax = ({
               data
             }) => {
  const {isServiceLoading, setIsServiceLoading} = useAppContext();
  const {locale} = useRouter();
  const t = lang(locale);


  return (
    <Layout>
      <div className=" mt-12">

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

export default Dax;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/education?category=dax&limit=16&page=1`,
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
