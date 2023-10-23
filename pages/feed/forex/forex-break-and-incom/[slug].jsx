import React from "react";
import Layout from "@/layouts/homeLayout";
import axios from "axios";

const ForexBreakAndIncomContext = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 bg-zinc-900 rounded-lg  mt-6">
        <div className="card w-full  px-4  rounded-xl py-4">
          <div className="cardHeader h-[300px] rounded-lg">
            <img
              src={data.thumbnail}
              alt=""
              className="w-full object-cover h-full rounded-lg"
            />
          </div>
          <div className="cardBody">
            <div className="flex items-center justify-between">
              <div className="flex items-center w-full">
                <div className="flex flex-col  mt-6 w-full">
                  <h2 className="text-xl font-semibold hover:text-rose-600 duration-300 cursor-pointer text-zinc-400 leading-tight">
                    {data.title}
                  </h2>

                  <p className="text-base mt-2 mb-4 text-gray-600 leading-normal">
                    {data.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      <img
                        src={data.user.image || "/robot.gif"}
                        alt=""
                        className="w-8 h-8 max-h-8 flex-shrink rounded-full object-cover border-2 border-zinc-400"
                      />
                      <div className="flex flex-col ">
                        <h4 className="text-md font-semibold text-zinc-400 leading-tight">
                          {data.user.name || "Anonim" + " " + data.user.surname}
                        </h4>
                        <p className="text-sm text-gray-600 leading-normal">
                          {data.user.role}
                        </p>
                      </div>
                    </div>

                    <div className="date">
                      <p className="text-sm text-gray-600 leading-normal">
                        {new Date(data.createdAt).toLocaleDateString("tr-TR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForexBreakAndIncomContext;

export async function getServerSideProps(context) {
  const res = await axios
    .get(
      `${process.env.APP_URL}/api/forex-break-and-incom?slug=${context.query.slug}`
    )
    .then((res) => res)
    .catch((err) => err.response);

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: res.data.data,
    },
  };
}
