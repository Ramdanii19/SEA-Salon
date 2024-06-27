"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import GlobalApi from '../_utils/GlobalApi';

const Review = () => {
  const [ratting, setRatting] = useState([]);
  const [name, setName] = useState('');
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState('');
  const [test, setTest] = useState(true)

  useEffect(() => {
    getRattingtList()
  }, [test])


  const getRattingtList = () => {
    GlobalApi.getRattings().then(resp => {
      console.log(resp.data.data);
      setRatting(resp.data.data);
    })
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
        Name: name,
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
          <div className="items-center text-white">
            <p>Nama</p>
            <Input
              type="text"
              placeholder="Masukkan Nama Anda"
              className="border-2 border-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="items-center text-white mt-4">
            <p>Rate</p>
            <Rating
              style={{ maxWidth: 250 }}
              itemStyles={myStyles}
              value={star}
              onChange={setStar}
            />
          </div>
          <div className="items-center text-white mt-4">
            <p>Komentar</p>
            <Input
              type="text"
              placeholder="Masukkan komentar Anda"
              className="border-2 border-white"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Button type="button" className="px-6 py-2 border-2 border-white text-white" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-white mx-32 pb-24">
        <div>
          <p className="text-2xl font-bold">Ratting</p>
        </div>
        <div className="flex gap-5">
          {ratting.map((data, index) => (
            <div key={index} className="mt-4 w-1/3">
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
      </div>
    </div>
  )
}

export default Review