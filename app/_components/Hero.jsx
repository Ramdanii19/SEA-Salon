import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Hero = () => {
  return (
    <div className="flex items-center bg-background bg-cover bg-center h-screen w-full">
      <div className="px-6 sm:px-12 md:px-24 xl:px-36 w-full">
        <div className="flex justify-center lg:justify-start">
          <Image
            width={400}
            height={0}
            alt="creative"
            src="/creative.png"
            className="w-32 sm:w-48 md:w-64 lg:w-80 xl:w-[400px] mx-auto lg:mx-0"
          />
        </div>
        <div className="text-center lg:text-left mt-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white w-full mt-2" style={{ fontFamily: "Times New Roman" }}>
            BEAUTY AND <br /> ELEGANCE REDEFINED
          </p>
        </div>
        <div className="text-center lg:text-left mt-2">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gold w-full mt-2">
            Haircuts and Styling - Manicure and Pedicure - Facial Treatments
          </p>
        </div>
        <div className="flex justify-center lg:justify-start mt-6">
          <Link href="/booking"><Button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border-2 border-white text-white bg-transparent">
            Get An Appointment!
          </Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero