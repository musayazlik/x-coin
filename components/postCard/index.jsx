import React from "react";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RiTimeLine } from "react-icons/ri";
import { lang } from "@lang/langT";
import { useRouter } from "next/router";
import { LuChevronRightCircle } from "react-icons/lu";
const PostCard = ({ item, baseUrl }) => {
  const { locale } = useRouter();
  const t = lang(locale);

  return (
    <>
      <Link href={`${baseUrl}`}>
        <Card className={`py-2 relative z-0 h-full w-full `}>
          <CardHeader className=" mb-2 px-4 flex-col items-start  ">
            <div className="min-h-[180px] w-full relative box-content">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src={item.image}
                fill
                quality={50}
              />
            </div>
          </CardHeader>
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

              <h2 className="text-tiny uppercase font-bold mb-3 hover:text-yellow-500 hover:duration-300 hover:cursor-pointer">
                {item.title.length > 50
                  ? item.title.slice(0, 50) + "..."
                  : item.title}
              </h2>

              <p className="text-tiny leading-4 text-zinc-300 mb-6">
                {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>
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
              <button
                href={`${baseUrl}/${item.slug}`}
                className="text-[10px] flex flex-col gap-2 items-center uppercase font-bold text-zinc-500 hover:text-yellow-500 duration-300"
              >
                <LuChevronRightCircle className="inline-block" fontSize={18} />
                {t.readmore}
              </button>
            </div>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default PostCard;
