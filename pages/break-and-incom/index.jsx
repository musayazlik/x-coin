import React from "react";
import Layout from "../layout";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Kırılımlar ve Uyumsuzluklar</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium mb-2">
          Kırılımlar ve Uyumsuzluklar sayfası altında, kripto para piyasasında
          yaşanan kırılımlar ve uyumsuzluklar hakkında bilgi alabilirsiniz.
        </p>
      </div>
    </Layout>
  );
};

export default Profile;
