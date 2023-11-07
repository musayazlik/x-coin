import React from "react";
import Layout from "@/layouts/homeLayout";
import {useSession} from "next-auth/react";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import {PiGraduationCapDuotone} from "react-icons/pi";

const Education = () => {
  const {data: session, status} = useSession();
  return (
    <Layout>
      <div className="container mt-6">
        <div className="flex justify-center items-center flex-col gap-5">
          <div>
            <Button isIconOnly color="warning" variant="faded"
                    aria-label="sdfdf" className={"p-1 w-16 mb-2 h-16"}>
              <PiGraduationCapDuotone fontSize={48}/>
            </Button>
          </div>
          <h1 className=" font-semibold text-5xl">
            Educations

          </h1>


          <p className="text-lg max-w-2xl text-zinc-400 text-center">
            Traderedit dünyasına hoşgeldin. Borsalar ilgili eğitimlere buradan
            ulaşabilirsin. Sana en güncel eğitim bilgileerini
            sunmak için elimizden geleni yapıyoruz.

          </p>

          <Image src="/home-picture.svg" width={500} height={500}/>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
