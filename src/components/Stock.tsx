import React from "react";
import Image, { StaticImageData } from "next/image";

interface StockProps {
  item: StaticImageData;
  imgAlt: string;
  type: string;
  star: StaticImageData;
  rating: string;
  cost: string;
  discount?: string; // Optional prop for discount
  markoff?: string; // Optional prop for markoff
}

function Stock({
  item,
  imgAlt,
  type,
  star,
  rating,
  cost,
  discount,
  markoff,
}: StockProps) {
  return (
    <div className="w-[47%] lg:w-[30%] flex flex-col text-xs space-y-3">
      <div className="rounded-[10px] mx-auto">
        <Image src={item} alt={imgAlt} className="" />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className=" text-[15px] lg:text-[20px] font-semibold">{type}</h1>
        <div className="flex space-x-1 items-center">
          {[...Array(4)].map((_, i) => (
            <Image
              key={i}
              src={star}
              alt={`${imgAlt}-star`}
              className=" w-[20px]"
            />
          ))}
          <span className="lg:text-[18px] pt-1">{rating}</span>
        </div>
        <div className="flex items-center mt-2 justify-normal space-x-2 lg:space-x-3">
          <span className="text-[18px] lg:text-[23px] font-semibold">
            {cost}
          </span>
          {discount && (
            <span className=" text-[18px] lg:text-[23px] line-through text-gray-400">
              {discount}
            </span>
          )}
          {markoff && (
            <span className="bg-[#ff8c8c] rounded-[30px] text-[red] px-3 py-1 font-bold">
              {markoff}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stock;
