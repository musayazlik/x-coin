import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const StarButton = () => {
  const [isStar, setIsStar] = useState(false);
  return (
    <>
      {isStar ? (
        <div
          className="w-10 h-10 flex justify-center items-center bg-yellow-600 rounded-md border-2 border-yellow-700 hover:scale-105 duration-200"
          onClick={() => setIsStar(!isStar)}
        >
          <FaRegStar className="text-yellow-700 text-2xl" />
        </div>
      ) : (
        <div
          className="w-10 h-10 flex justify-center items-center bg-slate-600 rounded-md border-2 border-slate-700 hover:scale-105 duration-200"
          onClick={() => setIsStar(!isStar)}
        >
          <FaRegStar className="text-slate-700 text-2xl" />
        </div>
      )}
    </>
  );
};

export default StarButton;
