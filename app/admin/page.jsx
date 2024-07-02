"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';

const Admin = () => {
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
    <div className='bg-black w-full h-screen p-8 text-white'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Book Your Appointment</h1>
        <div className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='serviceName' className='text-white mb-2'>Service Name:</label>
            <input
              id='serviceName'
              type='text'
              className='border rounded-md p-2 text-black'
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder='Enter Service Name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='duration' className='text-white mb-2'>Duration:</label>
            <input
              id='duration'
              type='number'
              className='border rounded-md p-2 text-black'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder='Enter Duration ( 1 = 1 hourse)'
            />
          </div>
          <Button type="button" className="px-6 py-2 border-2 border-white text-white" disabled={!(serviceName && duration)} onClick={() => addData()}>Submit</Button>

        </div>
      </div>
    </div>
  );
}

export default Admin;
