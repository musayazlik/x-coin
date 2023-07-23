import React from "react";
import Layout from "../layout";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import DateDayMonthYear from "@helpers/datedaymonthyear";

const BreakAndIncom = () => {
  const router = useRouter();
  const [blogData, setBlogData] = React.useState([]);
  return (
    <Layout>
      <div className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-custom_pink">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Kırılım ve Uyumsuzlukları Yönetimi
            </h1>
            <p className="sm:text-sm text-gray-400">
              Kırılım ve Uyumsuzlukları yönetmek için bu sayfayı
              kullanabilirsiniz.
            </p>
          </div>

          <button
            onClick={() => {
              router.push(`/dashboard/break-and-incom/add`);
            }}
            className="bg-custom_green duration-300 bg-green-600 text-green-800 font-medium pl-2 pr-4 py-2 rounded-md hover:bg-custom_green/20 hover:text-custom_green border-2 border-green-700 flex items-center gap-2  whitespace-nowrap"
          >
            <FiPlus className="inline-block " />
            Ekle
          </button>
        </div>

        <div className="contentArea w-full  px-4 overflow-x-auto mt-6">
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto ">
              <div className="py-2 ">
                <div className="">
                  <table className="min-w-full">
                    <thead className="bg-zinc-800 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Küçük Resim
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left "
                        >
                          Başlığı
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Yayın Tarihi
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Yayın Durumu
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Öne Çıkarma Durumu
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogData &&
                        blogData?.map((item, index) => {
                          return (
                            <tr key={item._id} className="bg-zinc-700 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                                {index + 1}
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                <img
                                  src={item.thumbnail}
                                  alt=""
                                  width={40}
                                  height={40}
                                  quality={20}
                                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover rounded-md border-2 border-zinc-800"
                                />
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap   ">
                                {item.title.slice(0, 30) + "..."}
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                {DateDayMonthYear({ value: item.createdAt })}
                              </td>

                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                {item.status ? (
                                  <span className="bg-green-500 text-green-700 px-2 py-1 rounded-md inline-flex justify-center border-2 border-green-800 items-center text-center">
                                    Yayında
                                  </span>
                                ) : (
                                  <span className="bg-red-500 text-red-700 px-2 py-1 rounded-md inline-flex justify-center items-center text-center border-2 border-red-600">
                                    Yayında Değil
                                  </span>
                                )}
                              </td>
                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                {item.highlightsStatus ? (
                                  <span className="bg-yellow-400 text-yellow-600 px-2 py-1 rounded-md inline-flex justify-center border-2 border-yellow-600 items-center text-center">
                                    Öne Çıkarıldı
                                  </span>
                                ) : (
                                  <span className="bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md inline-flex border-2 border-zinc-950 justify-center items-center text-center">
                                    Öne Çıkarılmadı
                                  </span>
                                )}
                              </td>
                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                <div className="flex items-stretch justify-end gap-4 h-full ">
                                  <Link
                                    href={`/admin/blogs/edit/${item._id}`}
                                    className="bg-custom_blue text-blue-800 px-4 py-2 rounded-md hover:bg-custom_blue/80 transition duration-300 ease-in-out "
                                  >
                                    Düzenle
                                  </Link>
                                  <button
                                    onClick={() => {
                                      blogDelete(item._id);
                                    }}
                                    className="bg-red-500 text-red-800 px-4 py-2 rounded-md hover:bg-red-500/80 transition duration-300 ease-in-out"
                                  >
                                    Sil
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}

                      {blogData?.length === 0 && (
                        <tr className="bg-zinc-900/50 text-zinc-400">
                          <td
                            colSpan="7"
                            className="text-center py-6 font-medium text-lg"
                          >
                            Henüz blog yazısı eklenmemiş.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BreakAndIncom;
