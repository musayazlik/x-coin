import Swippers from "@components/swipper";
import EmptyData from "@components/emptyData";
import React from "react";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";

const PopularEducations = ({data}) => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (
    <>
      <div className={"container"}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-4xl font-semibold text-primary">
                {t.popular}
              </span>
              <h2
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {t.educations}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {t.popularEducationsText}
              </p>
            </div>
          </div>
        </div>

        <section
          className=" mb-8">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4 hover:border-l-[16px] duration-300" +
              " border-rose-700 px-6 bg-zinc-950 py-6 rounded"}>
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
          className=" mb-8 ">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4 hover:border-l-[16px] duration-300" +
              " border-rose-700 px-6 bg-zinc-950 py-6  rounded"}>
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
          className="  mb-8 ">

          <div className={"mb-4 "}>
            <h2 className={"text-white text-base md:text-2xl font-bold mb-4" +
              " border-l-4 hover:border-l-[16px] duration-300" +
              " border-rose-700 px-6 bg-zinc-950 py-6  rounded"}>
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

    </>
  )
}

export default PopularEducations;

