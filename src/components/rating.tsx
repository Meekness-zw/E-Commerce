import React from "react";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdCheck } from "react-icons/md";

const rating = () => {
  return (
    <div className="px-4 xl:px-8 w-full md:w-[50%] md:mb-4">
      <div className="border-2 rounded-2xl px-5 py-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <MdStar className="text-yellow text-2xl" />
            <MdStar className="text-yellow text-2xl" />
            <MdStar className="text-yellow text-2xl" />
            <MdStar className="text-yellow text-2xl" />
            <MdStar className="text-yellow text-2xl" />
          </div>
          <div>
            <MdMenu />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <h4 className="font-bold text-2xl">Samantha D.</h4>
          <div className="bg-lightgreen rounded-full flex justify-center items-center w-5 h-5">
            <MdCheck className="text-white" />
          </div>
        </div>
        <div>
          <p className="text-xs font-thin text-black/60">
            I absolutely love this t-shirt! The design is unique and the fabric
            feels so comfortable. As a fellow designer, I appreciate the
            attention to detail. It's become my favorite go-to shirt."
          </p>
        </div>
        <div>
          <p className="text-black/60 text-sm font-extralight">Posted on August 14, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default rating;
