"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import GlobalApi from '../_utils/GlobalApi';
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Review = () => {
  const [ratting, setRatting] = useState([]);
  const [name, setName] = useState('');
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState('');
  const [test, setTest] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State untuk memeriksa ukuran layar
  const { user } = useKindeBrowserClient();

  const reviewsPerPage = isSmallScreen ? 1 : 3; // Jumlah review per halaman berdasarkan ukuran layar

  useEffect(() => {
    getRattingtList()
    handleResize(); // Cek ukuran layar saat komponen di-mount
    window.addEventListener("resize", handleResize); // Tambahkan event listener untuk perubahan ukuran layar
    return () => window.removeEventListener("resize", handleResize); // Hapus event listener saat komponen di-unmount
  }, [test])

  const getRattingtList = () => {
    GlobalApi.getRattings().then(resp => {
      console.log(resp.data.data);
      setRatting(resp.data.data);
    })
  }

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Set ukuran md sebagai batas untuk layar kecil
  }

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // Data yang akan dikirim ke Strapi
    const data = {
      data: {
        Name: user.given_name + " " + user.family_name,
        Star: star,
        Komentar: comment
      }
    };
    try {
      const response = await GlobalApi.postRating(data);
      console.log('Data berhasil dikirim:', response.data);
      setTest(!test)
    } catch (error) {
      console.error('Error mengirim data:', error);
    }
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, ratting.length - reviewsPerPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage;
  const currentReviews = ratting.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div className="w-full bg-semiblack">
      <div className="items-center flex flex-col">
        <p className="text-4xl text-center font-semibold mt-24 text-white">Review</p>
        <Image
          width={150}
          height={0}
          alt="NextUI hero Image"
          src="/divider.png"
          className="mt-5"
        />
        <div className="mt-10">
          <div className="items-center text-white mt-4">
            <p>Rate</p>
            <Rating
              style={{ maxWidth: 250 }}
              itemStyles={myStyles}
              value={star}
              onChange={setStar}
            />
          </div>
          <div className="items-center mt-4">
            <p className='text-white'>Komentar</p>
            <Input
              type="text"
              placeholder="Masukkan komentar Anda"
              className="border-2 border-white text-black"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          {user ?
            <div className="mt-4">
              <Button type="button" className="px-6 py-2 border-2 border-white text-white" disabled={!(star && comment)} onClick={handleSubmit}>Submit</Button>
            </div>
            :
            <div className="mt-4">
              <LoginLink><Button type="button" className="px-6 py-2 border-2 border-white text-white" disabled={!(star && comment)} onClick={handleSubmit}>Submit</Button></LoginLink>
            </div>
          }

        </div>
      </div>
      <div className="mt-10 text-white mx-32 pb-24">
        <div className='text-center lg:text-start'>
          <p className="text-2xl font-bold">Ratting</p>
        </div>
        <div className={`flex gap-5 border-white  ${isSmallScreen ? "flex-col" : "flex-row"}`}>
          {currentReviews.map((data, index) => (
            <div key={index} className={`mt-4  ${isSmallScreen ? "w-full" : "w-1/3"}`}>
              <p><strong>Nama:</strong> {data.attributes.Name}</p>
              <p><Rating
                style={{ maxWidth: 250 }}
                value={data.attributes.Star}
                itemStyles={myStyles}
                isDisabled
              /></p>
              <p><strong>Komentar:</strong> {data.attributes.Komentar}</p>
            </div>
          ))}
        </div>
        {ratting.length > reviewsPerPage && (
          <div className="mt-4 flex justify-between">
            <Button
              type="button"
              className="px-6 py-2 border-2 border-white text-white"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            <Button
              type="button"
              className="px-6 py-2 border-2 border-white text-white"
              onClick={handleNext}
              disabled={currentPage >= ratting.length - reviewsPerPage}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Review
