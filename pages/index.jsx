import Layout from "./layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const SpotMarket = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <Layout className=" bg-zinc-950 flex">
        <div className=" flex justify-center flex-col w-full items-center my-12">
          <h2 className=" text-2xl lg:text-4xl font-bold text-zinc-500">
            <div className="text-center font-extrabold text-4xl">
              <span className="text-yellow-600">X Coin</span> ' e
            </div>{" "}
            Hoşgeldiniz {session?.user?.name}!
          </h2>
          <p className=" text-base lg:text-lg font-normal text-gray-400 mt-4 text-center max-w-3xl">
            X Coin, dünya piyasa verilerini kullanarak, kullanıcıların tüm borsa
            verileri hakkında bilgi edinmelerini sağlayan bir platformdur.
          </p>

          <div className=" flex flex-col lg:flex-row gap-4 mt-12 min-w-full max-w-2xl relative h-[400px]">
            <Image src="/home-picture.svg" alt="Home Picture" fill />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SpotMarket;
