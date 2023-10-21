import React from "react";
import FeedLayout from "@/layouts/feedLayout";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import DateDayMonthYear from "@helpers/datedaymonthyear";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const MembershipSales = ({ data }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const userDelete = async (id) => {
    const cookie = document.cookie;

    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu işlemi geri alamazsınız!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Evet, sil!",
      cancelButtonText: "Hayır, vazgeç!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/api/dashboard/users?id=${id}`, {
          headers: {
            cookie: cookie,
          },
        });
        router.push("/dashboard/users");
        toast.success("Kullanıcı başarıyla silindi!", {
          theme: "dark",
          autoClose: 1500,
        });
      }
    });
  };

  const handleUserActive = async (id, isActive) => {
    const cookie = document.cookie;

    if (session.user.role === "admin" && id === session.user.id) {
      toast.error("Admin'in aktiflik durumu değiştirilemez", {
        theme: "dark",
        autoClose: 1500,
      });
      return;
    }

    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu işlemi geri alamazsınız!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: isActive ? "Aktif Yap " : "Pasif Yap",
      cancelButtonText: "Hayır, vazgeç!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.patch(
          `/api/dashboard/users`,
          {
            id: id,
            status: "isActive",
            isActive: isActive,
          },
          {
            headers: {
              cookie: cookie,
            },
          }
        );
        router.push("/dashboard/users");
        toast.success("Kullanıcı başarıyla güncellendi!", {
          theme: "dark",
          autoClose: 1500,
        });
      }
    });
  };

  return (
    <Layout>
      <div className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-rose-600">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Üyelik Satışı
            </h1>
            <p className="sm:text-sm text-gray-400">
              Bu sayfada üyelik satışı ile ilgili işlemleri yapabilirsiniz.
            </p>
          </div>
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
                          Üye Resmi
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left "
                        >
                          Üye Kullanıcı Adı
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Ödeme Türü
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Üyelik Türü
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Üyelik Başlangıç Tarihi
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Üyelik Bitiş Tarihi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.map((item, index) => {
                          return (
                            <tr key={item._id} className="bg-zinc-700 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                                {index + 1}
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                <img
                                  src={item?.user?.image || "/robot.gif"}
                                  alt=""
                                  width={40}
                                  height={40}
                                  quality={20}
                                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover rounded-md border-2 border-zinc-800"
                                />
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap   ">
                                {item.user.username}
                              </td>

                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap   ">
                                {item.paymentMethod}
                              </td>
                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                {item.memberShipType === "free" && (
                                  <span className="bg-zinc-600 text-zinc-800 px-2 py-1 rounded-md">
                                    Ücretsiz
                                  </span>
                                )}

                                {item.memberShipType === "standard" && (
                                  <span className="bg-slate-600 text-slate-800 px-2 py-1 rounded-md">
                                    Standart
                                  </span>
                                )}

                                {item.memberShipType === "premium" && (
                                  <span className="bg-yellow-600 text-yellow-800 px-2 py-1 rounded-md">
                                    Premium
                                  </span>
                                )}
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                {DateDayMonthYear({
                                  value: item.memberShipDate,
                                })}
                              </td>

                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                {DateDayMonthYear({
                                  value: item.memberShipEndDate,
                                })}
                              </td>
                            </tr>
                          );
                        })}

                      {data?.length === 0 && (
                        <tr className="bg-zinc-900/50 text-zinc-400">
                          <td
                            colSpan="7"
                            className="text-center py-6 font-medium text-lg"
                          >
                            Hiçbir veri bulunamadı.
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

export default MembershipSales;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const { data } = await axios.get(
    `${process.env.APP_URL}/api/dashboard/membership-sales`,
    {
      headers: {
        cookie: cookie,
      },
    }
  );

  return {
    props: {
      data: data.data,
    },
  };
}
