import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col py-4 bg-semiblack2 items-center justify-between md:px-24 md:flex-row xl:px-36">
      <div>
        <Image src="/logo.png" alt="logo" width="130" height="130" className="w-24 md:w-32" />
      </div>
      <div className="text-white">
        <ul className="hidden gap-7 md:flex ">
          <li><Link href="">Home</Link></li>
          <li><Link href="">Services</Link></li>
          <li><Link href="">Kontak</Link></li>
          <li><Link href="">Karir</Link></li>
          <li><Link href="">Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header