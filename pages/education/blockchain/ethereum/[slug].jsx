"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import Layout from "@layouts/homeLayout";
import Image from "next/image";
import {Avatar} from "@nextui-org/react";
import {RiTimeFill} from "react-icons/ri";
import {useRouter} from "next/router";
import TradingViewWidget from "@components/tradingViewWidget/tradingViewWidget";


const EthereumDetail = () => {
  const [data, setData] = useState(null);
  const {query, push} = useRouter();


  useEffect(() => {
    if (query.slug) {
      axios({
        method: "get",
        url: `/api/posts?slug=${query.slug}`,
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
            <div className="flex justify-between items-center gap-4">
              <Avatar isBordered radius="md" src={data.user.image}
                      color={"warning"}/>

              <div className="flex flex-col justify-center ">
                <h3 className="text-sm font-semibold leading-4">
                  {data.user.name}
                </h3>
                <p className="text-tiny text-gray-500 leading-4">
                  {data.user.role}
                </p>
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

          <TradingViewWidget data={data.iframeText}/>

        </div>
      </div>
    </Layout>
  );
};

export default EthereumDetail;