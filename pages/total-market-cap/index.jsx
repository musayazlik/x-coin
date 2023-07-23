import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import Image from "next/image";
import axios from "axios";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { useAppContext } from "@/context";

const TotalMarketCap = () => {
  const [data, setData] = useState(null);

  const { isServiceLoading, setIsServiceLoading } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      axios({
        method: "get",
        url: "/api/kripto",
      })
        .then((response) => {
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
    }, 1000);
  }, []);

  function convertToMillion(number) {
    const million = 1000000;
    const millionValue = number / million;
    const roundedValue = Math.round(millionValue * 10) / 10;
    const formattedValue = roundedValue.toLocaleString();

    return formattedValue + "M";
  }

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
                <tr className="">
                  <th className="text-start px-4 py-3"></th>
                  <th className="text-start px-4 py-3">İsim</th>
                  <th scope="col">
                    <h2 className=" text-lg font-medium  px-4 py-3">
                      Total Market Değeri{" "}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-6 text-center divide-zinc-700/50 odd:bg-transparent ">
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr className="odd:bg-zinc-900/40" key={index}>
                        <td className="text-left px-4 py-3"></td>
                        <td scope="row" className="text-left ">
                          <h3 className="py-3 px-4">{item.key}</h3>
                        </td>
                        <td>
                          {item.value1 < item.value2 ? (
                            <span className="block text-sm text-red-600">
                              <div className="flex justify-center gap-2 items-center">
                                <FiTrendingDown />{" "}
                                {convertToMillion(item.value2)}
                              </div>
                            </span>
                          ) : (
                            <span className=" text-sm text-green-600 flex justify-center gap-2 items-center">
                              <FiTrendingUp /> {convertToMillion(item.value2)}
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
