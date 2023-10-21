import React from "react";
import Layout from "@/layouts/feedLayout";
import axios from "axios";
import Head from "next/head";

const AltCoinMix = ({ altcoins }) => {
  return (
    <>
      <Head>
        <title>Altcoin Mix | Thader Haber</title>
        <meta
          name="description"
          content="Altcoin Mix, kullanıcıların düşüncelerini ve fikirlerini dünyayla paylaşmalarını sağlayan merkezi olmayan bir sosyal medya platformudur. Kullanıcıların düşünce ve fikirlerini dünya ile paylaşabilecekleri bir platformdur."
        />
        <meta
          name="keywords"
          content="Altcoin mix, altcoin mix, altcoinmix, Altcoinmix, altcoinmix, altcoin mix, altcoin mix, Altcoin Mix, Altcoin mix"
        />
      </Head>
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
                <tr className="text-sm ">
                  <th className="text-start font-medium">İsim</th>
                  <th className="px-6 text-center py-4 font-medium">Sembol</th>
                  <th className="px-6 text-center py-4 font-medium">
                    Piyasa Değeri
                  </th>
                  <th className="px-6 text-center py-4 font-medium">
                    Piyasa Sıralaması
                  </th>
                  <th className="px-6 text-center font-medium">
                    Tamamen Seyreltilmiş Değerleme
                  </th>
                  <th className="px-6 text-center py-4 font-medium">
                    Toplam İşlem Hacmi
                  </th>
                  <th className="px-6 text-center py-4 font-medium">
                    En Yüksek Fiyat (Son 24 saat)
                  </th>
                  <th className="px-6 text-center py-4 font-medium">
                    En Düşük Fiyat (Son 24 saat)
                  </th>
                  <th className="px-6 text-center py-4 font-medium">
                    Fiyat Değişimi(Son 24 saat)
                  </th>
                  <th className="px-6 text-center py-4font-medium">
                    Güncel Fiyat
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-6 text-center divide-zinc-700/50 odd:bg-transparent">
                {altcoins &&
                  altcoins?.map((altcoin, index) => {
                    return (
                      <tr
                        className="odd:bg-zinc-900/40 rounded-lg py-2"
                        key={index}
                      >
                        <th
                          scope="row"
                          className="text-left flex gap-2 items-center px-2"
                        >
                          <img
                            src={altcoin.image}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                          <h3 className="py-3 pl-3 pr-6 whitespace-nowrap text-sm font-medium">
                            {altcoin.name}
                          </h3>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.symbol}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.market_cap}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.market_cap_rank}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.fully_diluted_valuation}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.total_volume}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.high_24h}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.low_24h}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm">
                            {altcoin.price_change_24h}
                          </p>
                        </th>
                        <th scope="row" className="text-left">
                          <p className="py-3 px-8 font-light text-center text-sm whitespace-nowrap">
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
    </>
  );
};

export default AltCoinMix;

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.APP_URL}/api/kripto?value=subcoinmix&page=1`
  );
  const altcoins = response.data.data.subcoinmix;

  return {
    props: {
      altcoins,
    },
  };
}
