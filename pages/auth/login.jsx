import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { connectMetamask } from "@/services/metamaskConnect";
import Link from "next/link";
import { FiUser, FiLock } from "react-icons/fi";

const Login = () => {
  const handleMetamaskLogin = async () => {
    const address = await connectMetamask();
    if (address) {
      signIn("credentials", {
        walletAddress: address,
        callbackUrl: "/dashboard",
      });
    }
  };
  return (
    <div className="min-w-full relative min-h-screen loginBackground text-white flex justify-center items-center">
      <div className="wrapper relative border-2 rounded-sm border-zinc-800 h-auto px-8 flex flex-col items-center py-6 w-full max-w-lg z-10 bg-zinc-950 gap-6 shadow-xl shadow-zinc-950">
        <div className="mailLogin w-full px-10">
          <form className="flex flex-col gap-4 mt-4">
            <div className="input-group flex  items-center relative">
              <span className="input-group-addon absolute left-4">
                <FiUser fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="text"
                name="emailandusername"
                id="emailandusername"
                placeholder="Email or Username"
                className="border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="input-group flex  items-center relative">
              <span className="input-group-addon absolute left-4">
                <FiLock fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>
            <button
              type="submit"
              className="border-zinc-700 border-2 hover:border-blue-900 text-white font-semibold rounded-md px-4 py-3 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/50 duration-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className="or flex flex-col items-center ">
          <span className="h-6 w-0.5 inline-block bg-zinc-700"></span>
          <span className="text-sm text-gray-400 font-semibold">or</span>
          <span className="h-6 w-0.5 inline-block bg-zinc-700"></span>
        </div>
        <div
          onClick={handleMetamaskLogin}
          className="metemask rounded-md border-b-4 border-orange-600 px-8 py-2 bg-orange-500 inline-flex gap-6 items-center hover:shadow-lg hover:shadow-orange-600/50 duration-300 hover:scale-105 cursor-pointer"
        >
          <Image
            src="/metamask.svg"
            alt="metamask"
            width={40}
            height={40}
            className="bg-white p-1 rounded-full border-2 border-orange-700 shadow-lg shadow-orange-700/70"
          />
          <span className="text-xl font-semibold text-orange-900 mt-0.5">
            Login via Metamask
          </span>
        </div>
        <div className="signIn text-sm mt-6">
          <p>
            Do you want to register with e-mail?{" "}
            <Link
              href={"/auth/register"}
              className="font-extrabold ml-2 cursor-pointer hover:text-yellow-400"
            >
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
