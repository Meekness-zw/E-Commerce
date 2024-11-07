import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Component {
  imgData: StaticImageData,
  imgAlt: string,
}

function DressStyles(props: Component) {
  return (
    <div>
      <div className='p-4'> {/* Added padding to the container */}
        <div className='flex justify-center items-center mb-10'>
          <Image
            src={props.imgData}
            alt={props.imgAlt}
            className='w-full h-[300px] object-cover rounded-lg' // Image with rounded edges
          />
        </div>
      </div>
    </div>
  )
}

export default DressStyles
