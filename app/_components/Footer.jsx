"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi';

const Footer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
  }, [])

  const getServices = () => {
    GlobalApi.getServices().then(resp => {
      console.log(resp.data.data);
      setServices(resp.data.data);
    })
  }
  return (
    <footer className='bg-black'>
      <div className="mx-auto  max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex gap-8 lg:grid-cols-3 justify-center items-center">
          <div>
            <Image src="/logo.png" alt="logo" width={200} height={100} />
            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              SEA Salon menonjol dengan pelayanan profesional, produk berkualitas tinggi, inovasi terkini, kenyamanan pelanggan, dan komitmen pada kesehatan rambut dan kulit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gold">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                {services.map((data, index) => (
                  <li key={index}>
                    <a className="text-white transition hover:text-gold" href="#">
                      {data.attributes.Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gold">Menu</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white transition hover:text-gold" href="#"> Home </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-gold" href="#"> Services </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-gold" href="#"> Kontak </a>
                </li>

              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gold">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <p className='text-white'>Thomas</p>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-white hover:text-gold"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1">08123456789</span>
                  </a>
                </li>
                <li>
                  <p className='text-white'>Sekar</p>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-white hover:text-gold"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1"> 08164829372
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Muhamad Ramdani</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
