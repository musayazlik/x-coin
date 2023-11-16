import React from "react";
import DashboardLayout from "@/layouts/dashboardLayout";
import {useRouter} from "next/router";
import axios from "axios";
import {useSession} from "next-auth/react";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
  User,
} from "@nextui-org/react";
import {RiSearch2Fill} from "react-icons/ri";
import {BiChevronDown, BiDotsVertical} from "react-icons/bi";
import {capitalize} from "@/utils/capitalize";
import Swal from "sweetalert2";
import {toast} from "react-toastify";


const INITIAL_VISIBLE_COLUMNS = ["name", "username", "role", "status", "actions"];

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "USERNAME", uid: "username", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Aktif", uid: "aktif"},
  {name: "Pasif", uid: "pasif"},
];


const Users = ({data}) => {
  const router = useRouter();
  const {data: session} = useSession();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const isAdminHandle = async (user, role) => {
    const cookie = document.cookie;
    Swal.fire({
      title: "Emin misiniz?",
      text: `${user.name} isimli kullanıcıyı ${role === "admin" ? "admin" : "kullanıcı"} yapmak istediğinize emin misiniz?`,
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: `${role === "admin" ? "Admin" : "Kullanıcı"} Yap!`,
      cancelButtonText: "Hayır, vazgeç!",

    }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.patch(`/api/dashboard/users?id=${user._id}&role=${role}&status=isAdmin`, {
            headers: {
              cookie: cookie,
            },
          });
          router.push("/dashboard/users");
          toast.success("Kullanıcı rolü değiştirildi", {
            theme: "dark", autoClose: 1500,
          });
        }
      }
    )
  }

  const isStatusHandle = async (user, isActive) => {
    const cookie = document.cookie;
    Swal.fire({
      title: "Emin misiniz?",
      text: `${user.name} isimli kullanıcının üyeliğini ${isActive ? "aktif" : "pasif"} yapmak istediğinize emin misiniz?`,
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: `${isActive ? "Aktif" : "Pasif"} Yap!`,
      cancelButtonText: "Hayır, vazgeç!",

    }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.patch(`/api/dashboard/users?id=${user._id}&isActive=${isActive}&status=isActive`, {
            headers: {
              cookie: cookie,
            },
          });
          router.push("/dashboard/users");
          toast.success("Kullanıcı durumu değiştirildi", {
            theme: "dark", autoClose: 1500,
          });
        }
      }
    )
  }

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {

      case "id":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._id}</p>
          </div>
        );

      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.image}}
            description={user.username}
            name={cellValue}
          >
            {user.email}
          </User>
        );

      case "username":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p
              className="text-bold text-tiny capitalize text-default-400">{user.username}</p>
          </div>
        );

      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p
              className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
          </div>
        );


      case "status":
        return (
          <Chip className="capitalize"
                color={user.isActive ? "success" : "danger"}
                size="sm" variant="flat">
            {user.isActive ? "Aktif" : "Pasif"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <BiDotsVertical fontSize={24} className="text-default-300"/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu className={"flex flex-col gap-2"}>
                <DropdownItem color={"warning"} variant={"bordered"}
                              className={"duration-300"}
                              onClick={() => {
                                isAdminHandle(user, user.role === "admin" ? "user" : "admin")
                              }}

                >
                  {user.role === "admin" ? "Kullanıcı Yap" : "Admin Yap"}
                </DropdownItem>

                <DropdownItem color={"default"} variant={"bordered"}
                              className={"duration-300"}
                              onClick={() => {
                                isStatusHandle(user, user.isActive ? false : true)
                              }}

                >
                  {user.isActive ? "Pasif Yap" : "Aktif Yap"}
                </DropdownItem>
                <DropdownItem color={"danger"}
                              variant={"bordered"}
                              className={"duration-300"}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<RiSearch2Fill fontSize={24}/>}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<BiChevronDown className="text-small"/>}
                        variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<BiChevronDown className="text-small"/>}
                        variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>


          </div>
        </div>
        <div className="flex justify-between items-center">
          <span
            className="text-default-400 text-small">Total {data.length} data</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    data.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">

        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat"
                  onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat"
                  onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);


  return (
    <DashboardLayout>
      <div
        className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-rose-600">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Kullanicilar Yönetimi
            </h1>
            <p className="sm:text-sm text-gray-400">
              Kullanicilari yönetmek için bu sayfayı kullanabilirsiniz.
            </p>
          </div>


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
                    aria-label="Example table with custom cells, pagination and sorting"
                    isHeaderSticky
                    bottomContent={bottomContent}
                    bottomContentPlacement="outside"
                    classNames={{
                      wrapper: "max-h-[382px]",
                    }}
                    sortDescriptor={sortDescriptor}
                    topContent={topContent}
                    topContentPlacement="outside"
                    onSelectionChange={setSelectedKeys}
                    onSortChange={setSortDescriptor}
                  >
                    <TableHeader columns={headerColumns}>
                      {(column) => (
                        <TableColumn
                          key={column.uid}
                          align={column.uid === "actions" ? "center" : "start"}
                          allowsSorting={column.sortable}
                        >
                          {column.name}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody emptyContent={"No data found"}
                               items={sortedItems}>
                      {(item) => (
                        <TableRow key={item._id}>
                          {(columnKey) =>
                            <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                      )}
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
  const {data} = await axios.get(
    `/api/dashboard/users`,
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
