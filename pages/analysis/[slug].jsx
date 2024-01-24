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
import axios from "axios";
import { RiLineChartLine } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "@/components/postCard";

import { useRouter } from "next/router";
import { lang } from "@lang/langT";
import EmptyData from "@/components/emptyData";
import categoriesList from "@/libs/catagoriesList";
import Link from "next/link";

const AnalysisPostList = () => {
  const { locale, query, push } = useRouter();

  const t = lang(locale);
  const [selectedTab, setSelectedTab] = useState({
    id: 0,
    label: "short-term",
  });

  const [tabs, setTabs] = useState([
    {
      id: 0,
      label: "short-term",
      content: [],
    },
    {
      id: 1,
      label: "long-term",
      content: [],
    },
    {
      id: 2,
      label: "support-resistance",
      content: [],
    },
    {
      id: 3,
      label: "major-factors",
      content: [],
    },
  ]);

  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    setTimeout(async () => {
      const { data } = await axios.get(
        `/api/posts?category=${query.slug}&subCategory=${
          selectedTab.label
        }&page=${Math.floor(tabs[selectedTab.id].content.length / 6) + 1}`
      );

      if (data.data.length == tabs[selectedTab.id].content.length) {
        setHasMore(false);
      } else {
        if (
          data.data.length < 6 &&
          data.data.length !== tabs[selectedTab.id].content.length
        ) {
          setTabs((prev) => {
            return {
              ...prev,
              [selectedTab.id]: {
                ...prev[selectedTab.id],
                content: [...prev[selectedTab.id].content, ...data.data],
              },
            };
          });
          setHasMore(false);
        } else {
          setTabs((prev) => {
            return {
              ...prev,
              [selectedTab.id]: {
                ...prev[selectedTab.id],
                content: [...prev[selectedTab.id].content, ...data.data],
              },
            };
          });
        }
      }
    }, 1000);
  };
  useEffect(() => {
    setHasMore(true);
    getMorePost();
  }, [selectedTab, query.slug]);

  useEffect(() => {
    if (query.slug) {
      setTabs([
        {
          id: 0,
          label: "short-term",
          content: [],
        },
        {
          id: 1,
          label: "long-term",
          content: [],
        },
        {
          id: 2,
          label: "support-resistance",
          content: [],
        },
        {
          id: 3,
          label: "major-factors",
          content: [],
        },
      ]);
    }
  }, [query.slug]);

  if (categoriesList.findIndex((item) => item.value === query.slug) === -1) {
    return (
      <Layout>
        <main class="w-full flex flex-col justify-center items-center pt-40">
          <h1 class="text-9xl font-extrabold text-white tracking-widest">
            404
          </h1>
          <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
          </div>
          <button class="mt-5">
            <Link
              href={"/analysis"}
              class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
            >
              <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                {t.goBackAnalysis}
              </span>
            </Link>
          </button>
        </main>
      </Layout>
    );
  } else {
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
                  "text-white mb-1 text-2xl md:text-3xl lg:text-5xl capitalize" +
                  " font-bold"
                }
              >
                {query.slug}
              </span>
              <span className={"text-3xl text-yellow-500 font-bold "}>
                {t.analytics.title}
              </span>
            </h1>
            <p className="text-base text-gray-200 font-normal max-w-[800px] mx-auto">
              {t.analysisPageDescription}
            </p>
          </div>

          <section>
            <ul className=" text-sm gap-4 mb-6 max-w-[900px] overflow-x-auto font-bold mx-auto flex xl:justify-center text-center px-6 py-12 ">
              <li
                className={`inline-block px-8 cursor-pointer whitespace-nowrap hover:scale-105 duration-300 hover:shadow-xl hover:shadow-black/10 w-full text-base p-4 bg-black/20 border-2 rounded-sm text-zinc-200 border-zinc-950 focus:ring-4 ${
                  selectedTab.id === 0
                    ? "ring-2 ring-yellow-500 !text-yellow-900 bg-yellow-500/80 hover:shadow-yellow-500/20 border-white/20"
                    : "focus:ring-transparent"
                }`}
                onClick={() => {
                  setSelectedTab({
                    id: 0,
                    label: "short-term",
                  });
                }}
              >
                {t.shortTerm}
              </li>

              <li
                className={`inline-block px-8 cursor-pointer hover:scale-105 whitespace-nowrap duration-300 hover:shadow-xl hover:shadow-black/10 w-full text-base p-4 bg-black/20 border-2 rounded-sm text-zinc-200 border-zinc-950 focus:ring-4 ${
                  selectedTab.id === 1
                    ? "ring-2 ring-yellow-500 !text-yellow-900 bg-yellow-500/80 hover:shadow-yellow-500/20 border-white/20"
                    : "focus:ring-transparent"
                }`}
                onClick={() => {
                  setSelectedTab({
                    id: 1,
                    label: "long-term",
                  });
                }}
              >
                {t.longTerm}
              </li>

              <li
                className={`inline-block px-8 cursor-pointer hover:scale-105 duration-300 whitespace-nowrap hover:shadow-xl hover:shadow-black/10 w-full text-base p-4 bg-black/20 border-2 rounded-sm text-zinc-200 border-zinc-950 focus:ring-4 ${
                  selectedTab.id === 2
                    ? "ring-2 ring-yellow-500 !text-yellow-900 bg-yellow-500/80 hover:shadow-yellow-500/20 border-white/20"
                    : "focus:ring-transparent"
                }`}
                onClick={() => {
                  setSelectedTab({
                    id: 2,
                    label: "support-resistance",
                  });
                }}
              >
                {t.supportResistance}
              </li>

              <li
                className={`inline-block px-8 cursor-pointer hover:scale-105 duration-300 whitespace-nowrap hover:shadow-xl hover:shadow-black/10 w-full text-base p-4 bg-black/20 border-2 rounded-sm text-zinc-200 border-zinc-950 focus:ring-4 ${
                  selectedTab.id === 3
                    ? "ring-2 ring-yellow-500 !text-yellow-900 bg-yellow-500/80 hover:shadow-yellow-500/20 border-white/20"
                    : "focus:ring-transparent"
                }`}
                onClick={() => {
                  setSelectedTab({
                    id: 3,
                    label: "major-factors",
                  });
                }}
              >
                {t.majorFactors}
              </li>
            </ul>

            <InfiniteScroll
              dataLength={
                tabs[selectedTab.id]?.content?.length > 0
                  ? tabs[selectedTab.id]?.content?.length
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
                    baseUrl={"/analysis/detail/" + item.slug}
                  />
                ))}

                {tabs[selectedTab.id].content.length == 0 &&
                  hasMore === false && <EmptyData />}
              </div>
            </InfiniteScroll>
          </section>
        </div>
      </Layout>
    );
  }
};

export default AnalysisPostList;
