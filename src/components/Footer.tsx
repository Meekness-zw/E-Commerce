import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import visa from '../../public/images/Visa.svg'
import ms from '../../public/images/Master Card.svg'
import ap from '../../public/images/Apple Pay.svg'
import gp from '../../public/images/G Pay.svg'

function Footer() {
    return (
        <div>
            <div className="relative bg-[#F0F0F0] mt-64 md:mt-60">
                <div className='flex items-center justify-center absolute -top-52 lg:-top-20 lg:ml-10'>
                    <div className='bg-black w-[95%] lg:w-[100%] rounded-[10px] lg:flex lg:justify-evenly'>
                        <h1 className='font-extrabold text-[35px] mt-10 mb-10 ml-5 text-white lg:w-[50%]'>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
                        <div className='pt-14'>
                            <div className='flex flex-col items-center justify-center'>
                                <input type="text" placeholder='Enter your email adress' className='w-[90%] lg:w-[100%] text-[20px] text-gray-400 p-3 lg:p-[7px] rounded-full pl-10 lg:pl-14' />
                            </div>
                            <div className='flex items-center justify-center md:justify-start mt-5 pb-10 md:pl-10 lg:pl-0'>
                                <button className='bg-white rounded-full pl-[85px] pb-[15px] lg:pt-[10px] lg:pb-[10px] pt-[15px] pr-[85px] font-medium'>Subscribe to Newsletter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5 space-y-5 lg:p-10'>
                    <div className='lg:flex'>
                        <div className=''>
                            <h1 className='md:text-[25px] text-[25px] font-extrabold pt-36'>SHOP.CO</h1>
                            <p className='text-gray-500 lg:w-[60%]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className='flex space-x-7'>
                                <div className='w-10 h-10 border-[1px] border-black flex items-center justify-center rounded-full bg-white'>
                                    <FaTwitter className="text-[20px] cursor-pointer" />
                                </div>
                                <div className='w-10 h-10 border-[1px] border-black flex items-center justify-center rounded-full bg-black text-white'>
                                    <FaFacebookF className="text-[20px] cursor-pointer" />
                                </div>
                                <div className='w-10 h-10 border-[1px] border-black flex items-center justify-center rounded-full bg-white'>
                                    <FaInstagram className="text-[20px] cursor-pointer" />
                                </div>
                                <div className='w-10 h-10 border-[1px] border-black flex items-center justify-center rounded-full bg-white'>
                                    <FaGithub className="text-[20px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className='space-y-5 grid grid-cols-2 lg:grid-cols-4 lg:pt-32 space-x-3 lg:space-x-10 lg:-ml-32'>
                            <div className='mt-5'>
                                <h1 className='text-[25px] font-bold pb-5'>COMPANY</h1>
                                <ul className='text-[20px] lg:text-[15px] text-gray-500 space-y-3'>
                                    <li>About</li>
                                    <li>Features</li>
                                    <li>Works</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[25px] font-bold pb-5'>HELP</h1>
                                <ul className='text-[20px] lg:text-[15px] text-gray-500 space-y-3'>
                                    <li>Customer Suport</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Contions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[25px] font-bold pb-5'>FAQ</h1>
                                <ul className='text-[20px] lg:text-[15px] text-gray-500 space-y-3'>
                                    <li>Account</li>
                                    <li>Manage Deliveries</li>
                                    <li>Orders</li>
                                    <li>Payment</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[25px] font-bold pb-5'>RESOURCE</h1>
                                <ul className='text-[20px] lg:text-[15px] text-gray-500 space-y-3'>
                                    <li>Free eBook</li>
                                    <li>Development Tutorial</li>
                                    <li>How to -Blog</li>
                                    <li>Youtube Playlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center pt-10 lg:pt-20 lg:flex-row lg:justify-between'>
                        <p className='text-gray-500 text-[15px]'>Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className='flex justify-center items-center'>
                            <Image src={visa} alt='img' />
                            <Image src={ms} alt='img' />
                            <Image src={ap} alt='img' />
                            <Image src={gp} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
