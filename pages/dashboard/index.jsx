import React from "react";
import Layout from "./layout";
import { FiUsers } from "react-icons/fi";
import dbConnect from "@/libs/dbConnect";
import Users from "@/models/Users";
import Orders from "@/models/Orders";
import BreakAndIncom from "@/models/BreakAndIncom";
import OnChain from "@/models/OnChain";

const Dashboard = ({ users, orders, breakAndIncom, onChain }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center  w-full  mt-6">
        <h1 className="text-4xl font-semibold text-rose-700">
          Yönetici Paneli
        </h1>
        <p className="text-center text-zinc-400 ">
          Yönetici paneline hoşgeldiniz. Buradan sitenizi yönetebilirsiniz.
        </p>
      </div>

      <div className="flex  px-4 w-full gap-6  mt-12">
        <div className="card w-1/3 bg-zinc-700 rounded-md outline-2 outline-offset-4 outline-double outline-zinc-700">
          <div className="card-body flex gap-4  py-4 px-4 items-center justify-between">
            <FiUsers
              className="text-rose-800 bg-rose-600 p-2 border-2 border-rose-700 rounded-lg outline-2 outline-offset-4 outline-double outline-rose-700 "
              fontSize={48}
            />
            <div className=" text-zinc-500 text-end ">
              <h2 className="card-title font-medium">Toplam Kullanıcılar</h2>
              <p className="card-text font-bold text-3xl">{users}</p>
            </div>
          </div>
        </div>
        <div className="card w-1/3 bg-zinc-700 rounded-md outline-2 outline-offset-4 outline-double outline-zinc-700">
          <div className="card-body flex gap-4  py-4 px-4 items-center justify-between">
            <FiUsers
              className="text-emerald-800 bg-emerald-600 p-2 border-2 border-emerald-700 rounded-lg outline-2 outline-offset-4 outline-double outline-emerald-700 "
              fontSize={48}
            />
            <div className=" text-zinc-500 text-end ">
              <h2 className="card-title font-medium">Toplam Blog Yazıları</h2>
              <p className="card-text font-bold text-3xl">
                {breakAndIncom + onChain}
              </p>
            </div>
          </div>
        </div>
        <div className="card w-1/3 bg-zinc-700 rounded-md outline-2 outline-offset-4 outline-double outline-zinc-700">
          <div className="card-body flex gap-4  py-4 px-4 items-center justify-between">
            <FiUsers
              className="text-indigo-800 bg-indigo-600 p-2 border-2 border-indigo-700 rounded-lg outline-2 outline-offset-4 outline-double outline-indigo-700 "
              fontSize={48}
            />
            <div className=" text-zinc-500 text-end ">
              <h2 className="card-title font-medium">Toplam Üyelik Satışı</h2>
              <p className="card-text font-bold text-3xl">{orders}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  await dbConnect();

  const users = await Users.countDocuments({});
  const orders = await Orders.countDocuments({});
  const breakAndIncom = await BreakAndIncom.countDocuments({});
  const onChain = await OnChain.countDocuments({});

  return {
    props: {
      users: users,
      orders: orders,
      breakAndIncom: breakAndIncom,
      onChain: onChain,
    },
  };
}
