import React from "react";
import Layout from "../layout";
import { useSession, getSession } from "next-auth/react";
import axios from "axios";

const AltCoinMix = ({ altcoins }) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Altcoin Mix</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium mb-2">
          Bu sayfada Alt endekslerini görebilirsiniz.
        </p>
      </div>

      <section className="dark:bg-zinc-800 dark:text-gray-100">
        <div className="container mx-auto py-6 overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="text-sm">
                <th className="text-start">İsim</th>
                <th className="px-6 text-center py-4">Sembol</th>
                <th className="px-6 text-center py-4">Piyasa Değeri</th>
                <th className="px-6 text-center py-4">Piyasa Sıralaması</th>
                <th className="px-6 text-center">
                  Tamamen Seyreltilmiş Değerleme
                </th>
                <th className="px-6 text-center py-4">Toplam İşlem Hacmi</th>
                <th className="px-6 text-center py-4">
                  En Yüksek Fiyat (Son 24 saat)
                </th>
                <th className="px-6 text-center py-4">
                  En Düşük Fiyat (Son 24 saat)
                </th>
                <th className="px-6 text-center py-4">
                  Fiyat Değişimi(Son 24 saat)
                </th>
                <th className="px-6 text-center py-4">Güncel Fiyat</th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-zinc-700/50 odd:bg-transparent">
              {altcoins &&
                altcoins.map((altcoin, index) => {
                  return (
                    <tr
                      className="odd:bg-zinc-900/40 rounded-lg py-2"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="text-left flex gap-2 items-center px-2"
                      >
                        <img src={altcoin.image} alt="" className="w-8 h-8" />
                        <h3 className="py-3 px-2 whitespace-nowrap">
                          {altcoin.name}
                        </h3>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.symbol}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.market_cap}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.market_cap_rank}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.fully_diluted_valuation}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.total_volume}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.high_24h}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.low_24h}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm">
                          {altcoin.price_change_24h}
                        </p>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-8 font-normal text-center text-sm whitespace-nowrap">
                          {altcoin.current_price} $
                        </p>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default AltCoinMix;

export async function getStaticProps() {
  try {
    // CoinGecko API'dan altcoin verilerini al
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    );
    const altcoins = response.data;

    return {
      props: {
        altcoins,
      },
      revalidate: 3600, // Her saatte bir yeniden oluştur
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        altcoins: [],
      },
    };
  }
}
