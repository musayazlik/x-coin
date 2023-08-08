// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import Layout from "@pages/layout";
import { useRouter } from "next/router";


function DaxPage() {
  const container = useRef();
  const {locale} = useRouter();

  useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "symbols": [
            [
              "EURUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "500",
          "locale": "${locale}",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Percentage",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "12",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "backgroundColor": "#09090b",
          "lineType": 0,
        
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "downColor": "#f7525f",
          "upColor": "#22ab94",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;
        container.current.appendChild(script);
      },
      [locale]
  );

  return (
      <Layout >

        <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
          <h1 className=" text-3xl sm:text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
            <span className="text-indigo-600">EUR/USD</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-normal mb-2">
            Bu sayfada forex piyasası olan EUR/USD ile ilgili bilgiler alabilirsiniz..
          </p>
        </div>

        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Layout>
  );
}

export default memo(DaxPage);
