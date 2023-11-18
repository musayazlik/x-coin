import React from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image
} from "@nextui-org/react";
import axios from "axios";
import {RiLineChartLine, RiTimeLine} from "react-icons/ri";

import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";


const Bitcoin = ({
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
                <RiLineChartLine fontSize={120}/>
              </Button>
            </div>
            <span
              className={"text-white mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"}>{
              t.analytics.bitcoin
            } </span>
            <span
              className={"text-3xl text-yellow-500 font-bold "}>{
              t.education
            }</span>
          </h1>
          <p className="text-base text-gray-200 font-normal">
            Kripto para piyasasının toplam değeri ile ilgili analizler. Burada
            yer alan analizler yatırım tavsiyesi değildir. Sadece eğitim
            amaçlıdır. Yatırım kararlarınızı kendi araştırmalarınız sonucunda
            veriniz. Yatırım tavsiyesi değildir.
          </p>
        </div>

        <div
          className=" ">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}

          >

            {data && data.map((item, index) => (

              <SwiperSlide key={index}>
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
                        `/analysis/education/total-market-cap/${item.slug}`
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
                        href={`/analysis/education/total-market-cap/${item.slug}`}
                        className="text-[10px]  uppercase font-bold text-zinc-500 hover:text-yellow-500 duration-300">
                        {t.readmore}
                      </Link>
                    </div>
                  </CardBody>
                </Card>

              </SwiperSlide>
            ))}


          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Bitcoin;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(
    `/api/education?category=bitcoin&limit=16&page=1`,
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
