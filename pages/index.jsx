import Layout from "./layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SpotMarket = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <Layout className=" bg-zinc-950 flex">
        <div className=" flex justify-center flex-col w-full items-center my-12">
          <h2 className=" text-2xl lg:text-4xl font-bold text-zinc-500">
            <span className="text-yellow-600">X Coin</span> ' e Hoşgeldiniz{" "}
            {session?.user?.name}!
          </h2>
          <p className=" text-lg lg:text-xl font-medium text-gray-400 mt-4 text-center">
            X Coin, kripto para piyasasında yer alan tüm coinlerin anlık
            verilerini sunan bir platformdur.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default SpotMarket;
