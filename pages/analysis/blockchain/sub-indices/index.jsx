import React from "react";
import Layout from "@/layouts/homeLayout";
import {useSession} from "next-auth/react";

const SubIndices = ({altIndexes}) => {
  const {data: session} = useSession();

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Alt Endeksler Analiz</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium mb-2">
          Bu sayfadan alt endekslerin analizlerini inceleyebilirsiniz.
        </p>
      </div>

      <section className="dark:bg-zinc-800 dark:text-gray-100">
        <div className="container mx-auto p-6 overflow-x-auto">
          Analiz Notları
        </div>
      </section>
    </Layout>
  );
};

export default SubIndices;

