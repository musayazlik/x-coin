import React from "react";
import Layout from "@layouts/feedLayout";
import { useSession, getSession } from "next-auth/react";
import axios from "axios";

const SubIndices = ({ altIndexes }) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Alt Endeksler</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium mb-2">
          Alt endeksler sayfası alt endekslerin listelendiği sayfadır.
        </p>
      </div>

      <section className="dark:bg-zinc-800 dark:text-gray-100">
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-start">İsim</th>
                <th>Market</th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Değeri </h2>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-zinc-700/50 odd:bg-transparent">
              {altIndexes &&
                altIndexes.map((item, index) => {
                  return (
                    <tr
                      className="odd:bg-zinc-900/40 rounded-lg py-2"
                      key={index}
                    >
                      <th scope="row" className="text-left">
                        <h3 className="py-3 px-2 whitespace-nowrap text-sm font-medium">
                          {item.name}
                        </h3>
                      </th>
                      <th scope="row" className="text-left">
                        <p className="py-3 px-2  text-center text-sm font-light ">
                          {item.market}
                        </p>
                      </th>

                      <th scope="row" className="text-left">
                        <p className="py-3 px-2  text-center text-sm font-light">
                          {item.last} $
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

export default SubIndices;

export async function getStaticProps() {
  try {
    // CoinGecko API'dan alt endekslerini al
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/indexes"
    );
    const altIndexes = response.data;

    return {
      props: {
        altIndexes,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        altIndexes: [],
      },
    };
  }
}
