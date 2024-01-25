import React from "react";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RiTimeLine } from "react-icons/ri";
import { lang } from "@lang/langT";
import { useRouter } from "next/router";
import TradingViewWidget from "@components/tradingViewWidget/tradingViewWidget";
const PostCard = ({ item, baseUrl }) => {
  const { locale } = useRouter();
  const t = lang(locale);

  return (
    <>
      <Card className={`py-2 relative z-0 h-full w-full `}>
        {item?.image && (
          <CardHeader className=" mb-2 px-4 flex-col items-start  ">
            <div className="min-h-[400px] w-full relative box-content">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src={item.image}
                fill
                quality={50}
              />
            </div>
          </CardHeader>
        )}
        <CardBody className="overflow-visible py-2 flex flex-col justify-between">
          <div className="flex flex-col px-4">
            <small
              className={
                "font-medium flex items-center" +
                " text-xs mb-2" +
                " text-zinc-300"
              }
            >
              <RiTimeLine className={"inline-block mr-1"} fontSize={14} />
              {item?.createdAt?.split("T")[0]}
            </small>

            {item?.title && (
              <h2 className="text-xl uppercase font-bold mb-3 text-yellow-500 hover:duration-300 hover:cursor-pointer">
                {item.title}
              </h2>
            )}

            {item?.description && (
              <p className="text-base leading-4 text-zinc-300 mb-6">
                {item.description}
              </p>
            )}

            <div className="">
              {item?.content && (
                <div
                  className="text-sm leading-4 text-zinc-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              )}
            </div>

            <div className="">
              {item?.iframeText && (
                <div className="text-tiny leading-4 text-zinc-300 mb-6">
                  <TradingViewWidget data={item?.iframeText} />
                </div>
              )}
            </div>
          </div>
          <div className=" flex justify-between px-4 items-center">
            <div className="avatar">
              <div className="rounded-full flex gap-3 items-center ">
                <Avatar
                  isBordered
                  radius="md"
                  color="warning"
                  size={"sm"}
                  src={item.user.image}
                />
                <div className="flex flex-col justify-center ">
                  <h3 className="text-xs font-semibold leading-4">
                    {item.user.name}
                  </h3>
                  <p className="text-tiny text-gray-500 leading-4">
                    {item.user.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PostCard;
