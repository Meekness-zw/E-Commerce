"use client";

import React from "react";
import Image from "next/image";
import S1 from "../../public/images/s1.svg";
import S2 from "../../public/images/s2.svg";
import S3 from "../../public/images/s3.svg";
import Big from "../../public/images/bigImg.svg";
import { MdStar } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdStarHalf } from "react-icons/md"; // A half star icon
import { useState } from "react";

type ImageSelectorProps = {
  images: string[]; // The images prop is an array of strings representing the image sources
};

const information = ({ images }: ImageSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("brown");
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("S1");

  const imageArray = [S1, S2, S3];

  const handleSelect = (image: string) => {
    setSelectedImage(image);
  };

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      // Prevent count from going below 0
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col mb-32">
      <div className="flex flex-col px-4 xl:px-8 lg:flex-row">
        <div className="flex flex-col-reverse lg:flex-row  gap-3">
          <div className="flex justify-between lg:flex-col lg:justify-start lg:gap-3">
            {imageArray.map((image, index) => (
              <button
                key={index}
                className={`w-[31%] lg:w-[100%]  ${
                  selectedImage === image
                    ? "border-2 rounded-3xl border-black"
                    : ""
                }`}
                onClick={() => handleSelect(image)}
              >
                <Image src={image} alt="" className="w-full" />
              </button>
            ))}
          </div>
          <div>
            <Image src={Big} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:justify-between lg:pl-5 xl:pl-8">
          <h1 className="font-extrabold pt-6 lg:pt-0 text-[28px] w-[80%] lg:w-full xl:text-3xl">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex gap-1 items-center pb-3 pt-1">
            <MdStar className="text-yellow text-[25px]" />
            <MdStar className="text-yellow text-[25px]" />
            <MdStar className="text-yellow text-[25px]" />
            <MdStar className="text-yellow text-[25px]" />
            <MdStarHalf className="text-yellow text-[25px]" />
            <p>4.5/5</p>
          </div>
          <div className="flex pb-3  gap-4">
            <p className="font-bold text-2xl">$250</p>
            <p className="text-2xl text-black/30">$300</p>
            <div className="bg-red/10 text-[18px] rounded-2xl w-[20%] xl:w-[10%] lg:text-[13px]   flex justify-center items-center text-red">
              <p>-40%</p>
            </div>
          </div>
          <p className="text-black/60 pb-3">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="py-4">
            <hr />
          </div>
          <div className="flex flex-col">
            <h4 className="pb-2">Select colors</h4>
            <div className="flex gap-4">
              <button
                className="w-8 h-8 rounded-full bg-brown flex justify-center items-center"
                onClick={() => setSelectedColor("brown")}
              >
                {selectedColor === "brown" && (
                  <MdCheck className="text-white text-2xl" />
                )}
              </button>
              <button
                className="w-8 h-8 rounded-full bg-green flex justify-center items-center"
                onClick={() => setSelectedColor("green")}
              >
                {selectedColor === "green" && (
                  <MdCheck className="text-white text-2xl" />
                )}
              </button>
              <button
                className="w-8 h-8 rounded-full bg-blue flex justify-center items-center"
                onClick={() => setSelectedColor("blue")}
              >
                {selectedColor === "blue" && (
                  <MdCheck className="text-white text-2xl" />
                )}
              </button>
            </div>
            <div className="py-7">
              <hr />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="pb-2">Choose size</h4>
            <div className="flex justify-between xl:justify-start xl:gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`h-8 w-[20%] xl:w-[13%] rounded-2xl text-xs flex justify-center items-center 
              ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-grey text-black"
              } 
              hover:bg-black hover:text-white`}
                  onClick={() => setSelectedSize(size)}
                >
                  <p>{size}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="py-7">
            <hr />
          </div>
          <div className="flex justify-between pb-3">
            <div className="bg-grey py-1 rounded-2xl justify-evenly items-center flex space-x-2 w-[35%] xl:w-[20%]">
              <button className="font-bold text-2xl" onClick={decrement}>
                -
              </button>
              <p>{count}</p>
              <button className="font-bold text-2xl" onClick={increment}>
                +
              </button>
            </div>
            <div className="bg-black rounded-2xl flex justify-center items-center text-white w-[60%] xl:w-[50%] py-1 ">
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default information;
