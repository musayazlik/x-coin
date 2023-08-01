import React, { useState } from "react";
import Layout from "../layout";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Web3 from "web3";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Packages = () => {
  const { data: session } = useSession();
  const [enabled, setEnabled] = useState("free");

  const handlePayment = async (type) => {
    const ethPriceRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );

    const ethPrice = (await ethPriceRes.json()).ethereum.usd;

    const amount =
      enabled === "free"
        ? 0
        : enabled === "standard"
        ? 49 / ethPrice
        : 99 / ethPrice;
    if (type === "metamask") {
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          const networkId = await web3.eth.net.getId();

          if (networkId !== 1 && process.env.NODE_ENV === "production") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please connect to the Ethereum Mainnet.",
            });
            return;
          }
          const toAddress = process.env.NEXT_PUBLIC_TO_ADDRESS;
          const fromAddress = (await web3.eth.getAccounts())[0];
          const message = "ssfddsfsdf";
          const data = web3.utils.asciiToHex(message);
          const value = web3.utils.toWei(
            amount.toFixed(18).toString(),
            "ether"
          );
          await web3.eth.sendTransaction({
            to: toAddress,
            from: fromAddress,
            value: value,
            data: data,
            gas: 3000000,
          });
          axios({
            method: "PATCH",
            url: "/api/pricing/pricingCrud",
            data: {
              amount: value,
              memberShipType: enabled,
              paymentMethod: "metamask",
              memberShipPriod: "monthly",
              userId: session?.user?.id,
            },
          })
            .then((res) => {
              toast("Ödeme başarılı. Üyeliğinizin tadını çıkarın. :)", {
                type: "success",
                theme: "colored",
                position: "top-right",
                autoClose: 2000,
              });
            })
            .catch((err) => {
              toast("Ödeme başarısız oldu. Lütfen tekrar deneyin.", {
                type: "error",
                theme: "colored",
                position: "top-right",
                autoClose: 2000,
              });
            });
        } catch (err) {
          toast("Ödeme başarısız oldu. Lütfen tekrar deneyin.", {
            type: "error",
            theme: "colored",
            position: "top-right",
            autoClose: 2000,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops... Metamask hatası oluştu.",
          text: "Please install MetaMask to make payments.",
        });
      }
    } else if (type === "paytr") {
    }
  };
  return (
    <>
      <Layout>
        <div className=" mt-12 mb-20">
          <div className="max-w-md mx-auto mb-14 text-center">
            <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
              <span className="text-indigo-600">Flexible</span> Plans
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              Choose a plan that works for you.
            </p>
          </div>

          <div className="flex gap-2 sm:gap-6 sm:p-4 rounded-xl  py-2 px-2 bg-zinc-700/50 shadow-lg shadow-zinc-900/50 mb-6 sm:w-1/2 mx-auto overflow-auto ">
            <div
              onClick={() => {
                setEnabled("free");
              }}
              className={`bg-zinc-500 px-2 py-1 rounded-md w-full border-4 
            ${enabled === "free" ? "border-zinc-400" : "border-transparent"}
          
            `}
            >
              <div className="flex flex-col justify-center ">
                <h3 className="font-bold text-zinc-700/80 text-base sm:text-xl">
                  Free
                </h3>
                <p className="font-bold text-zinc-600 text-sm sm:text-base">
                  $ 0 / Mo
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setEnabled("standard");
              }}
              className={`bg-slate-500 px-2 py-1 rounded-md w-full border-4 
            ${
              enabled === "standard" ? "border-slate-400" : "border-transparent"
            }
          
            `}
            >
              <div className="flex flex-col justify-center ">
                <h3 className="font-bold text-slate-700/80 text-base sm:text-xl">
                  Standard
                </h3>
                <p className="font-bold text-slate-600 text-sm sm:text-base">
                  $ 49 / Mo
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setEnabled("premium");
              }}
              className={`bg-yellow-500 px-2 py-1 rounded-md w-full border-4 
            ${
              enabled === "premium" ? "border-yellow-400" : "border-transparent"
            }
          
            `}
            >
              <div className="flex flex-col justify-center border-2 border-transparent ">
                <h3 className="font-bold text-yellow-700/80 text-base sm:text-xl">
                  Premium
                </h3>
                <p className="font-bold text-yellow-600 text-sm sm:text-base">
                  $ 99 / Mo
                </p>
              </div>
            </div>
          </div>

          <section className="dark:bg-zinc-800 dark:text-gray-100">
            <div className="container mx-auto px-3 sm:p-6 overflow-x-auto">
              <table className="w-full">
                <thead className=" text-base sm:text-lg">
                  <tr>
                    <th></th>
                    <th scope="col">
                      <h2 className="px-2 font-medium">Availability</h2>
                    </th>
                    <th scope="col">
                      <h2 className="px-2 font-medium">Limit</h2>
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-6 text-center divide-y divide-zinc-700/50 odd:bg-gray-400/50 border-2 border-zinc-700 ">
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Create Alarm</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-red-500 ">
                        <BiLockAlt className="inline-block mr-2  " />
                        <span>No</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">0</span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Follow Collection</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-green-500 ">
                        <BiLockOpenAlt className="inline-block mr-2 " />
                        <span>Yes</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">Unlimited</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Graphics</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-green-500 ">
                        <BiLockOpenAlt className="inline-block mr-2 " />
                        <span>Yes</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">Unlimited</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Changes</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-green-500 ">
                        <BiLockOpenAlt className="inline-block mr-2 " />
                        <span>Yes</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">1 Hour</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Holders</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-red-500 ">
                        <BiLockAlt className="inline-block mr-2  " />
                        <span>No</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">0</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Max Time Limit</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-green-500 ">
                        <BiLockOpenAlt className="inline-block mr-2 " />
                        <span>Yes</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">1 Hour</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-600/40">
                    <th
                      scope="row"
                      className="text-left text-sm sm:text-base font-medium"
                    >
                      <h3 className="py-3 px-2">Not Available</h3>
                    </th>
                    <td>
                      <span className="text-md flex justify-center items-center text-red-500 ">
                        <BiLockAlt className="inline-block mr-2  " />
                        <span>No</span>
                      </span>
                    </td>
                    <td>
                      <span className="block text-sm">
                        <span className="">Not Available</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                className={`flex duration-300 justify-center gap-6 mt-12 ${
                  enabled === "free"
                    ? "opacity-0 invisible"
                    : " opacity-100 visible"
                }`}
              >
                <div
                  className="metemask rounded-md border-b-4 w-full sm:w-auto justify-center  border-orange-600 px-4 sm:px-4 py-2 bg-orange-500 inline-flex  gap-3 sm:gap-3 items-center hover:shadow-lg hover:shadow-orange-600/50 duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    handlePayment("metamask");
                  }}
                >
                  <Image
                    src="/metamask.svg"
                    alt="metamask"
                    width={40}
                    height={40}
                    className="bg-white p-1 rounded-full border-2 border-orange-700 shadow-lg shadow-orange-700/70"
                  />
                  <span className=" text-sm sm:text-xl font-semibold text-orange-900 mt-0.5">
                    Pay with Metamask
                  </span>
                </div>

                <div className="metemask rounded-md border-b-4 w-full sm:w-auto justify-center  border-blue-600 px-4 sm:px-4 py-2 bg-blue-500 inline-flex  gap-3 sm:gap-3 items-center hover:shadow-lg hover:shadow-blue-600/50 duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src="/paytr.png"
                    alt="metamask"
                    width={40}
                    height={40}
                    className="bg-white p-1 border-2 border-blue-700 shadow-lg shadow-blue-700/70 rounded-full"
                  />
                  <span className=" text-sm sm:text-xl font-semibold text-blue-900 mt-0.5">
                    Pay with PayTR
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Packages;
