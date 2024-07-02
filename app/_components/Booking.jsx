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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from '../_utils/GlobalApi'
import { toast } from 'sonner'
import { Input } from "@/components/ui/input"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Booking = () => {

  const [services, setServices] = useState([]);
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const { user } = useKindeBrowserClient();
  const [reservation, setReservation] = useState();
  const [duration, setDuration] = useState(1);
  const [telepon, setTelepon] = useState('');

  const isPastDay = (day) => {
    return day <= new Date();
  }

  useEffect(() => {
    getServices()
  }, [])

  const getTime = (duration) => {
    const timeList = [];
    for (let i = 9; i <= 12; i += duration) {
      timeList.push({
        time: `${i}:00 AM`
      })
    }
    for (let i = 1; i <= 8; i += duration) {
      timeList.push({
        time: `${i}:00 PM`
      })
    }
    setTimeSlot(timeList)
  }

  const saveBooking = () => {
    const data = {
      data: {
        User_id: user.id,
        Username: user.given_name + " " + user.family_name,
        Phone: telepon,
        Time: selectedTimeSlot,
        Date: date,
        Reservation: reservation
      }
    }

    GlobalApi.bookAppointment(data).then(resp => {
      console.log(resp);
      if (resp) {
        toast("Booking Confirmation will send on Email");
      }
    })
  }

  const getServices = () => {
    GlobalApi.getServices().then(resp => {
      console.log(resp.data.data);
      setServices(resp.data.data);
      if (resp.data.data.length > 0) {
        const defaultDuration = resp.data.data[0].attributes.Durasi;
        setDuration(defaultDuration);
        getTime(defaultDuration);
      }
    })
  }


  const handleServiceChange = (value) => {
    const selectedService = services.find(service => service.attributes.Name === value);
    if (selectedService) {
      const serviceDuration = selectedService.attributes.Durasi;
      setDuration(serviceDuration);
      getTime(serviceDuration);
      setReservation(value);
    }
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        <div className="inline-block">
          {user ?
            <Button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border-2 border-white text-white bg-transparent hover:border-gold hover:text-black hover:font-bold ">
              Book Appointment
            </Button>
            :
            <LoginLink> <Button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border-2 border-white text-white bg-transparent hover:border-gold hover:text-black hover:font-bold ">
              Book Appointment
            </Button></LoginLink>
          }
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 ">
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
                    className="rounded-md border-2"
                  />
                </div>
                <div className="mt-3 md:mt-0">
                  <h2 className='flex gap-2 items-center mb-3'>
                    <Clock className='text-gold h-5 w-5' />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border-2  rounded-lg p-5">
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        key={index}
                        className={`p-2 border-2 text-center hover:bg-gold hover:text-white cursor-pointer rounded-full ${item.time == selectedTimeSlot && 'bg-gold text-white'}`}>
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className=" justify-start items-end flex">

                  <Select onValueChange={handleServiceChange}>
                    <SelectTrigger className="w-11/12">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((data, index) => (
                        <SelectItem value={data.attributes.Name} key={index}>{data.attributes.Name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="items-center text-white mt-4 ">
                    <p>No Tlpn</p>
                    <Input
                      type="text"
                      placeholder="Masukkan nomor telpon Anda"
                      className="border-2 text-black"
                      value={telepon}
                      onChange={(e) => setTelepon(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <>
              <Button type="button" disabled={!(date && selectedTimeSlot && reservation && telepon)} onClick={() => saveBooking()}>
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
