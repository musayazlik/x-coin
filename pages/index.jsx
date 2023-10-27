import Menu from "@/components/menü";
import {Button} from "@nextui-org/react";
import {RiArrowRightDoubleFill} from "react-icons/ri";
import Image from "next/image";

const Home = () => {

  return (
    <>
      <Menu/>

      <section>
        <div className="container">
          <div className="flex gap-6 ">
            <div className={"py-40 flex flex-col gap-4 w-1/2"}>
              <h2 className={"mb-12"}>
                <div className=" font-extrabold text-5xl">
                  Welcome to {' '}
                  <span className="text-yellow-600">Trader Edit</span> ' e
                </div>
              </h2>

              <p className={"max-w-3xl text-lg mb-8"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, autem consectetur delectus eaque et eum eveniet iure
                iusto minus nostrum perspiciatis provident, quaerat quasi quia
                soluta. Accusamus, atque, consectetur ex laborum minima nesciunt
                odio omnis perspiciatis quae repellendus reprehenderit voluptas.
              </p>

              <div className="flex gap-4">
                <Button color={"warning"} variant={"bordered"}
                        className={"py-8 pl-8 pr-12 text-xl"}>
                  <RiArrowRightDoubleFill fontSize={26}/>
                  <span> Get Started</span>

                </Button>
              </div>
            </div>
            <div className={"flex justify-center items-center w-1/2"}>
              <Image src={"/Home.png"} alt={"animation"} width={700}
                     height={700}/>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-black border-t-2 border-zinc-800  shadow  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#"
               className="flex items-center mb-4 sm:mb-0">

                <span
                  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Trader Edit
                </span>
            </a>
            <ul
              className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-zinc-400">
              <li>
                <a href="#"
                   className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy
                  Policy</a>
              </li>
              <li>
                <a href="#"
                   className="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr
            className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8"/>
          <span
            className="block text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a
            href="#"
            className="hover:underline">TraderEdit™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </>
  );
};

export default Home;
