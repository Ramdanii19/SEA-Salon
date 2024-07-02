import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="w-full bg-semiblack flex flex-col items-center">
      <p className="text-3xl text-center font-semibold mt-24 text-white xl:text-4xl ">Selamat datang di <span className="text-gold">SEA Salon</span></p>
      <Image
        src="/divider.png"
        alt="NextUI hero Image"
        width={150}
        height={100}
        className="mt-5 sm:w-32 xl:w-40"
      />
      <div className=" mt-10 mb-24 sm:w-3/4 lg:w-4/6 xl:w-1/2">
        <p className="text-abuterang max-w-4xl text-justify lg:text-md xl:text-xl">SEA Salon adalah tempat perawatan rambut dan kecantikan mewah terbesar di Indonesia. Sejak didirikan, SEA Salon telah berkembang pesat dengan berbagai layanan unggulan dan fasilitas modern. Kami berkomitmen untuk memberikan pengalaman terbaik bagi setiap pelanggan, dengan para profesional yang berpengalaman dan produk berkualitas tinggi</p>
      </div>
    </div>
  )
}

export default About