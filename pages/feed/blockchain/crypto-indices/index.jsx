import React, {useEffect, useState} from "react";
import Layout from "@/layouts/homeLayout";
import axios from "axios";
import {FiTrendingDown, FiTrendingUp} from "react-icons/fi";
import {useAppContext} from "@/context";
import StarButton from "@/components/starButton";
import {toast} from "react-toastify";

const TotalMarketCap = () => {
  const [data, setData] = useState(null);
  const {isServiceLoading, setIsServiceLoading} = useAppContext();

  const fetchData = () => {
    axios({
      method: "get",
      url: "/api/kripto?value=totalmc",
    })
      .then((response) => {
        setIsServiceLoading(false);
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
        setIsServiceLoading(false);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  useEffect(() => {
    setIsServiceLoading(true);
    setTimeout(() => {
      fetchData();
    }, 5000);
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
          <h1
            className=" text-3xl sm:text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
            <span className="text-indigo-600">
              Kripto Endeskleri
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-normal mb-2">
            Bu sayfadan kripto endeskleri ile ilgili bilgiler alabilirsiniz..
          </p>
        </div>

        <section className="dark:bg-zinc-800 dark:text-gray-100">
          <div className="container mx-auto  sm:p-6 overflow-x-auto">
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
              <tbody
                className="space-y-6 text-center divide-zinc-700/50 odd:bg-transparent ">
              {data &&
                data.map((item, index) => {
                  return (
                    <tr
                      className="odd:bg-zinc-900/40 rounded-lg py-2"
                      key={index}
                    >
                      <td className=" py-2 px-3">
                        <StarButton/>
                      </td>
                      <td scope="row" className="text-left ">
                        <h3 className="py-3 px-4">{item.key}</h3>
                      </td>
                      <td>
                        {item.value1 < item.value2 && (
                          <span className="block text-sm text-red-600">
                              <div
                                className="flex justify-center gap-2 items-center">
                                <FiTrendingDown/>{" "}
                                {convertToMillion(item.value2)}
                              </div>
                            </span>
                        )}

                        {item.value1 > item.value2 && (
                          <span
                            className=" text-sm text-green-600 flex justify-center gap-2 items-center">
                              <FiTrendingUp/> {convertToMillion(item.value2)}
                            </span>
                        )}

                        {item.value1 === item.value2 && (
                          <span
                            className=" text-sm text-gray-400 flex justify-center gap-2 items-center">
                              {convertToMillion(item.value2)}
                            </span>
                        )}
                      </td>
                    </tr>
                  );
                })}

              {isServiceLoading && (
                <tr className="odd:bg-zinc-900/40 rounded-lg py-2">
                  <td colSpan="3" className="text-left ">
                    <h3 className="py-3 px-4 text-center">
                      Lütfen bekleyiniz..
                    </h3>
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TotalMarketCap;
