import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Component {
    star: StaticImageData,
    name: string,
    tick: StaticImageData,
    review: string,
}

function Reviews(props: Component) {
    return (
        <div className='flex items-center justify-center'>
            <div className='border-[3px] border-gray-500 rounded-[10px] w-[90%] p-5 space-y-3'>
                <div className='flex'>
                    <Image src={props.star} alt='img' className='w-[30px]'/>
                    <Image src={props.star} alt='img' className='w-[30px]'/>
                    <Image src={props.star} alt='img' className='w-[30px]'/>
                    <Image src={props.star} alt='img' className='w-[30px]'/>
                </div>
                <div className='flex'>
                    <h1 className='text-[25px] font-bold'>{props.name}</h1>
                    <Image src={props.tick} alt='img' className='w-[30px]'/>
                </div>
                <p className='text-gray-500'>{props.review}</p>
            </div>
        </div>
    )
}

export default Reviews
