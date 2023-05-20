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
      url: "http://localhost:3000/api/auth/register",
      data: user,
    })
      .then((res) => {
        toast.success("Subscription successful!", {
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
        });
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
      <div className="wrapper relative border-2 rounded-sm border-zinc-800 h-auto px-4 flex flex-col items-center py-6 w-full max-w-xl z-10 bg-zinc-950 gap-6 shadow-xl shadow-zinc-950">
        <div className="mailLogin w-full px-10">
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
        <div className="signIn text-sm mt-6">
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
    </div>
  );
};

export default Login;
