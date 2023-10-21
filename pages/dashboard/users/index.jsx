import React from "react";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useRouter } from "next/router";
import DateDayMonthYear from "@helpers/datedaymonthyear";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Users = ({ data }) => {
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
    <DashboardLayout>
      <div className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-rose-600">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Kullanicilar Yönetimi
            </h1>
            <p className="sm:text-sm text-gray-400">
              Kullanicilari yönetmek için bu sayfayı kullanabilirsiniz.
            </p>
          </div>

          {/* <button
            onClick={() => {
              router.push(`/dashboard/break-and-incom/add`);
            }}
            className="bg-custom_green duration-300 bg-green-600 text-green-800 font-medium pl-2 pr-4 py-2 rounded-md hover:bg-custom_green/20 hover:text-custom_green border-2 border-green-700 flex items-center gap-2  whitespace-nowrap"
          >
            <FiPlus className="inline-block " />
            Ekle
          </button> */}
        </div>

        <div className="contentArea w-full  px-4 overflow-x-auto mt-6">
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto ">
              <div className="py-2 ">
                <div className="">
                  {/*<table className="min-w-full">
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
                          Resim
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left "
                        >
                          Kullanıcı Adı
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Yetki Durumu
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Üyelik Turu
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Durum
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left whitespace-nowrap"
                        >
                          Kayıt Tarihi
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-zinc-400 px-6 py-4 text-left"
                        ></th>
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
                                  src={item?.image || "/robot.gif"}
                                  alt=""
                                  width={40}
                                  height={40}
                                  quality={20}
                                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover rounded-md border-2 border-zinc-800"
                                />
                              </td>
                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap   ">
                                {item.username}
                              </td>

                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                {item.role === "admin" ? "Admin" : "Kullanıcı"}
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
                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                {item.isActive ? (
                                  <span
                                    className="bg-green-600 text-green-800 px-2 py-1 rounded-md cursor-pointer"
                                    onClick={() =>
                                      handleUserActive(item._id, false)
                                    }
                                  >
                                    Aktif
                                  </span>
                                ) : (
                                  <span
                                    className="bg-red-600 text-red-800 px-2 py-1 rounded-md cursor-pointer"
                                    onClick={() =>
                                      handleUserActive(item._id, true)
                                    }
                                  >
                                    Pasif
                                  </span>
                                )}
                              </td>

                              <td className="text-sm text-zinc-400 font-light px-6 py-4 whitespace-nowrap">
                                {DateDayMonthYear({ value: item.createdAt })}
                              </td>
                              <td className="text-sm text-zinc-400 font-medium px-6 py-4 whitespace-nowrap">
                                <div className="flex items-stretch justify-end gap-4 h-full ">
                                  {item.role !== "admin" && (
                                    <button
                                      onClick={() => {
                                        userDelete(item._id);
                                      }}
                                      className="bg-red-500 text-red-800 px-4 py-2 rounded-md hover:bg-red-500/80 transition duration-300 ease-in-out"
                                    >
                                      Sil
                                    </button>
                                  )}
                                </div>
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
                  </table>*/}

                  <Table
                    hideHeader
                    aria-label="Example static collection table"
                  >
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>ROLE</TableColumn>
                      <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                        <TableCell>Vacation</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const { data } = await axios.get(
    `${process.env.APP_URL}/api/dashboard/users`,
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
