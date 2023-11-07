import DashboardLayout from "@/layouts/dashboardLayout";
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {useSession} from "next-auth/react";
import {FiPlus} from "react-icons/fi";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip
} from "@nextui-org/react";
import {RiDeleteBinFill, RiEditFill, RiEyeFill} from "react-icons/ri";
import Image from "next/image";


const Posts = ({data}) => {
  const router = useRouter();
  const {data: session} = useSession();
  const [selectedColor, setSelectedColor] = useState("default");

  const postDelete = async (e, id) => {
    const cookie = document.cookie;
    e.preventDefault()
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
        await axios.delete(`/api/dashboard/posts?id=${id}`, {
          headers: {
            cookie: cookie,
          },
        });
        router.push("/dashboard/posts");
        toast.success("İçerik silindi", {
          theme: "dark", autoClose: 1500,
        });
      }
    });
  };

  return (<DashboardLayout>
    <div
      className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-rose-600">
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-lg sm:text-2xl font-bold text-white">
            Yazılar İçerik Yönetimi
          </h1>
          <p className="sm:text-sm text-gray-400">
            Bu sayfada yazılarınızı yönetebilirsiniz.
          </p>
        </div>

        <button
          onClick={() => {
            router.push(`/dashboard/posts/add`);
          }}
          className="bg-custom_green duration-300 bg-green-600 text-green-800 font-medium pl-2 pr-4 py-2 rounded-md hover:bg-custom_green/20 hover:text-custom_green border-2 border-green-700 flex items-center gap-2  whitespace-nowrap"
        >
          <FiPlus className="inline-block "/>
          Ekle
        </button>
      </div>

      <div className="contentArea w-full  px-4 overflow-x-auto mt-6">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto ">
            <div className="py-2 ">
              <div className="">

                <Table color={selectedColor}
                       selectionMode="single"
                       aria-label="Example static collection table">
                  <TableHeader className={"w-full"}>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Image</TableColumn>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Ana Kategori</TableColumn>
                    <TableColumn>Kategori</TableColumn>
                    <TableColumn>Alt Kategori</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn
                      className={"w-2/12 "}>

                    </TableColumn>
                  </TableHeader>
                  {data.length > 0 && (
                    <TableBody>

                      {data.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            {
                              index + 1
                            }
                          </TableCell>
                          <TableCell>
                            <Image src={item.image} alt={"Post Image"}
                                   width={50}
                                   height={50} className={"border-4" +
                              " border-gray-600 rounded-lg min-w-[50px]" +
                              " min-h-[50px] object-cover"}/>
                          </TableCell>
                          <TableCell>
                            {item.title || "-"}
                          </TableCell>
                          <TableCell>
                            {
                              item.description.length > 160 ? item.description.splice(0, 160) + "..." : item.description || "-"
                            }
                          </TableCell>
                          <TableCell className={"whitespace-nowrap capitalize"}>
                            {item?.homeCategory.replace(/-/g, " ") || "-"}
                          </TableCell>
                          <TableCell className={"whitespace-nowrap capitalize"}>
                            {item.category.replace(/-/g, " ") || "-"}
                          </TableCell>
                          <TableCell className={"whitespace-nowrap capitalize"}>
                            {item.subCategory.replace(/-/g, " ") || "-"}
                          </TableCell>


                          <TableCell>
                            <Chip className="capitalize"
                                  color={
                                    item.status ? "success" : "danger"
                                  } size="sm"
                                  variant="flat">
                              {item.status ? "Yayında" : "Yayında Değil"}
                            </Chip>
                          </TableCell>
                          <TableCell>
                            <div
                              className="relative flex items-center gap-4 justify-center">
                              <Tooltip content="Detay">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <RiEyeFill fontSize={24}/>
              </span>
                              </Tooltip>
                              <Tooltip content="Düzenle"

                              >
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  router.push(`/dashboard/posts/edit/${item._id}`);
                }
                }
              >
                <RiEditFill fontSize={24}/>
              </span>
                              </Tooltip>
                              <Tooltip color="danger" content="Sil">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiDeleteBinFill fontSize={24} onClick={
                  (e) => {
                    postDelete(e, item._id);
                  }
                }/>
              </span>
                              </Tooltip>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}


                    </TableBody>
                  )}

                  {data.length === 0 && (
                    <TableBody
                      emptyContent={"Henüz içerik eklenmemiş"}>{[]}</TableBody>
                  )}
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>);
};

export default Posts;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(`/api/dashboard/posts`, {
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
