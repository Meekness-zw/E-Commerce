'use client'
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { FaSearch, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const toggleShopAccordion = () => {
    setIsShopOpen(!isShopOpen)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <div className="bg-black text-center">
        <h1 className="text-white font-extralight p-3 text-[13px] md:text-[15px]">
          Sign up and get 20% off your first order.
          <span className="font-bold border-white underline ml-2">
            Sign Up Now
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-between px-4 p-5">
        <div className="flex items-center space-x-5">
          <MobileNav />
          <h1 className="md:text-[25px] text-[20px] font-extrabold">SHOP.CO</h1>
          <div className="font-bold space-x-5 hidden lg:flex items-center pt-2 pl-10">
            <div className="relative flex items-center cursor-pointer" onClick={toggleShopAccordion}>
              <Link href="/">Shop</Link>
              <FaChevronDown
                className={`ml-2 transform transition-transform ${isShopOpen ? 'rotate-180' : ''}`}
                title="Toggle Shop Menu"
              />
              {isShopOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md">
                  <ul className="space-y-2 p-3">
                    <li>
                      <Link href="/">Shop All</Link>
                    </li>
                    <li>
                      <Link href="/">Men</Link>
                    </li>
                    <li>
                      <Link href="/">Women</Link>
                    </li>
                    <li>
                      <Link href="/">Accessories</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/">On Sale</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Brands</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:mr-10">
          {/* Search icon for small screens */}
          <FaSearch
            className="text-[20px] cursor-pointer lg:hidden"
            title="Search"
          />
          {/* Search bar for large screens */}
          <div className="relative hidden lg:flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-[220px] py-2 rounded-[30px] bg-[#F0F0F0]"
              placeholder="Search for products..."
            />
            <FaSearch
              className="absolute left-3 top-3 text-gray-500"
              title="Search"
            />
          </div>
          <FaShoppingCart className="text-[20px] cursor-pointer" title="Cart" />
          <FaUser className="text-[20px] cursor-pointer" title="Account" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
