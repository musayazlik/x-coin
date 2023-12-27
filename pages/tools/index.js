import React from "react";
import Layout from "@/layouts/homeLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Tools = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      <div className="container mt-6">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className=" font-semibold text-5xl">
            Hoş Geldin,{" "}
            <span className="text-yellow-500">
              {session?.user?.name ?? "Misafir"}
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-zinc-400 text-center">
            Traderedit dünyasına hoşgeldin. Borsalar ilgili haberleri ve
            gelişmeleri buradan takip edebilirsin. Sana en güncel haberleri
            sunmak için elimizden geleni yapacağız. Free Tools
          </p>

          <Image src="/home-picture.svg" width={500} height={500} />
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
