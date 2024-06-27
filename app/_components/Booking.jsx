"use client"
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'


const Booking = () => {

  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const isPastDay = (day) => {
    return day <= new Date();
  }

  useEffect(() => {
    getTime();
  }, [])

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    setTimeSlot(timeList)
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        <div className="inline-block">
          <Button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border-2 border-white text-white bg-transparent">
            Book Appointment
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="flex flex-col gap-3 items-baseline">
                  <h2 className='flex gap-2 items-center'>
                    <CalendarDays className='text-gold w-5 h-5' />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                <div className="mt-3 md:mt-0">
                  <h2 className='flex gap-2 items-center mb-3'>
                    <Clock className='text-gold h-5 w-5' />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        key={index}
                        className={`p-2 border text-center hover:bg-gold hover:text-white cursor-pointer rounded-full ${item.time == selectedTimeSlot && 'bg-gold text-white'}`}>
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <>
              <Button type="button" className="text-red-500 border-red-500" variant="outline">
                Close
              </Button>
              <Button type="button" >
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Booking
