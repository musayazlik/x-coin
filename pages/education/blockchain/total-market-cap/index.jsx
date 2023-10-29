import React, {useState} from "react";
import Layout from "@/layouts/homeLayout";
import {useAppContext} from "@/context";

const TotalMarketCap = () => {
  const [data, setData] = useState(null);
  const {isServiceLoading, setIsServiceLoading} = useAppContext();


  return (
    <Layout>
      <div className=" mt-12">
        <div className=" mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-zinc-500">
            Total Market Cap Analiz
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Bu sayfadan Total Market Cap analizlerini inceleyebilirsiniz.
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div className="container mx-auto  sm:p-6 overflow-x-auto">
            Analiz Notları
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TotalMarketCap;
