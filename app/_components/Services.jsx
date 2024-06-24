import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center">
      <p className="text-3xl text-center font-semibold mt-24 text-white xl:text-4xls">Service</p>
      <Image
        src="/divider.png"
        alt="NextUI hero Image"
        width={150}
        height={100}
        className="mt-5 sm:w-32 xl:w-40"
      />
      <Card />
    </div>
  )
}

export default Services