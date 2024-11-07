'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import hero from '../../public/images/header-res-homepage.svg';
import Link from 'next/link';
import Stock from '../components/Stock';
import Tshirt from '../../public/images/pic1.svg';
import SkinnyJean from '../../public/images/pic2.svg';
import CheckedShirt from '../../public/images/pic3.svg';
import SleeveShirt from '../../public/images/pic4.svg';
import Star from '../../public/images/Star.svg';
import DressStyle from '../components/DressStyles';
import casual from '../../public/images/dress-style-1.svg';
import formal from '../../public/images/dress-style-22.svg';
import party from '../../public/images/dress-style-33.svg';
import gym from '../../public/images/dress-style-4.svg';
import Reviews from '@/components/Reviews';
import check from '../../public/images/Verified.svg';

import Slider from 'react-slick'; // Importing react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrows from react-icons

function Page() {
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    // Function to increment a number to a target
    const incrementValue = (target, setValue) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
        } else {
          current += Math.ceil(target / 500); // Increment value for smoother animation
          setValue(current);
        }
      }, 20); // Speed of the increment
    };

    // Start counting for each number
    incrementValue(200, setBrands);
    incrementValue(2000, setProducts);
    incrementValue(30000, setCustomers);
  }, []);

  // Slick carousel settings with custom arrows
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <div className="slick-prev text-white absolute top-1/2 left-2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-lg z-10">
        <FaArrowLeft /> {/* Using FaArrowLeft icon */}
      </div>
    ),
    nextArrow: (
      <div className="slick-next text-white absolute top-1/2 right-2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-lg z-10">
        <FaArrowRight /> {/* Using FaArrowRight icon */}
      </div>
    ),
  };

  return (
    <div>
      <div className="bg-[#F2F0F1]">
        <div className='md:grid md:grid-cols-2'>
          <div>
            <h1 className="font-extrabold text-[35px] ml-5 pt-10">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-500 ml-5 mt-3 text-[15px] font-thin">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className="flex items-center justify-center mt-5 mb-5 md:mb-0 md:justify-start md:ml-5">
              <button className="bg-black text-white pl-[100px] md:pl-[70px] pr-[100px] md:pr-[70px] pt-3 pb-3 rounded-[30px] font-bold">
                <Link href="/">Shop Now</Link>
              </button>
            </div>

            {/* Numbers displayed below the Shop Now button */}
            <div className='flex justify-center pl-5'>
              <div className=" space-x-5 mt-10 w-[70%] md:w-[100%]">
                <div className='flex'>
                  <div className="text-center">
                    <h2 className="font-extrabold flex-col text-[35px] md:text-[20px] mr-10">{brands}+ <span className='font-medium text-[15px] md:text-[10px] text-gray-500 block'>International Brands</span></h2>
                  </div>
                  <div className='bg-gray-600 w-[1px] h-[90px] md:hidden'></div>
                  <div className="text-center">
                    <h2 className="ml-5 font-extrabold flex-col md:text-[20px] text-[35px] md:ml-0">{products}+ <span className='font-medium text-[15px] text-gray-500 md:text-[10px] block'>High Quality Products</span></h2>
                  </div>
                  <div className="text-center hidden md:block">
                    <h2 className="font-extrabold flex-col ml-10 md:text-[20px] text-[35px]">{customers}+ <span className='font-medium text-[15px] text-gray-500 md:text-[10px] block'>Happy Customers</span></h2>
                  </div>
                </div>
                <div className="text-center mb-10 md:hidden">
                  <h2 className="font-extrabold flex-col md:text-[20px] text-[35px]">{customers}+ <span className='font-medium text-[15px] text-gray-500 md:text-[10px] block'>Happy Customers</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className='flex lg:justify-end'>
            <Image src={hero} alt="Hero Image" className='' />
          </div>
        </div>
      </div>
      <div className='bg-black flex text-white text-[25px] lg:text-[40px] font-extrabold justify-center items-center p-8'>
        <div>
          <ul className='flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-5 lg:space-x-10'>
            <div className='flex space-x-5'>
              <li>VERSACE</li>
              <li>ZARA</li>
              <li>GUCCI</li>
            </div>
            <div className='flex space-x-5'>
              <li>PRADA</li>
              <li>CALVIN KLEIN</li>
            </div>
          </ul>
        </div>
      </div>
      <div className='overflow-hidden lg:w-[95%]'>
        <div className='text-center'>
          <h1 className='font-extrabold text-[40px] mt-10 mb-10'>NEW ARRIVALS</h1>
        </div>
        <Slider {...settings}>
          <div>
            <Stock item={Tshirt} imgAlt='img' type='T-shirt with tape details' star={Star} rating="4.5 /5" cost='$120' discount='' markoff='' />
          </div>
          <div>
            <Stock item={SkinnyJean} imgAlt='img' type='Skinney Fit Jeans' star={Star} rating="3.5 /5" cost='$240' discount='$260' markoff='-20%' />
          </div>
          <div>
            <Stock item={CheckedShirt} imgAlt='img' type='Checked Shirt' star={Star} rating="4.5 /5" cost='$180' />
          </div>
          <div>
            <Stock item={SleeveShirt} imgAlt='img' type='Sleeve Stripped T Shirt' star={Star} rating="4.5 /5" cost='$130' discount='$160' markoff='-30%' />
          </div>
        </Slider>
        <div className='flex items-center justify-center mt-10'>
          <button className='border-[2px] border-gray-500 text-[20ps] rounded-[30px] pr-[100px] pl-[100px] pt-[10px] pb-[10px] font-medium'>
            <Link href="/">View All</Link>
          </button>
        </div>
      </div>
      <div className='overflow-hidden w-[95%]'>
        <div className='text-center'>
          <h1 className='font-extrabold text-[40px] mt-10 mb-10'>TOP SELLING</h1>
        </div>
        <Slider {...settings}>
          <div>
            <Stock item={Tshirt} imgAlt='img' type='T-shirt with tape details' star={Star} rating="4.5 /5" cost='$120' discount='' markoff='' />
          </div>
          <div>
            <Stock item={SkinnyJean} imgAlt='img' type='Skinney Fit Jeans' star={Star} rating="3.5 /5" cost='$240' discount='$260' markoff='-20%' />
          </div>
          <div>
            <Stock item={CheckedShirt} imgAlt='img' type='Checked Shirt' star={Star} rating="4.5 /5" cost='$180' />
          </div>
          <div>
            <Stock item={SleeveShirt} imgAlt='img' type='Sleeve Stripped T Shirt' star={Star} rating="4.5 /5" cost='$130' discount='$160' markoff='-30%' />
          </div>
        </Slider>
      </div>
      <div className="text-center mt-10">
        <h1 className='font-extrabold text-[40px] mb-10'>OUR DRESS STYLES</h1>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <div className='bg-[#F2F0F1] w-[95%] rounded-[10px]'>
          <div className='text-center'>
            <h1 className='font-extrabold text-[40px] mt-10 mb-10'>BROWSE BY DRESS STYLE</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className='w-full'>
              <DressStyle imgData={casual} imgAlt='img' />
            </div>
            <div className='w-full'>
              <DressStyle imgData={formal} imgAlt='img' />
            </div>
            <div className='w-full'>
              <DressStyle imgData={party} imgAlt='img' />
            </div>
            <div className='w-full'>
              <DressStyle imgData={gym} imgAlt='img' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-extrabold text-[40px] mt-10 mb-10 ml-5'>OUR HAPPY CUSTOMERS</h1>
        <div className='flex items-center justify-center'>
          <Reviews
            star={Star}
            name="Sarah M."
            tick={check}
            review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          />
          <Reviews
            star={Star}
            name="John D."
            tick={check}
            review="The customer service is fantastic, and the products are exactly as described. I feel confident purchasing from Shop.co because I know I’m getting high-quality items."
          />
          <Reviews
            star={Star}
            name="Emma P."
            tick={check}
            review="As someone who's picky about style, I was amazed to find so many options that fit my taste. I've already recommended Shop.co to all my friends!"
          />
        </div>
      </div>
    </div>
  )
}

export default Page;

