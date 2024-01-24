import React from "react";
import Layout from "@/layouts/homeLayout";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { lang } from "@/lang/langT";
import { useRouter } from "next/router";

const BreakAndIncom = ({ data }) => {
  const { locale } = useRouter();
  const t = lang(locale);
  return (
    <>
      <Head>
        <title>{t.alarms} | TraderEdit™</title>
        <meta
          name="description"
          content="Kırılımlar ve Uyumsuzluklar, kullanıcıların düşüncelerini ve fikirlerini dünyayla paylaşmalarını sağlayan merkezi olmayan bir sosyal medya platformudur. Kullanıcıların düşünce ve fikirlerini dünya ile paylaşabilecekleri bir platformdur."
        />
        <meta
          name="keywords"
          content="Kırılımlar ve Uyumsuzluklar, kırılımlar ve uyumsuzluklar, kırılımlar, uyumsuzluklar, Kırılımlar, Uyumsuzluklar, kırılımlar ve uyumsuzluklar, Kırılımlar ve Uyumsuzluklar, kırılımlar ve uyumsuzluklar, Kırılımlar ve uyumsuzluklar"
        />
      </Head>

      <Layout>
        <div className=" mx-auto mb-8 mt-8 text-center relative z-0 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
            <span className="text-indigo-600">{t.alarms}</span>
          </h1>
          <p className="text-base text-gray-500 font-light mb-2">
            {t.alarmsDescription}
          </p>
        </div>

        <div className="flex flex-col gap-4  pb-10">
          {data.length >= 1 && (
            <div className="card w-full bg-zinc-900 px-4  rounded-xl py-4">
              <div className="cardHeader h-[300px] rounded-lg">
                <img
                  src={data[0].thumbnail}
                  alt=""
                  className="w-full object-cover h-full rounded-lg"
                />
              </div>
              <div className="cardBody">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <div className="flex flex-col  mt-4 w-full">
                      <Link href={`/alarms/${data[0].slug}`}>
                        <h2 className="text-xl font-semibold hover:text-rose-600 duration-300 cursor-pointer text-zinc-400 leading-tight">
                          {data[0].title}
                        </h2>
                      </Link>
                      <p className="text-base mt-2 mb-4 text-gray-600 leading-normal">
                        {data[0].description}
                      </p>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-2">
                          <Image
                            src={data[0].user.image || "/robot.gif"}
                            alt="avatar"
                            width={32}
                            height={32}
                            className="w-8 h-8 max-h-8 flex-shrink rounded-full object-cover border-2 border-zinc-400"
                          />
                          <div className="flex flex-col justify-center ">
                            <h4 className="text-md font-semibold text-zinc-400 leading-tight">
                              {data[0].user.name ||
                                "Anonim" + " " + data[0].user.surname ||
                                ""}
                            </h4>
                            <p className="text-sm text-gray-600 leading-normal">
                              {data[0].user.role}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <Link
                            href={`/alarms/${data[0].slug}`}
                            className="border-2 border-rose-600 hover:bg-rose-600 hover:text-rose-50 hover:outline-2 hover:outline-dotted hover:outline-offset-4 outline-offset-0 outline-rose-700 outline-2  px-4 py-2 rounded-lg text-rose-600 duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-rose-600/50"
                          >
                            <span>Devamını Oku</span>
                            <FiArrowRight className="inline-block" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {data.length >= 2 &&
            data.slice(1).map((item, index) => (
              <div
                className="card w-full flex flex-col lg:flex-row gap-4 bg-zinc-900 px-4  rounded-xl py-4"
                key={index}
              >
                <div className="cardHeader h-[250px] lg:h-auto lg:max-h-[160px] lg:max-w-[250px] lg:min-h-[160px] min-w-[220px] rounded-lg">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full object-cover h-full  rounded-lg"
                  />
                </div>
                <div className="cardBody flex-1">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <Link href={`/alarms/${item.slug}`}>
                        <h2 className="text-lg sm:text-xl font-semibold hover:text-rose-600 duration-300 cursor-pointer text-zinc-400 leading-tight">
                          {item.title}
                        </h2>
                      </Link>
                      <p className="text-sm sm:text-base mt-2 mb-4 text-gray-600 leading-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4 ">
                      <div className="flex gap-2">
                        <img
                          src={item.user.image || "/robot.gif"}
                          alt="avatar"
                          className="w-8 h-8 max-h-8 flex-shrink rounded-full object-cover border-2 border-zinc-400"
                        />
                        <div className="flex flex-col justify-center ">
                          <h2 className="text-md font-semibold text-zinc-400 leading-tight">
                            {item.user.name ||
                              "Anonim" + " " + item.user.surname ||
                              ""}
                          </h2>
                          <p className="text-sm text-gray-600 leading-normal">
                            {item.user.role}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <Link
                          href={`/alarms/${item.slug}`}
                          className="border-2 border-rose-600 hover:bg-rose-600 hover:text-rose-50 hover:outline-2 hover:outline-dotted hover:outline-offset-4 outline-offset-0 outline-rose-700 outline-2  px-4 py-2 rounded-lg text-rose-600 duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-rose-600/50"
                        >
                          <span>Devamını Oku</span>
                          <FiArrowRight className="inline-block" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {data.length === 0 && (
            <div>
              <p className="text-center text-zinc-500 text-xl bg-zinc-700 py-6 font-bold rounded-md">
                Henüz içerik yüklenmedi. Takipte kalın !
              </p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default BreakAndIncom;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const { data } = await axios.get(`/api/alarms`, {
    headers: {
      cookie: cookie,
    },
  });

  return {
    props: {
      data: data.data,
    },
  };
}
