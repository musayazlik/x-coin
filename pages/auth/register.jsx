import React from "react";
import Link from "next/link";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { BiUserPin } from "react-icons/bi";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { push } = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }

    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error",
        text: "Invalid email",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }

    const user = {
      name,
      surname,
      username,
      email,
      password,
    };

    axios({
      method: "POST",
      url: "/api/auth/register",
      data: user,
    })
      .then((res) => {
        toast.success(
          "🎉 Üyeliğiniz oluşturuldu. Login sayfasına yönlendiriliyorsunuz...",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => {
              push("/auth/login");
            },
          }
        );
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="min-w-full relative min-h-screen loginBackground text-white flex justify-center items-center">
      <div className="wrapper relative focus:border-b-yellow-400 duration-300 hover:border-b-yellow-400 border-b-4 hover:before:w-full hover:before:h-2 hover:before:block hover:before:bg-yellow-400/50 hover:before:-bottom-2 hover:before:z-0 hover:before:rounded-md hover:before:blur-[6px] hover:before:absolute border-2 rounded-sm border-zinc-800 h-auto  px-4 sm:px-8 flex flex-col items-center py-3 sm:py-6 w-full max-w-lg z-10 bg-zinc-950 gap-6 shadow-xl sm:shadow-zinc-950 shadow-zinc-950/30  mx-4">
        <div className="mailLogin w-full px-4 sm:px-10">
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div className=" flex  gap-4 w-full">
              <div className="input-group flex  items-center relative w-full">
                <span className="input-group-addon absolute left-4">
                  <FiUser fontSize={20} className=" text-zinc-500" />
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
                />
              </div>
              <div className="input-group flex  items-center relative w-full">
                <span className="input-group-addon absolute left-4">
                  <FiUser fontSize={20} className=" text-zinc-500" />
                </span>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Surname"
                  className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="input-group flex  items-center relative w-full">
              <span className="input-group-addon absolute left-4">
                <BiUserPin fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="input-group flex  items-center relative w-full">
              <span className="input-group-addon absolute left-4">
                <FiMail fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="input-group flex  items-center relative w-full">
              <span className="input-group-addon absolute left-4">
                <FiLock fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="input-group flex  items-center relative w-full">
              <span className="input-group-addon absolute left-4">
                <FiLock fontSize={20} className=" text-zinc-500" />
              </span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className=" border-2 border-zinc-700 rounded-md px-12 pr-4 py-3 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <button
              type="submit"
              className="bg-zinc-900/20 border-2 border-zinc-800 hover:border-blue-900 text-white font-semibold rounded-md px-4 py-3 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/50 duration-300"
            >
              Register
            </button>
          </form>
        </div>
        <div className="signIn text-sm mt-6 mb-2">
          <p>
            Do you want to connect?{" "}
            <Link
              href={"/auth/login"}
              className="font-extrabold ml-2 cursor-pointer hover:text-yellow-400"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div
        className="fixedLeft absolute
       h-full bg-yellow-400/80 left-0 py-4 flex items-center  flex-col gap-4 min-w-[80px]"
      >
        <span className="font-bold text-5xl px-4 text-zinc-800 hidden sm:flex ">
          X
        </span>
        <div className=" flex-col gap-2 hidden sm:flex ">
          <span className="w-1 h-4 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
          <span className="w-1 h-1 bg-zinc-900 block rounded-full"></span>
        </div>
        <div className=" flex-col items-center  text-2xl font-bold text-zinc-900 hidden sm:flex">
          <span>C</span>
          <span>O</span>
          <span>I</span>
          <span>N</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
