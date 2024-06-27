"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';

const Page = () => {
  const [serviceName, setServiceName] = useState('');
  const [duration, setDuration] = useState('');

  const addData = () => {
    const data = {
      data: {
        Name: serviceName,
        Durasi: duration
      }
    }

    GlobalApi.services(data).then(resp => {
      console.log(resp);
      if (resp) {

      }
    })
  }



  return (
    <div className='bg-white w-full h-screen p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Book Your Appointment</h1>
        <div className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='serviceName' className='text-gray-600 mb-2'>Service Name:</label>
            <input
              id='serviceName'
              type='text'
              className='border rounded-md p-2'
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder='Enter Service Name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='duration' className='text-gray-600 mb-2'>Duration:</label>
            <input
              id='duration'
              type='text'
              className='border rounded-md p-2'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder='Enter Duration'
            />
          </div>
          <Button type="button" className="px-6 py-2 border-2 border-white text-white" onClick={() => addData()}>Submit</Button>

        </div>
      </div>
    </div>
  );
}

export default Page;
