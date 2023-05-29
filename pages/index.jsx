import Link from "next/link";
import { BiChevronRight, BiHomeSmile, BiStar } from "react-icons/bi";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";
import Sidebar from "@/components/sidebar";

const Home = () => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="w-screen h-screen bg-zinc-950 flex gap-8">
        <Sidebar />
        <div className="flex flex-col w-full">
          <header className=" h-24  py-4 mr-4 ">
            <div className=" bg-zinc-800 h-full rounded-sm flex justify-between">
              <div className=""></div>
              <div className="avatar"></div>
            </div>
          </header>
          <main className=" h-24  py-4 mr-4 bg-zinc-800">
            <h1>Main Alanı</h1>
          </main>
        </div>

        <div className="asideActive w-screen h-screen fixed top-0 left-0 bg-zinc-800/50 z-10"></div>
      </div>
    </>
  );
};

export default Home;
