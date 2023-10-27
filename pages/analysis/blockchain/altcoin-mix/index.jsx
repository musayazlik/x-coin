import React from "react";
import Layout from "@/layouts/homeLayout";
import Head from "next/head";

const AltCoinMix = () => {
  return (
    <>
      <Head>
        <title>Altcoin Mix Analiz | Thader Haber</title>
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
            Bu sayfadan Altcoin Mix analizlerini inceleyebilirsiniz.
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div className="container mx-auto py-6 overflow-x-auto">
            Analiz Notları
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AltCoinMix;

