import React from "react";
import Layout from "@/layouts/homeLayout";
import { lang } from "@/lang/langT";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { RiLineChartLine } from "react-icons/ri";

const AnalysisHome = () => {
  const router = useRouter();
  const { locale } = router;
  const t = lang(locale);

  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center  ">
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
          <h1 className=" flex flex-col mb-4">
            <span
              className={
                "text-yellow-500 underline mb-1 text-2xl md:text-3xl lg:text-5xl" +
                " font-bold"
              }
            >
              {t.analysis}
            </span>
          </h1>
          <p className="text-base text-gray-200 font-normal max-w-[800px] mx-auto">
            {t.analysisdescription}
          </p>

          <img
            src="/3d-illustration.png"
            className=" max-w-[800px] w-full mx-auto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AnalysisHome;
