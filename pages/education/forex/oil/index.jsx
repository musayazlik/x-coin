// TradingViewWidget.jsx
import React, {memo, useRef} from "react";
import Layout from "@/layouts/homeLayout";
import {useRouter} from "next/router";

function OilPage() {
  const container = useRef();
  const {locale} = useRouter();

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1
          className=" text-3xl sm:text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Petrol</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 font-normal mb-2">
          Bu sayfada forex piyasası olan Petrol ile ilgili bilgiler
          alabilirsiniz..
        </p>
      </div>

      <div className="tradingview-widget-container" ref={container}>

      </div>
    </Layout>
  );
}

export default memo(OilPage);
