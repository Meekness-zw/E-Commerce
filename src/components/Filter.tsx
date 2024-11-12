"use client";

import React, { useState } from "react";
import Image from "next/image";
import Filter from "../../public/images/FilterImages/Filter.svg";
import Right from "../../public/images/FilterImages/RightArrow.svg";
import Up from "../../public/images/FilterImages/UpArrow.svg";

const MyFilter = () => {
  // States for main dropdowns
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter panel state
  const [isClosing, setIsClosing] = useState(false); // Tracks closing animation state

  // Price range state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);

  // Handle range change
  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  // Open and close filter with animations
  const toggleFilter = () => {
    if (isFilterOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsFilterOpen(false);
        setIsClosing(false);
      }, 300); // Duration of close animation
    } else {
      setIsFilterOpen(true);
    }
  };

  return (
    <div className="border border-grayish rounded-xl flex flex-col p-5 space-y-5">
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-between">
        <h4 className="font-bold text-2xl">Filters</h4>
        <button onClick={toggleFilter} className="bg-gray-200 rounded-full p-2">
          <Image src={Filter} alt="filter icon" />
        </button>
      </div>

      {/* Mobile Filter Panel */}
      {isFilterOpen && (
        <div
          className={`fixed inset-0 z-50 bg-gray-300 bg-opacity-90 p-5 flex flex-col space-y-5 overflow-auto lg:hidden ${
            isClosing ? "slide-out-top" : "slide-in-top"
          }`}
        >
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">Filters</h4>
            <button onClick={toggleFilter} className="text-black text-3xl">
              ✕
            </button>
          </div>
          <div className="border-b border-gray-300 my-2"></div>

          {/* Filter options go here */}
          <div className="text-white">
            {/* Example for Price range dropdown */}
            <div className="flex flex-col space-y-2">
              <h4>Price Range</h4>
              <input
                type="range"
                min="0"
                max="250"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                type="range"
                min="0"
                max="250"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              <p>
                ${minPrice} - ${maxPrice}
              </p>
            </div>
            {/* Additional filter options can be added here */}
          </div>
        </div>
      )}

      <style jsx>{`
        .slide-in-top {
          animation: slide-in-top 0.3s ease forwards;
        }

        .slide-out-top {
          animation: slide-out-top 0.3s ease forwards;
        }

        @keyframes slide-in-top {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slide-out-top {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default MyFilter;
