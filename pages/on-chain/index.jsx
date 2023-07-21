import React from "react";
import Layout from "../layout";
import { useSession } from "next-auth/react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className=" mx-auto mb-8 mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">On-Chain</span>
        </h1>
        <p className="text-base text-gray-500 font-light mb-2">
          On-Chain, kullanıcıların düşüncelerini ve fikirlerini dünyayla
          paylaşmalarını sağlayan merkezi olmayan bir sosyal medya platformudur.
          Kullanıcıların düşünce ve fikirlerini dünya ile paylaşabilecekleri bir
          platformdur.
        </p>
      </div>

      <div className="flex flex-col gap-4  pb-10">
        <div className="card w-full bg-zinc-900 px-4  rounded-xl py-4">
          <div className="cardHeader h-[300px] rounded-lg">
            <img
              src={session?.user?.image}
              alt=""
              className="w-full object-cover h-full rounded-lg"
            />
          </div>
          <div className="cardBody">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-col  mt-4">
                  <Link href="/on-chain/1">
                    <h2 className="text-xl font-semibold hover:text-rose-600 duration-300 cursor-pointer text-zinc-400 leading-tight">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum, quis.
                    </h2>
                  </Link>
                  <p className="text-base mt-2 mb-4 text-gray-600 leading-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestiae, voluptate iste, quaerat maxime cum
                    facere quod voluptatum esse vel impedit praesentium. Non
                    illum beatae atque hic deserunt quam quisquam!
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      <img
                        src="/avatar.jpg"
                        alt=""
                        className="w-8 h-8 max-h-8 flex-shrink rounded-full object-cover border-2 border-zinc-400"
                      />
                      <div className="flex flex-col ">
                        <h4 className="text-md font-semibold text-zinc-400 leading-tight">
                          Musa Yazlık
                        </h4>
                        <p className="text-sm text-gray-600 leading-normal">
                          Admin
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Link
                        href="/on-chain/1"
                        className="border-2 border-rose-600 hover:bg-rose-600 hover:text-rose-50 hover:outline-2 hover:outline-dotted hover:outline-offset-4 outline-offset-0 outline-rose-700 outline-2  px-4 py-2 rounded-lg text-rose-600 duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-rose-600/50"
                      >
                        <span>Devamını Oku</span>
                        <FiArrowRight className="inline-block" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full flex flex-col lg:flex-row gap-4 bg-zinc-900 px-4  rounded-xl py-4">
          <div className="cardHeader h-[250px] lg:h-auto min-w-[220px] rounded-lg">
            <img
              src={session?.user?.image}
              alt=""
              className="w-full object-cover h-full  rounded-lg"
            />
          </div>
          <div className="cardBody">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <Link href="/on-chain/1">
                  <h2 className="text-lg sm:text-xl font-semibold hover:text-rose-600 duration-300 cursor-pointer text-zinc-400 leading-tight">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Harum, quis.
                  </h2>
                </Link>
                <p className="text-sm sm:text-base mt-2 mb-4 text-gray-600 leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium molestiae, voluptate iste, quaerat maxime cum
                  facere quod voluptatum esse vel impedit praesentium. Non illum
                  beatae atque hic deserunt quam quisquam!
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 ">
                <div className="flex gap-2">
                  <img
                    src="/avatar.jpg"
                    alt="avatar"
                    className="w-8 h-8 max-h-8 flex-shrink rounded-full object-cover border-2 border-zinc-400"
                  />
                  <div className="flex flex-col ">
                    <h2 className="text-md font-semibold text-zinc-400 leading-tight">
                      Musa Yazlık
                    </h2>
                    <p className="text-sm text-gray-600 leading-normal">
                      Admin
                    </p>
                  </div>
                </div>
                <div className="">
                  <Link
                    href="/on-chain/1"
                    className="border-2 border-rose-600 hover:bg-rose-600 hover:text-rose-50 hover:outline-2 hover:outline-dotted hover:outline-offset-4 outline-offset-0 outline-rose-700 outline-2  px-4 py-2 rounded-lg text-rose-600 duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-rose-600/50"
                  >
                    <span>Devamını Oku</span>
                    <FiArrowRight className="inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
