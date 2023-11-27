import DashboardLayout from "@/layouts/dashboardLayout";
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {useSession} from "next-auth/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure
} from "@nextui-org/react";
import {RiDeleteBinFill, RiEyeFill} from "react-icons/ri";


const Messages = ({data}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [openModalData, setOpenModalData] = useState({});
  const router = useRouter();
  const {data: session} = useSession();
  const [selectedColor, setSelectedColor] = useState("default");

  const messageDelete = async (e, id) => {
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
        await axios.delete(`/api/dashboard/contact?id=${id}`, {
          headers: {
            cookie: cookie,
          },
        });
        router.push("/dashboard/messages");
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
            Mesajlar
          </h1>
          <p className="sm:text-sm text-gray-400">
            Bu sayfada sitenize gelen mesajları görebilirsiniz.
          </p>
        </div>
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
                    <TableColumn>İsim</TableColumn>
                    <TableColumn>Soy İsim</TableColumn>
                    <TableColumn>E-Mail</TableColumn>
                    <TableColumn>Mesaj</TableColumn>
                    <TableColumn></TableColumn>

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
                            {item.name || "-"}
                          </TableCell>
                          <TableCell>
                            {item.lastname || "-"}
                          </TableCell>
                          <TableCell>
                            {item.email || "-"}
                          </TableCell>
                          <TableCell>
                            {item.message.length > 80 ? item.message.slice(0, 80) + "..." : item.message}
                          </TableCell>

                          <TableCell>
                            <div
                              className="relative flex items-center gap-4 justify-center">
                              <Tooltip content="Detay" color={"primary"}>
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >

                <Button color="primary" variant="light" onClick={() => {
                  onOpen()
                  setOpenModalData(item)
                }}


                        isIconOnly={true}>

                   <RiEyeFill fontSize={24}/>
                </Button>



              </span>
                              </Tooltip>

                              <Tooltip color="danger" content="Sil">
                              <span
                                className="text-lg text-danger cursor-pointer active:opacity-50">
                                <RiDeleteBinFill fontSize={24} onClick={
                                  (e) => {
                                    messageDelete(e, item._id);
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

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {openModalData.name} {openModalData.lastname}
            </ModalHeader>
            <ModalBody>
              <p className={"font-bold text-xl"}>
                {openModalData.email}
              </p>
              <p>
                {openModalData.message}
              </p>

            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="shadow"
                      className={"flex items-center"} onClick={
                (e) => {
                  messageDelete(e, openModalData._id);
                }
              }>
                <RiDeleteBinFill fontSize={20}/>
                <span className={"font-medium text-base"}>
                  Mesajı Sil
                </span>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </DashboardLayout>);
};

export default Messages;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const {data} = await axios.get(`/api/dashboard/contact`, {
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
