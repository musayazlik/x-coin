import React from "react";
import Layout from "@/layouts/feedLayout";
import { FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { useSession, getSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";
import Membership from "@/components/icons/membership";

const Profile = () => {
  const { data: session } = useSession();

  const handlePassword = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const passwordconfirm = e.target.passwordconfirm.value;

    if (password !== passwordconfirm) {
      toast.error("Şifreler eşleşmiyor.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    const data = {
      password,
    };

    axios({
      method: "PATCH",
      url:
        "/api/users/userCrud?status=" + "password" + "&id=" + session?.user?.id,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Şifreniz başarıyla değiştirildi.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        e.target.reset();

        signOut();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleProfile = async (e) => {
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const username = e.target.username.value;
    const walletAddress = e.target.walletAddress.value;
    const email = e.target.email.value;

    const data = {
      name,
      surname,
      username,
      walletAddress,
      email,
    };

    e.preventDefault();
    axios({
      method: "PATCH",
      url: "/api/users/userCrud?status=" + "profile" + "&id=" + session.user.id,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Bilgileriniz başarıyla güncellendi.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        signOut();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleAvatar = async (e) => {
    e.preventDefault();
    const avatar = e.target.files[0];
    const formData = new FormData();
    formData.append("file", avatar);
    axios({
      method: "PATCH",
      url: "/api/users/userCrud?status=" + "avatar" + "&id=" + session.user.id,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        toast.success("Avatar başarıyla güncellendi.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        signOut();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 1500,
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
    <Layout>
      <div className="max-w-2xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Profil</span>
        </h1>
        <p className=" text-base sm:text-xl text-gray-500 font-medium mb-2">
          Bu sayfadan profil bilgilerinizi güncelleyebilirsiniz.
        </p>
      </div>

      <div className=" w-full flex justify-center flex-col">
        <div className="flex justify-center mb-4">
          <div className="relative cursor-pointer inline-block">
            <img
              className="w-32 h-32 p-1 rounded-full ring-2 hover:shadow-lg shadow-yellow-400/60 hover:ring-yellow-400 duration-300 ring-zinc-500 cursor-pointer object-cover"
              src={session?.user?.image || "/robot.gif"}
              title="Profil resmini değiştirmek için tıklayınız."
              alt="Bordered avatar"
              onClick={() => document.getElementById("avatar").click()}
            />
            <input
              type="file"
              name="avatar"
              id="avatar"
              multiple={true}
              className="hidden"
              onChange={(e) => handleAvatar(e)}
            />

            {session?.user?.memberShipType === "standard" && (
              <div className="w-12 h-12 rounded-full flex justify-center items-center absolute -top-1.5  bg-stone-400 -right-1.5 border-2 border-stone-500 shadow-md shadow-stone-700">
                <Membership
                  className=" "
                  width="32"
                  height="32"
                  color="#3f3f46"
                  stroke="#3f3f46"
                />
              </div>
            )}

            {session?.user?.memberShipType === "premium" && (
              <div className="w-12 h-12 rounded-full flex justify-center items-center absolute -top-1.5  bg-yellow-400 -right-1.5 border-2 border-yellow-600 shadow-md shadow-yellow-700">
                <Membership
                  className=" "
                  width="32"
                  height="32"
                  color="#ca8a04"
                  stroke="#ca8a04"
                />
              </div>
            )}
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg tracking-tight font-normal mb-2 lg:text-2xl">
              <span className="text-zinc-400">
                {session?.user?.name} {session?.user?.surname}
              </span>
            </h1>
            <div className="">
              <p className="text-sm sm:text-base text-yellow-800 bg-yellow-500 px-2 sm:px-8 py-1 rounded-sm border-2 border-yellow-700/50 font-medium mb-2 break-all">
                {session?.user?.walletAddress || "Cüzdan adresi yok."}
              </p>
            </div>
            <p className="text-base text-gray-500 font-medium mb-2">
              {session?.user?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <form action="" className="w-full" onSubmit={(e) => handleProfile(e)}>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="name"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Ad
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Ad"
                defaultValue={session?.user?.name}
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="surname"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Soyad
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Soyad"
                defaultValue={session?.user?.surname}
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="surname"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="username"
                defaultValue={session?.user?.username}
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="walletAddress"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Cüzdan Adresi
              </label>
              <input
                type="text"
                name="walletAddress"
                id="walletAddress"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Cüzdan Adresi"
                defaultValue={session?.user?.walletAddress}
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="email"
                className="text-base text-gray-500 font-medium mb-2"
              >
                E-Posta
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="E-Posta"
                defaultValue={session?.user?.email}
              />
            </div>

            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <button
                type="submit"
                className="w-full h-12 px-3 mb-2 mt-6 text-base text-white bg-indigo-600 rounded-md duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                Bilgileri Güncelle
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center mt-4">
        <form action="" className="w-full" onSubmit={(e) => handlePassword(e)}>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <h3 className="my-4 py-3 px-4 bg-zinc-900/60 w-full border-l-2 border-rose-600">
                <span className="text-base text-gray-500 font-medium mb-2">
                  Şifre Değiştir
                </span>
              </h3>
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="password"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Şifre
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Şifreyi Giriniz.."
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <label
                htmlFor="passwordconfirm"
                className="text-base text-gray-500 font-medium mb-2"
              >
                Şifre Tekrar
              </label>
              <input
                type="password"
                name="passwordconfirm"
                id="passwordconfirm"
                autoComplete="new-password"
                className="w-full h-12 px-3 mb-2 placeholder-gray-500/50 border-2 border-zinc-700 text-zinc-500 duration-200 focus:shadow-md focus:shadow-indigo-600/20 bg-zinc-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Şifreyi Tekrar Giriniz.."
              />
            </div>

            <div className="flex flex-col justify-center items-start w-full max-w-2xl">
              <button
                type="submit"
                className="w-full h-12 px-3 mb-2 mt-6 text-base text-white bg-indigo-600 rounded-md duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                Kaydet
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${process.env.APP_URL}/api/users/userCrud?id=${session.user.id}`,
    {
      headers: {
        cookie: context.req.headers.cookie,
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      questionData: data,
    },
  };
}
