import React, {useState} from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  Tabs
} from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import {RiCloseCircleLine, RiLineChartLine, RiTimeLine} from "react-icons/ri";

import {useRouter} from "next/router";
import {lang} from "@lang/langT";

const TotalMarketCap = ({
                          data
                        }) => {
  const {isServiceLoading, setIsServiceLoading} = useAppContext();
  const {locale} = useRouter();
  const t = lang(locale);


  const [tabs, setTabs] = useState([
    {
      id: "1",
      label: "short-term",
      content: data ? data.filter((item) => item.subCategory === "short-term") : [],
    },
    {
      id: "2",
      label: "long-term",
      content: data ? data.filter((item) => item.subCategory === "long-term") : [],
    },
    {
      id: "3",
      label: "support-resistance",
      content: data ? data.filter((item) => item.subCategory === "support-resistance") : [],
    },
    {
      id: "4",
      label: "major-factors",
      content: data ? data.filter((item) => item.subCategory === "major-factors") : [],
    }
  ]);


  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center  ">
          <h1
            className=" flex flex-col mb-4">
            <div>
              <Button isIconOnly color="warning" variant="faded"
                      aria-label="sdfdf" className={"p-1 w-16 mb-4 h-16"}>
                <RiLineChartLine fontSize={120}/>
              </Button>
            </div>
            <span
              className={"text-white mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"}>{
              t.analytics.totalMc
            } </span>
            <span
              className={"text-3xl text-yellow-500 font-bold "}>{
              t.analytics.title
            }</span>
          </h1>
          <p className="text-base text-gray-200 font-normal">
            Kripto para piyasasının toplam değeri ile ilgili analizler. Burada
            yer alan analizler yatırım tavsiyesi değildir. Sadece eğitim
            amaçlıdır. Yatırım kararlarınızı kendi araştırmalarınız sonucunda
            veriniz. Yatırım tavsiyesi değildir.
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div
            className="flex flex-wrap gap-4 justify-center flex-col items-center">

            <Tabs size="lg" color={"warning"}
                  variant={"bordered"} aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label.replace("-", " ")}
                     className={"capitalize"}>
                  <div className=" grid grid-cols-12 gap-4">
                    {
                      item.content.map((item, index) => (
                        <div className={"relative w-full col-span-3  "}>

                          {
                            index === 0 && (
                              <Chip color="danger" variant={"dot"}
                                    className={"absolute bg-zinc-800" +
                                      " border-2 animate-pulse text-zinc-500" +

                                      " border-zinc-900" +
                                      " left-0" +
                                      " -top-3" +
                                      " right-0 mx-auto z-10"}>
                                {
                                  t.newpost
                                }
                              </Chip>
                            )
                          }


                          <Card
                            className={`py-4 col-span-12 sm:col-span-6 xl:col-span-3 relative z-0 `}

                          >

                            <CardHeader
                              className="pb-0 pt-2 mb-2 px-4 flex-col items-start ">

                              <Image
                                alt="Card background"
                                className="object-cover rounded-xl min-h-[180px] max-h-[180px]"
                                src={item.image}
                                width={270}
                                height={180}
                                quality={50}

                              />

                            </CardHeader>
                            <CardBody
                              className="overflow-visible py-2">
                              <small
                                className={"font-medium flex items-center" +
                                  " text-xs mb-2" +
                                  " text-zinc-600"}>
                                <RiTimeLine className={"inline-block mr-1"}
                                            fontSize={14}/>
                                {item.createdAt.split("T")[0]}
                              </small>
                              <h2
                                className="text-tiny uppercase font-bold mb-3">
                                {item.title}
                              </h2>
                              <p
                                className="text-tiny leading-4 text-zinc-600 mb-6">
                                {item.description}
                              </p>
                              <div
                                className=" flex justify-between items-center">
                                <div class="avatar">
                                  <div
                                    class="rounded-full flex gap-3 items-center ">

                                    <Avatar isBordered radius="md"
                                            color="warning" size={"sm"}
                                            src={item.user.image}

                                    />
                                    <div class="flex flex-col justify-center ">
                                      <h3
                                        class="text-xs font-semibold leading-4">
                                        {item.user.name}
                                      </h3>
                                      <p
                                        class="text-tiny text-gray-500 leading-4">
                                        {item.user.role}
                                      </p>
                                    </div>
                                  </div>

                                </div>
                                <Link
                                  href={`/analysis/blockchain/total-market-cap/${item.slug}`}
                                  className="text-[10px]  uppercase font-bold text-zinc-500 hover:text-yellow-500 duration-300">
                                  {t.readmore}
                                </Link>
                              </div>
                            </CardBody>
                          </Card>
                        </div>

                      ))
                    }

                    {
                      item.content.length === 0 && (
                        <div className={"col-span-12"}>
                          <div
                            className="flex justify-center flex-col gap-8 items-center h-96">
                            <RiCloseCircleLine fontSize={120}
                                               className={"text-gray-500"}/>
                            <h1
                              className="text-4xl text-gray-500 font-bold">
                              {
                                t.nopost
                              }
                            </h1>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </Tab>
              )}
            </Tabs>

          </div>

        </section>
      </div>
    </Layout>
  );
};

export default TotalMarketCap;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/posts?category=total-mc&limit=16&page=1`,
    {
      headers: {
        cookie: cookie,
      },
    }
  );

  console.log(data.data)

  return {
    props: {
      data: data.data,
    },
  };
}
