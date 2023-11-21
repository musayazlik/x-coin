import React, {memo} from 'react';
import {PiMaskSadDuotone} from "react-icons/pi";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";


const EmptyData = () => {
  const {locale} = useRouter();
  const t = lang(locale);

  return (
    <div className="flex justify-center items-center py-12 bg-zinc-700 rounded">
      <p
        className="text-zinc-400 text-xl font-medium flex flex-col gap-4 items-center">
        <PiMaskSadDuotone fontSize={64} className="inline-block"/>
        {t.notData}
      </p>
    </div>
  );
};

export default memo(EmptyData);