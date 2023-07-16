import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import Image from "next/image";
import axios from "axios";

const TotalMarketCap = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    axios({
      method: "get",
      url: "/api/kripto",
    })
      .then((response) => {
        console.log(response.data.data.totalMarketCap);
        const key = Object.keys(response.data.data.totalMarketCap);
        const value = Object.values(response.data.data.totalMarketCap);

        const dataArray = [];

        if (data === null) {
          for (let i = 0; i < key.length; i++) {
            dataArray.push({
              key: key[i],
              value1: value[i],
              value2: value[i],
            });
          }

          setData(dataArray);
        } else {
          for (let i = 0; i < key.length; i++) {
            dataArray.push({
              key: key[i],
              value1: data[i].value1,
              value2: value[i],
            });

            setData(dataArray);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  setTimeout(() => {
    fetchData();
  }, 1000);

  return (
    <Layout>
      <div className=" mt-12">
        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-zinc-500">
            <span className="text-indigo-600">Total</span> Market Cap
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div className="container mx-auto p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">Total </h2>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-6 text-center divide-y divide-zinc-700/50 odd:bg-gray-400/50 border-2 border-zinc-500">
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr className="odd:bg-gray-600/40" key={index}>
                        <th scope="row" className="text-left">
                          <h3 className="py-3 px-2">{item.key}</h3>
                        </th>
                        <td>
                          {item.value1 < item.value2 ? (
                            <span className="block text-sm text-red-600">
                              {item.value2}
                            </span>
                          ) : (
                            <span className="block text-sm text-green-600">
                              {item.value2}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TotalMarketCap;
