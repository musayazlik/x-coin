import React, { useEffect, useState } from "react";
import Layout from "@/layouts/homeLayout";
import { useAppContext } from "@/context";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { RiCloseCircleLine, RiLineChartLine, RiTimeLine } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "@/components/postCard";
import { FiChevronsUp } from "react-icons/fi";

import { useRouter } from "next/router";
import { lang } from "@lang/langT";

const Bitcoin = ({ data }) => {
  const { isServiceLoading, setIsServiceLoading } = useAppContext();
  const { locale } = useRouter();
  const t = lang(locale);
  const [selectedTab, setSelectedTab] = useState({
    id: "1",
    label: "short-term",
  });

  const [tabs, setTabs] = useState([
    {
      id: "1",
      label: "short-term",
      content: [],
    },
    {
      id: "2",
      label: "long-term",
      content: [],
    },
    {
      id: "3",
      label: "support-resistance",
      content: [],
    },
    {
      id: "4",
      label: "major-factors",
      content: [],
    },
  ]);

  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    setTimeout(async () => {
      const { data } = await axios.get(
        `/api/posts?category=bitcoin&subCategory=${
          selectedTab.label
        }&limit=2&page=${
          Math.floor(tabs[selectedTab.id].content.length / 2) + 1
        }`
      );
      if (data.data.length === 0) {
        setHasMore(false);
      }
      setTabs((prev) => {
        return {
          ...prev,
          [selectedTab.id]: {
            ...prev[selectedTab.id],
            content: [...prev[selectedTab.id].content, ...data.data],
          },
        };
      });
    }, 1000);
  };

  useEffect(() => {
    setHasMore(true);
    getMorePost();
  }, [selectedTab]);

  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center  ">
          <h1 className=" flex flex-col mb-4">
            <div>
              <Button
                isIconOnly
                color="warning"
                variant="faded"
                aria-label="sdfdf"
                className={"p-1 w-16 mb-4 h-16"}
              >
                <RiLineChartLine fontSize={120} />
              </Button>
            </div>
            <span
              className={
                "text-white mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"
              }
            >
              {t.analytics.bitcoin}{" "}
            </span>
            <span className={"text-3xl text-yellow-500 font-bold "}>
              {t.analytics.title}
            </span>
          </h1>
          <p className="text-base text-gray-200 font-normal">
            Kripto para piyasasının toplam değeri ile ilgili analizler. Burada
            yer alan analizler yatırım tavsiyesi değildir. Sadece eğitim
            amaçlıdır. Yatırım kararlarınızı kendi araştırmalarınız sonucunda
            veriniz. Yatırım tavsiyesi değildir.
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100 mb-20">
          <div className="sm:hidden">
            <label for="tabs" className="sr-only">
              Select your country
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Profile</option>
              <option>Canada</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li
              className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700  focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              onClick={() => {
                setSelectedTab({
                  id: "1",
                  label: "short-term",
                });
              }}
            >
              short-term
            </li>

            <li
              className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700  focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              onClick={() => {
                setSelectedTab({
                  id: "2",
                  label: "long-term",
                });
              }}
            >
              long-term
            </li>
          </ul>

          <InfiniteScroll
            dataLength={
              tabs[selectedTab.id].content.length > 0
                ? tabs[selectedTab.id].content.length
                : 0
            }
            next={getMorePost}
            hasMore={hasMore}
            className="h-auto relative scroll-smooth !overflow-hidden "
            loader={
              <div className="w-full absolute bottom-0 mb-5 px-6">
                <div className="flex justify-center items-center absolute mx-auto right-0 left-0 gap-4">
                  Yükleniyor{" "}
                  <div>
                    <div className="w-4 h-4 border-4 border-rose-600 border-dotted rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="flex flex-col gap-4 mb-10 px-6 ">
              {tabs[selectedTab.id].content.map((item, index) => (
                <PostCard
                  key={index}
                  item={item}
                  baseUrl="/analysis/blockchain/bitcoin"
                />
              ))}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </Layout>
  );
};

export default Bitcoin;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const { data } = await axios.get(
    `/api/posts?category=bitcoin&subCategory=short-term&limit=2&page=1`,
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
