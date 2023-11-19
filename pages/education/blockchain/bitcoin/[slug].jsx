"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import Layout from "@layouts/homeLayout";
import Image from "next/image";
import {RiTimeFill} from "react-icons/ri";
import {useRouter} from "next/router";
import {PiUserCircleGearDuotone} from "react-icons/pi";


const BitcoinDetail = () => {
  const [data, setData] = useState(null);
  const {query, push} = useRouter();


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
  }, [
    query.slug,
  ]);


  if (!data) {
    return null;
  }


  return (
    <Layout>
      <div className=" ">
        <div className=" mx-auto mb-14  ">
          <div>
            <Image src={data.image} alt={data.title} quality={100} width={1200}
                   priority={true} height={600}
                   className={"max-h-[400px] object-cover" + " w-full rounded-lg shadow-2xl"}/>
          </div>
          <div className={"flex justify-between items-center py-4 px-4"}>
            <div
              className="rounded-full flex gap-3 items-center ">
              <div className="flex justify-center gap-4 items-center">
                <PiUserCircleGearDuotone fontSize={48}/>
                <div class="flex flex-col ">
                  <span
                    className={"text-sm font-bold flex" +
                      " text-rose-600" +
                      " items-center  "}>


                              Eğitmen</span>
                  <h3
                    className="text-sm font-medium leading-4">
                    {data.instructor}
                  </h3>
                </div>
              </div>
            </div>

            <div className="date">
              <p
                className="text-sm text-gray-500 font-bold leading-4 flex items-center">
                <RiTimeFill className={"inline-block mr-1"} fontSize={18}/>
                {data.createdAt.split("T")[0].replace("-", "/").replace("-", "/")}
              </p>
            </div>
          </div>
          <div className="">
            <h1
              className=" flex flex-col mb-2 text-lg leading-6 lg:text-2xl font-bold text-zinc-300">
              {data.title}
            </h1>
            <p className=" text-sm sm:text-base text-zinc-500 font-normal">
              {data.description}
            </p>
          </div>

          <div class="video mt-6">
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
                    <p className="text-gray-200">Fiyat: {data.price} tl</p>

                  </div>
                  <a
                    href="https://www.udemy.com/course/bitcoin-egitimi/?referralCode=9E4A2F3E2B4B4E2F3E2F"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-rose-500 hover:bg-rose-600 hover:duration-300 hover:shadow-2xl hover:cursor-pointer rounded-lg px-4 py-2"
                  >
                    Satın Al
                  </a>
                </div>

              </div>
            )

            }


          </div>

        </div>
      </div>
    </Layout>
  );
};

export default BitcoinDetail;