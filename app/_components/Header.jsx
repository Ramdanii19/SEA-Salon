"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
  const isAdmin = permissions?.permissions?.includes('admin');

  return (
    <div className="flex flex-col py-4 bg-semiblack2 items-center justify-between md:px-24 md:flex-row xl:px-36">
      <div>
        <Image src="/logo.png" alt="logo" width="130" height="130" className="w-24 md:w-32" />
      </div>
      <div className="text-white">
        <ul className="hidden gap-7 items-center md:flex ">
          {isAdmin ?
            <>
            </>
            :
            <>
              <li><Link href="" className='font-semibold cursor-pointer hover:text-gold hover:scale-105 transition-all ease-in-out'>Home</Link></li>
              <li><Link href="" className='font-semibold cursor-pointer hover:text-gold hover:scale-105 transition-all ease-in-out'>Service</Link></li>
              <li><Link href="" className='font-semibold cursor-pointer hover:text-gold hover:scale-105 transition-all ease-in-out'>Kontak</Link></li></>
          }

          {user ?
            <Popover>
              <PopoverTrigger>
                <h1 className='text-white font-semibold flex gap-4'>
                  {user.given_name}
                  {isAdmin ?
                    <div className=''>
                      ({permissions.permissions[0]})
                    </div>
                    :
                    <></>
                  }
                </h1>
              </PopoverTrigger>
              <PopoverContent className="w-44">
                <ul className="flex flex-col gap-2">
                  {/* <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">Profile</li>
                  <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">My Booking</li> */}
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