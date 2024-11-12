'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi'; // Importing the close icon from react-icons
import Stock from '@/components/Stock';
import Tshirt from '../../../public/images/pic1.svg';
import Right from '../../../public/images/FilterImages/RightArrow.svg';
import Down from '../../../public/images/FilterImages/DownArrow.svg';
import SkinnyJean from '../../../public/images/pic2.svg';
import CheckedShirt from '../../../public/images/pic3.svg';
import SleeveShirt from '../../../public/images/pic4.svg';
import Star from '../../../public/images/Star.svg';
import Filter from '../../components/Filter';
import Image from 'next/image';
import FilterIcon from '../../../public/images/FilterImages/Filter.svg';

const Page = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:w-[100%] relative">
      {/* Breadcrumb */}
      <div className="flex space-x-2 px-[2%] lg:px-[3%]">
        <h4>Home</h4>
        <Image src={Right} alt="breadcrumb icon" />
        <h4>Casual</h4>
      </div>

      {/* Mobile Header with Filter Icon */}
      <div className="flex lg:hidden justify-between w-[92%] px-[2%] mb-4">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold text-[20px] lg:text-2xl">Casual</h4>
          <p className="text-gray-500 text-sm">Showing 1-10 of 100 Products</p>
        </div>
        <div onClick={toggleFilter} className="bg-gray-200 rounded-3xl p-2 cursor-pointer">
          <Image src={FilterIcon} alt="filter icon" />
        </div>
      </div>

      {/* Filter Sidebar for Mobile */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-90 z-50 flex justify-center lg:hidden">
          <div className="w-full max-w-xs bg-white shadow-lg overflow-auto slide-in-top relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h4 className="font-semibold">Filter</h4>
              <div onClick={toggleFilter} className="cursor-pointer">
                <FiX size={24} className="text-gray-700" /> {/* Close icon */}
              </div>
            </div>
            <Filter />
          </div>
        </div>
      )}

      <div className="flex flex-wrap lg:px-[3%] lg:justify-between">
        {/* Filter Component for Desktop */}
        <div className="hidden lg:block lg:w-[25%]">
          <Filter />
        </div>

        {/* Main Content */}
        <div className="flex flex-wrap gap-5 justify-center lg:w-[72%] px-[2%]">
          <div className="hidden lg:flex justify-between lg:w-[92%]">
            <h4 className="font-bold text-2xl">Casual</h4>
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Showing 1-10 of 100 Products</p>
              <div className="flex space-x-1">
                <p className="text-gray-500">Sort by:</p>
                <div className="flex space-x-2 items-center">
                  <h4 className="font-semibold">Most Popular</h4>
                  <Image src={Down} alt="sort icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Listings */}
          <div className="flex flex-wrap gap-5 lg:justify-center">
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinny Fit Jeans"
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
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinny Fit Jeans"
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
            <Stock
              item={SkinnyJean}
              imgAlt="img"
              type="Skinny Fit Jeans"
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

      <style jsx>{`
        .slide-in-top {
          animation: slide-in-top 0.4s ease forwards;
          transform: translateY(-100%);
        }

        @keyframes slide-in-top {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
