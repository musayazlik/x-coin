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

const Silver = ({
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
              t.silver
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
                  variant={"bordered"} aria-label="Dynamic tabs" items={tabs}
                  className={"w-full overflow-auto flex justify-center"}>
              {(item) => (
                <Tab key={item.id} title={item.label.replace("-", " ")}
                     className={"capitalize"}>
                  <div className=" grid grid-cols-12 gap-4">
                    {
                      item.content.map((item, index) => (
                        <div
                          className={"relative w-full col-span-12" +
                            " md:col-span-6 lg:col-span-4 2xl:col-span-3  "}>

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
                            className={`py-2 relative z-0 h-full `}

                          >

                            <CardHeader
                              className=" mb-2 px-4 flex-col items-start  ">
                              <div
                                className="min-h-[180px] w-full relative box-content">
                                <Image
                                  alt="Card background"
                                  className="object-cover rounded-xl "
                                  src={item.image}
                                  fill
                                  quality={50}

                                />
                              </div>


                            </CardHeader>
                            <CardBody
                              className="overflow-visible py-2 flex flex-col justify-between">
                              <div className="flex flex-col">
                                <small
                                  className={"font-medium flex items-center" +
                                    " text-xs mb-2" +
                                    " text-zinc-600"}>
                                  <RiTimeLine className={"inline-block mr-1"}
                                              fontSize={14}/>
                                  {item.createdAt.split("T")[0]}
                                </small>
                                <Link href={
                                  `/analysis/blockchain/total-market-cap/${item.slug}`
                                }>
                                  <h2
                                    className="text-tiny uppercase font-bold mb-3 hover:text-yellow-500 hover:duration-300 hover:cursor-pointer">
                                    {item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}
                                  </h2>
                                </Link>
                                <p
                                  className="text-tiny leading-4 text-zinc-600 mb-6">
                                  {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                                </p>
                              </div>
                              <div
                                className=" flex justify-between items-center">
                                <div className="avatar">
                                  <div
                                    className="rounded-full flex gap-3 items-center ">

                                    <Avatar isBordered radius="md"
                                            color="warning" size={"sm"}
                                            src={item.user.image}

                                    />
                                    <div
                                      className="flex flex-col justify-center ">
                                      <h3
                                        className="text-xs font-semibold leading-4">
                                        {item.user.name}
                                      </h3>
                                      <p
                                        className="text-tiny text-gray-500 leading-4">
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

export default Silver;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/posts?category=silver&limit=16&page=1`,
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
