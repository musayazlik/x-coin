import React, { memo } from "react";
import { useRouter } from "next/router";
import { lang } from "@/lang/langT";

const IsProfile = () => {
  const { locale } = useRouter();
  const t = lang(locale);
  return (
    <div className="w-ful bg-rose-700 py-2 mt-2 border-2 border-rose-800 px-6 text-center rounded-md shadow-lg shadow-rose-800/20 font-medium text-sm lg:text-lg">
      <p className="text-rose-400 ">{t.warningInfor.fillProfile}</p>
    </div>
  );
};

export default memo(IsProfile);
