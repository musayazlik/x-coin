import React from "react";
import Layout from "@layouts/homeLayout";
import axios from "axios";
import Head from "next/head";

const OnChainPage = ({data}) => {
  return (
    <>
      <Head>
        <title>On-Chain | Thader Haber</title>
        <meta
          name="description"
          content="On-Chain, kullanıcıların düşüncelerini ve fikirlerini dünyayla paylaşmalarını sağlayan merkezi olmayan bir sosyal medya platformudur. Kullanıcıların düşünce ve fikirlerini dünya ile paylaşabilecekleri bir platformdur."
        />
        <meta
          name="keywords"
          content="On-Chain, on-chain, onchain, OnChain, Onchain, on Chain, on chain, onchain, On Chain, On chain"
        />
      </Head>

      <Layout>
        <div className=" mx-auto mb-8 mt-8 text-center relative z-0 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
            <span className="text-indigo-600">On-Chain Analiz</span>
          </h1>
          <p className="text-base text-gray-500 font-light mb-2">
            Bu sayfadan On-Chain analizlerini inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col gap-4  pb-10">
          Analiz Notları

        </div>
      </Layout>
    </>
  );
};

export default OnChainPage;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(`${process.env.APP_URL}/api/onchain`, {
    headers: {
      cookie: cookie,
    },
  });

  return {
    props: {
      data: data.data,
    },
  };
}
