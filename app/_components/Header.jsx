"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const Header = () => {

  const { user, permissions } = useKindeBrowserClient();

  console.log("Roles : ",)

  return (
    <div className="flex flex-col py-4 bg-semiblack2 items-center justify-between md:px-24 md:flex-row xl:px-36">
      <div>
        <Image src="/logo.png" alt="logo" width="130" height="130" className="w-24 md:w-32" />
      </div>
      <div className="text-white">
        <ul className="hidden gap-7 items-center md:flex ">
          <li><Link href="">Home</Link></li>
          <li><Link href="">Services</Link></li>
          <li><Link href="">Kontak</Link></li>
          <li><Link href="">Karir</Link></li>
          {/* <li><LoginLink>Sign In</LoginLink></li>
          <li><LogoutLink>Log out</LogoutLink></li> */}
          {/* </ul>
      </div> */}
          {user ?
            <Popover>
              <PopoverTrigger><h1 className='text-white'>{user.email} {permissions.permissions[0]}</h1></PopoverTrigger>
              <PopoverContent className="w-44">
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">Profile</li>
                  <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">My Booking</li>
                  <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"><LogoutLink>Log out</LogoutLink></li>
                </ul>
              </PopoverContent>
            </Popover>
            :
            <li><LoginLink><Button>Sign In</Button></LoginLink></li>
          }
        </ul>
      </div>
    </div>
  )
}

export default Header