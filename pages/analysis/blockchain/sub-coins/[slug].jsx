import React from "react";
import axios from "axios";
import Layout from "@layouts/homeLayout";
import Image from "next/image";
import {Avatar} from "@nextui-org/react";
import {RiTimeFill} from "react-icons/ri";


const SubCoinsDetail = ({
                          data
                        }) => {
  return (
    <Layout>
      <div className=" ">
        <div className=" mx-auto mb-14  ">
          <div>
            <Image src={data.image} alt={data.title} quality={100} width={1200}
                   height={600} className={"max-h-[400px] object-cover" +
              " w-full rounded-lg shadow-2xl"}/>
          </div>
          <div className={"flex justify-between items-center py-4 px-4"}>
            <div class="flex justify-between items-center gap-4">
              <Avatar isBordered radius="md" src={data.user.image}
                      color={"warning"}/>

              <div class="flex flex-col justify-center ">
                <h3
                  class="text-sm font-semibold leading-4">
                  {data.user.name}
                </h3>
                <p
                  class="text-tiny text-gray-500 leading-4">
                  {data.user.role}
                </p>
              </div>

            </div>

            <div class="date">
              <p
                class="text-sm text-gray-500 font-bold leading-4 flex items-center">
                <RiTimeFill className={"inline-block mr-1"} fontSize={18}/>
                {data.createdAt.split("T")[0].replace("-", "/").replace("-", "/")}
              </p>
            </div>


          </div>
          <div className="">
            <h1
              className=" flex flex-col mb-2 text-xl lg:text-2xl font-bold text-zinc-300">
              {data.title}

            </h1>
            <p className="text-base text-zinc-500 font-normal">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubCoinsDetail;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/posts?slug=${context.params.slug} `,
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