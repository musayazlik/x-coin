import React, {useState} from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";
import {Card, CardBody, CardHeader, Tab, Tabs} from "@nextui-org/react";
import Image from "next/image";

const TotalMarketCap = () => {
  const [data, setData] = useState(null);
  const {isServiceLoading, setIsServiceLoading} = useAppContext();

  let tabs = [
    {
      id: "short-term",
      label: "short-term",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "long-term",
      label: "long-term",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "support-resistance",
      label: "support-resistance",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "major-factors",
      label: "major-factors",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];


  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center  ">
          <h1
            className=" flex flex-col mb-4">
            <span
              className={"text-white mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"}>Total Market Cap </span>
            <span
              className={"text-3xl text-yellow-500 "}>Analiz</span>
          </h1>
          <p className="text-base text-gray-200 font-normal">
            Bu sayfadan Total Market Cap analizlerini inceleyebilirsiniz.
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div
            className="flex flex-wrap gap-4 justify-center flex-col items-center">

            {/* <Tabs size="lg" color={"warning"}
                  variant={"bordered"} aria-label="Dynamic tabs">
              <Tab key="short-term" title="Short Term">


              </Tab>
              <Tab key="long-term" title="Long Term"/>
              <Tab key="support-resistance" title="Support - Resistance"/>
              <Tab key="major-factors" title="Major Factors"/>
            </Tabs>*/}

            <Tabs size="lg" color={"warning"}

                  variant={"bordered"} aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label.replace("-", " ")}
                     className={"capitalize"}>
                  <div className=" grid grid-cols-12 gap-4">
                    <Card
                      className="py-4 col-span-12 sm:col-span-6 xl:col-span-3">
                      <CardHeader
                        className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Daily
                          Mix</p>
                        <small className="text-default-500">12 Tracks</small>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="/hero-card-complete.jpeg"
                          width={270}
                          height={180}
                        />
                      </CardBody>
                    </Card>
                    <Card
                      className="py-4 col-span-12 sm:col-span-6 xl:col-span-3">
                      <CardHeader
                        className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Daily
                          Mix</p>
                        <small className="text-default-500">12 Tracks</small>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="/hero-card-complete.jpeg"
                          width={270}
                          height={180}
                        />
                      </CardBody>
                    </Card>
                    <Card
                      className="py-4 col-span-12 sm:col-span-6 xl:col-span-3">
                      <CardHeader
                        className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Daily
                          Mix</p>
                        <small className="text-default-500">12 Tracks</small>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="/hero-card-complete.jpeg"
                          width={270}
                          height={180}
                        />
                      </CardBody>
                    </Card>
                    <Card
                      className="py-4 col-span-12 sm:col-span-6 xl:col-span-3">
                      <CardHeader
                        className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Daily
                          Mix</p>
                        <small className="text-default-500">12 Tracks</small>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="/hero-card-complete.jpeg"
                          width={270}
                          height={180}
                        />
                      </CardBody>
                    </Card>

                  </div>
                </Tab>
              )}
            </Tabs>

          </div>

        </section>
      </div>
    </Layout>
  );
};

export default TotalMarketCap;
