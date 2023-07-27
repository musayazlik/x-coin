import React from "react";
import Layout from "../../layout";

const Silver = () => {
  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className=" text-3xl sm:text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Silver</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 font-normal mb-2">
          Bu sayfada forex piyasası olan Silver ile ilgili bilgiler
          alabilirsiniz..
        </p>
      </div>
    </Layout>
  );
};

export default Silver;
