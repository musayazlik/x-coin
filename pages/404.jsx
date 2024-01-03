import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { RiArrowLeftLine, RiHome7Fill } from "react-icons/ri";
import { lang } from "@lang/langT";

const NotFound = () => {
  const router = useRouter();
  const t = lang(router.locale);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-semibold">404</h1>
      <p className="text-xl font-semibold">{t.notFound}</p>
      <div className="flex gap-3">
        <Button
          auto
          size="small"
          className="mt-4"
          onClick={() => router.back()}
        >
          <RiArrowLeftLine className="mr-2" fontSize={20} />
          Go Back
        </Button>
        <Button
          auto
          size="small"
          className="mt-4"
          onClick={() => router.push("/")}
        >
          <RiHome7Fill className="mr-2" fontSize={20} />
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
