'use client'

import React from "react";
import Stock from "@/components/Stock";
import Tshirt from "../../../public/images/pic1.svg";
import Right from "../../../public/images/FilterImages/RightArrow.svg";
import Down from "../../../public/images/FilterImages/DownArrow.svg";
import SkinnyJean from "../../../public/images/pic2.svg";
import CheckedShirt from "../../../public/images/pic3.svg";
import SleeveShirt from "../../../public/images/pic4.svg";
import Star from "../../../public/images/Star.svg";
import Filter from "../../components/Filter";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col lg:w-[100%]">
      {/* <div className="border-b border-gray-300 my-2 lg:w-[93%]"></div> */}
      <div className="flex space-x-2 lg:px-[3%]">
        <h4>Home</h4>
        <Image src={Right} alt="image" />
        <h4>Casual</h4>
      </div>

      <div className="flex flex-wrap lg:px-[3%] lg:justify-between">
        <div className="lg:w-[25%]">
          <Filter />
        </div>

        <div className="flex flex-wrap gap-5 justify-center lg:w-[72%]">
          <div className="flex justify-between lg:w-[92%]">
            <h4 className="font-bold text-2xl">Casual</h4>
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Showing 1-10 of 100 Products</p>
              <div className="flex space-x-1">
                <p className="text-gray-500">Sort by:</p>
                <div className="flex space-x-2 items-center">
                  <h4 className="font-semibold">Most Popular</h4>
                  <Image src={Down} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-center">
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinney Fit Jeans"
              star={Star}
              rating="3.5 /5"
              cost="$240"
              discount="$260"
              markoff="-20%"
            />

            <Stock
              item={CheckedShirt}
              imgAlt="img"
              type="Checked Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$180"
            />

            <Stock
              item={SleeveShirt}
              imgAlt="img"
              type="Sleeve Stripped T Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$130"
              discount="$160"
              markoff="-30%"
            />
          </div>
          <div className="flex gap-5 justify-center">
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinney Fit Jeans"
              star={Star}
              rating="3.5 /5"
              cost="$240"
              discount="$260"
              markoff="-20%"
            />

            <Stock
              item={CheckedShirt}
              imgAlt="img"
              type="Checked Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$180"
            />

            <Stock
              item={SleeveShirt}
              imgAlt="img"
              type="Sleeve Stripped T Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$130"
              discount="$160"
              markoff="-30%"
            />
          </div>
          <div className="flex gap-5 justify-center">
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinney Fit Jeans"
              star={Star}
              rating="3.5 /5"
              cost="$240"
              discount="$260"
              markoff="-20%"
            />

            <Stock
              item={CheckedShirt}
              imgAlt="img"
              type="Checked Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$180"
            />

            <Stock
              item={SleeveShirt}
              imgAlt="img"
              type="Sleeve Stripped T Shirt"
              star={Star}
              rating="4.5 /5"
              cost="$130"
              discount="$160"
              markoff="-30%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
