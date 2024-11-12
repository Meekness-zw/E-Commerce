"use client";

import React, { useState } from "react";
import Image from "next/image";
import Filter from "../../public/images/FilterImages/Filter.svg";
import Right from "../../public/images/FilterImages/RightArrow.svg";
import Up from "../../public/images/FilterImages/UpArrow.svg";

const MyFilter = () => {
  // States for main dropdowns
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isDressStyleOpen, setIsDressStyleOpen] = useState(false); // Dress Style state

  // States for individual category dropdowns
  const [isTShirtsOpen, setIsTShirtsOpen] = useState(false);
  const [isShortsOpen, setIsShortsOpen] = useState(false);
  const [isShirtsOpen, setIsShirtsOpen] = useState(false);
  const [isHoodieOpen, setIsHoodieOpen] = useState(false);
  const [isJeansOpen, setIsJeansOpen] = useState(false);

  // Price range state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);

  // Selected color state
  const [selectedColor, setSelectedColor] = useState(null);

  // Handle range change
  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="border border-grayish rounded-xl flex flex-col p-5 space-y-5">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl">Filters</h4>
        <Image src={Filter} alt="filter icon" />
      </div>

      <div className="border-b border-gray-300 my-2"></div>

      {/* Categories */}
      <div className="w-full flex flex-col space-y-2">
        {/* T-Shirts */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsTShirtsOpen(!isTShirtsOpen)}
        >
          <p>T-shirts</p>
          <Image src={isTShirtsOpen ? Up : Right} alt="toggle arrow" />
        </div>
        {isTShirtsOpen && (
          <div className="ml-4 text-gray-600">
            <p>Graphic T-shirts</p>
            <p>Plain T-shirts</p>
          </div>
        )}

        {/* Shorts */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsShortsOpen(!isShortsOpen)}
        >
          <p>Shorts</p>
          <Image src={isShortsOpen ? Up : Right} alt="toggle arrow" />
        </div>
        {isShortsOpen && (
          <div className="ml-4 text-gray-600">
            <p>Sports Shorts</p>
            <p>Cargo Shorts</p>
          </div>
        )}

        {/* Shirts */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsShirtsOpen(!isShirtsOpen)}
        >
          <p>Shirts</p>
          <Image src={isShirtsOpen ? Up : Right} alt="toggle arrow" />
        </div>
        {isShirtsOpen && (
          <div className="ml-4 text-gray-600">
            <p>Casual Shirts</p>
            <p>Formal Shirts</p>
          </div>
        )}

        {/* Hoodie */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsHoodieOpen(!isHoodieOpen)}
        >
          <p>Hoodie</p>
          <Image src={isHoodieOpen ? Up : Right} alt="toggle arrow" />
        </div>
        {isHoodieOpen && (
          <div className="ml-4 text-gray-600">
            <p>Zip-up Hoodies</p>
            <p>Pullover Hoodies</p>
          </div>
        )}

        {/* Jeans */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsJeansOpen(!isJeansOpen)}
        >
          <p>Jeans</p>
          <Image src={isJeansOpen ? Up : Right} alt="toggle arrow" />
        </div>
        {isJeansOpen && (
          <div className="ml-4 text-gray-600">
            <p>Skinny Jeans</p>
            <p>Relaxed Fit Jeans</p>
          </div>
        )}
      </div>

      <div className="border-b border-gray-300 my-2"></div>

      {/* Price Dropdown */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsPriceOpen(!isPriceOpen)}
      >
        <h4>Price</h4>
        <Image src={isPriceOpen ? Up : Right} alt="toggle arrow" />
      </div>
      {isPriceOpen && (
        <div className="my-4 space-y-2">
          <div className="flex items-center text-black">
            <input
              type="range"
              min="0"
              max="250"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="250"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>
      )}

      <div className="border-b border-gray-300 my-2"></div>

      {/* Colors Dropdown */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsColorOpen(!isColorOpen)}
      >
        <h4>Colors</h4>
        <Image src={isColorOpen ? Up : Right} alt="toggle arrow" />
      </div>
      {isColorOpen && (
        <div className="flex flex-wrap gap-2 mt-2 lg:w-[90%]">
          {[
            "gray",
            "green",
            "red",
            "blue",
            "yellow",
            "purple",
            "pink",
            "orange",
            "black",
            "brown",
          ].map((color) => (
            <div
              key={color}
              className={`w- h- rounded-full cursor-pointer relative ${
                selectedColor === color ? "border-2 border-white" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && (
                <span
                  className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold"
                  style={{ lineHeight: "0" }}
                >
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="border-b border-gray-300 my-2"></div>

      {/* Size Dropdown */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsSizeOpen(!isSizeOpen)}
      >
        <h4>Size</h4>
        <Image src={isSizeOpen ? Up : Right} alt="toggle arrow" />
      </div>
      {isSizeOpen && (
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ].map((size) => (
            <div
              key={size}
              className="bg-grayish rounded-3xl p-2 w-[40%] flex justify-center text-sm hover:bg-black hover:text-white"
            >
              <p>{size}</p>
            </div>
          ))}
        </div>
      )}

      <div className="border-b border-gray-300 my-2"></div>

      {/* Dress Style Dropdown */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsDressStyleOpen(!isDressStyleOpen)}
      >
        <h4 className="font-bold text-[20px]">Dress Style</h4>
        <Image src={isDressStyleOpen ? Up : Right} alt="toggle arrow" />
      </div>
      {isDressStyleOpen && (
        <div className="flex flex-wrap gap-2 mt-2">
          {["Casual", "Formal", "Party", "Gym"].map(
            (style) => (
              <div
                key={style}
                className="bg-grayish rounded-3xl p-2 w-[40%] flex justify-center text-sm hover:bg-black hover:text-white"
              >
                <p>{style}</p>
              </div>
            )
          )}
        </div>
      )}

      {/* Apply Filter Button */}
      <button className="bg-black text-white rounded-3xl p-3 mt-5">
        Apply Filter
      </button>
    </div>
  );
};

export default MyFilter;
