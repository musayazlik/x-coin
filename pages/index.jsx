import Layout from "./layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SpotMarket = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <Layout className=" bg-zinc-950 flex">sddsfsdfdfsd</Layout>
    </>
  );
};

export default SpotMarket;
