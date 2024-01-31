"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@layouts/homeLayout";
import Image from "next/image";
import { RiTimeFill, RiTimeLine } from "react-icons/ri";
import { useRouter } from "next/router";
import {
  PiArrowCircleRightDuotone,
  PiShoppingCartDuotone,
  PiUserCircleGearDuotone,
} from "react-icons/pi";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Link from "next/link";
import { lang } from "@lang/langT";
import { useAppContext } from "@/context";
import { toast } from "react-toastify";
import Head from "next/head";

const EducationDetail = ({ popularEducations }) => {
  const [data, setData] = useState(null);
  const { query, push, locale } = useRouter();
  const t = lang(locale);
  const { basket, setBasket } = useAppContext();

  console.log(popularEducations);

  const addToBasket = (item) => {
    console.log(item);
    const isExist = basket.find((i) => i._id === item._id);
    if (isExist) {
      toast.warning(`${item.title} ${t.basket.alreadyExist}`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    setBasket([...basket, item]);

    toast.success(`${item.title} ${t.basket.addedToBasket}`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    if (query.slug) {
      axios({
        method: "get",
        url: `/api/education?slug=${query.slug}`,
      })
        .then((response) => {
          setData(response.data.data);

          if (response.data.data === null) {
            push("/404");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [query.slug]);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Trader Edit | {data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.description} />
        <meta name="author" content="Trader Edit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <div className=" flex flex-col-reverse xl:flex-row mb-12 items-start gap-8  ">
          <div className="w-full  xl:w-3/12">
            <h2 className="text-white text-xl  xl:text-2xl font-bold mb-4 border-l-4 hover:border-l-8 duration-300 border-rose-700 px-4 bg-zinc-900 py-3 rounded">
              {t.popularEducations}
            </h2>
            <div className="flex flex-row xl:flex-col overflow-auto py-3 gap-3 px-3 ">
              {popularEducations.map((item, index) => (
                <Card
                  className={`py-2 relative min-w-[350px] h-full border-2 border-transparent shadow-lg hover:border-yellow-500 duration-500 ease-in`}
                >
                  <CardHeader className=" mb-2 px-4 flex-col items-start  ">
                    <div className="min-h-[260px] w-full relative box-content">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl "
                        src={item.image}
                        fill
                        quality={50}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-visible px-0 pt-2 pb-4 flex gap-4 flex-col justify-between">
                    <div className="flex flex-col px-4">
                      <div className="flex flex-col gap-2">
                        <small
                          className={
                            "font-bold flex items-center" +
                            " text-xs " +
                            " text-yellow-500"
                          }
                        >
                          <RiTimeLine
                            className={"inline-block mr-1"}
                            fontSize={14}
                          />
                          {item.createdAt.split("T")[0]}
                        </small>
                        <Link href={`/education/${item.slug}`}>
                          <h2 className="text-base leading-5 uppercase font-bold hover:text-yellow-500 hover:duration-300 hover:cursor-pointer line-clamp-2">
                            {item.title}
                          </h2>
                        </Link>
                        <p className="text-tiny leading-4 text-zinc-300 line-clamp-2  ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className=" flex justify-between items-center gap-4 px-4">
                      <div className="avatar">
                        <div className="rounded-full flex gap-3 items-center ">
                          <div className="flex flex-col justify-center ">
                            <span
                              className={
                                "text-sm font-bold flex" +
                                " text-rose-600" +
                                " items-center gap-2 mb-2 "
                              }
                            >
                              <PiUserCircleGearDuotone fontSize={20} />

                              {t.instructor}
                            </span>

                            <div className="inline-flex items-center gap-3">
                              <Avatar
                                isBordered={true}
                                alt="Card background"
                                className="object-cover rounded-full min-w-[30px] max-h-[30px] "
                                src={item.instructorImage}
                                quality={50}
                              />
                              <h3 className="text-sm font-medium leading-4">
                                {item.instructor}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/education/${item.slug}`}
                        className="text-[10px]  uppercase font-bold flex flex-col gap-2 items-center text-zinc-400 hover:text-yellow-500 duration-300 flex-shrink-0"
                      >
                        <PiArrowCircleRightDuotone
                          fontSize={20}
                          className={"inline-block"}
                        />
                        <span className={"whitespace-nowrap"}>
                          {t.readmore}
                        </span>
                      </Link>
                    </div>

                    <div className="price flex justify-around w-full items-center">
                      <Chip color="warning" variant="faded" size={"lg"}>
                        {item.price === 0 ? t.free : `${item.price} ₺`}
                      </Chip>
                      <Button
                        color={"warning"}
                        variant={"ghost"}
                        onClick={() => {
                          addToBasket(item);
                        }}
                      >
                        <PiShoppingCartDuotone fontSize={20} />
                        {t.basket.basketAdd}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-full  xl:w-9/12">
            <div>
              <Image
                src={data.image}
                alt={data.title}
                quality={100}
                width={1200}
                priority={true}
                height={600}
                className={
                  "max-h-[400px] object-cover" + " w-full rounded-lg shadow-2xl"
                }
              />
            </div>
            <div className={"flex justify-between items-center pt-8 pb-4 px-4"}>
              <div className="rounded-full flex gap-3 items-center ">
                <div className="flex justify-center gap-4 items-center">
                  <PiUserCircleGearDuotone fontSize={48} />
                  <div className="flex flex-col ">
                    <span
                      className={
                        "text-sm font-bold flex" +
                        " text-rose-600" +
                        " items-center  "
                      }
                    >
                      {" "}
                      {t.instructor}{" "}
                    </span>
                    <h3 className="text-sm font-medium leading-4">
                      {data.instructor}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="date">
                <p className="text-sm text-gray-500 font-bold leading-4 flex items-center">
                  <RiTimeFill className={"inline-block mr-1"} fontSize={18} />
                  {data.createdAt
                    .split("T")[0]
                    .replace("-", "/")
                    .replace("-", "/")}
                </p>
              </div>
            </div>
            <div className="px-4">
              <h1 className=" flex flex-col mb-2 text-lg leading-6 lg:text-2xl font-bold text-zinc-300">
                {data.title}
              </h1>
              <p className=" text-sm sm:text-base text-zinc-500 font-normal">
                {data.description}
              </p>
            </div>

            <div className="video mt-6 px-4">
              {data.video === "" ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="rounded-lg shadow-2xl"
                    src={data.video}
                    allowFullScreen={true}
                    title={data.title}
                  />
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <div className="buy">
                    <div className=" mb-4">
                      <p className="text-gray-200">
                        {t.basket.price} : {data.price} tl
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        addToBasket({
                          _id: data._id,
                          title: data.title,
                          price: data.price,
                          image: data.image,
                          slug: data.slug,
                        });
                      }}
                      className="text-white inline-block bg-rose-500 hover:bg-rose-600 hover:duration-300 hover:shadow-2xl hover:cursor-pointer rounded-lg px-4 py-2"
                    >
                      {t.basket.basketAdd}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EducationDetail;

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.APP_URL}/api/popularEducation?limit=3`
  );

  return {
    props: {
      popularEducations: data.data,
    },
  };
}
