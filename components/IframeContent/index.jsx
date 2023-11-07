import Link from "next/link";
import React from "react";

const IframeContent = () => {
  return (
    <div className={"py-2"}>
      <Link href={"https://tr.tradingview.com/widget/advanced-chart/"}
            className={"text-yellow-500/50"}>
        Bu linkten </Link> Gömülü kod içerisindeki <code
      className={"bg-gray-500 text-gray-800 p-1 font-bold mx-2 rounded-lg"}>{"{}"}</code>
      tırnaklı parantez dahil olmak üzere tüm kodu kopyalayıp yapıştırınız.
    </div>

  )
}

export default IframeContent;