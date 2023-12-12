import {Swiper, SwiperSlide} from "swiper/react";
import {swiperEducationConfig} from "@/config/swiperConfig";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip
} from "@nextui-org/react";
import Image from "next/image";
import {RiTimeLine} from "react-icons/ri";
import Link from "next/link";
import {
  PiArrowCircleRightDuotone,
  PiShoppingCartDuotone,
  PiUserCircleGearDuotone
} from "react-icons/pi";
import React from "react";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import {useAppContext} from "@/context";
import {toast} from "react-toastify";


const Swippers = ({
                    data = [],
                    path = "/education/bitcoin/"
                  }) => {
  const {locale, push} = useRouter();
  const t = lang(locale);
  const {basket, setBasket} = useAppContext();

  const addToBasket = (item) => {
    console.log(item)
    const isExist = basket.find((i) => i._id === item._id)
    if (isExist) return
    setBasket([...basket, item])

    toast.success(`${item.title} ${t.basket.addedToBasket}`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,

    });
  }


  return (
    <Swiper
      {...swiperEducationConfig}
      className="mb-4"
    >

      {data && data.map((item, index) => (

        <SwiperSlide key={index} className={"!h-auto px-2 sm:px-4 py-6"}>
          <Card
            className={`py-2 relative z-0 h-full border-2 border-transparent shadow-lg hover:border-yellow-500 duration-500 ease-in`}

          >
            <CardHeader
              className=" mb-2 px-4 flex-col items-start  ">
              <div
                className="min-h-[260px] w-full relative box-content">
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
              className="overflow-visible px-0 pt-2 pb-4 flex gap-4 flex-col justify-between">

              <div className="flex flex-col px-4">
                <div className="flex flex-col gap-2">
                  <small
                    className={"font-bold flex items-center" +
                      " text-xs " +
                      " text-yellow-500"}>
                    <RiTimeLine className={"inline-block mr-1"}
                                fontSize={14}/>
                    {item.createdAt.split("T")[0]}
                  </small>
                  <Link href={
                    `${path}${item.slug}`
                  }>
                    <h2
                      className="text-base leading-5 uppercase font-bold hover:text-yellow-500 hover:duration-300 hover:cursor-pointer line-clamp-2">
                      {item.title}
                    </h2>
                  </Link>
                  <p
                    className="text-tiny leading-4 text-zinc-300 line-clamp-2  ">
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                className=" flex justify-between items-center gap-4 px-4">
                <div className="avatar">
                  <div
                    className="rounded-full flex gap-3 items-center ">
                    <div className="flex flex-col justify-center ">
                            <span
                              className={"text-sm font-bold flex" +
                                " text-rose-600" +
                                " items-center gap-2 mb-2 "}>
                              <PiUserCircleGearDuotone fontSize={20}/>

                              {t.instructor}</span>


                      <div className="inline-flex items-center gap-3">
                        <Avatar
                          isBordered={true}
                          alt="Card background"
                          className="object-cover rounded-full min-w-[30px] max-h-[30px] "
                          src={item.instructorImage}
                          quality={50}

                        />
                        <h3
                          className="text-sm font-medium leading-4">
                          {item.instructor}
                        </h3>
                      </div>
                    </div>
                  </div>

                </div>
                <Link
                  href={`${path}${item.slug}`}
                  className="text-[10px]  uppercase font-bold flex flex-col gap-2 items-center text-zinc-400 hover:text-yellow-500 duration-300 flex-shrink-0">
                  <PiArrowCircleRightDuotone fontSize={20}
                                             className={"inline-block"}

                  />
                  <span className={"whitespace-nowrap"}>{t.readmore}</span>
                </Link>
              </div>

              <div className="price flex justify-around w-full items-center">
                <Chip color="warning" variant="faded" size={"lg"}>{
                  item.price === 0 ? t.free : `${item.price} ₺`

                }</Chip>
                <Button color={"warning"} variant={"ghost"}
                        onClick={() => {
                          addToBasket(item)
                        }}
                >
                  <PiShoppingCartDuotone fontSize={20}/>
                  Sepete Ekle
                </Button>
              </div>
            </CardBody>
          </Card>

        </SwiperSlide>
      ))}


    </Swiper>
  )
}

export default Swippers