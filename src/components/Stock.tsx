import React from 'react';
import Image, { StaticImageData } from 'next/image';

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

function Stock({ item, imgAlt, type, star, rating, cost, discount, markoff }: StockProps) {
    return (
        <div className="ml-10">
            <div className="w-[80%] rounded-[10px] mx-auto">
                <Image src={item} alt={imgAlt} className="w-[400px]" />
            </div>
            <h1 className="text-[23px] font-semibold">{type}</h1>
            <div className="flex space-x-3">
                {[...Array(4)].map((_, i) => (
                    <Image key={i} src={star} alt={`${imgAlt}-star`} className="w-[30px]" />
                ))}
                <span className="text-[20px] pt-2">{rating}</span>
            </div>
            <div className="flex items-center mt-2">
                <span className="text-[25px] font-semibold">{cost}</span>
                {discount && (
                    <span className="text-[25px] line-through text-gray-400 pl-5">{discount}</span>
                )}
                {markoff && (
                    <span className="bg-[#ff8c8c] rounded-[30px] text-[red] px-3 py-1 font-bold ml-10">
                        {markoff}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Stock;
