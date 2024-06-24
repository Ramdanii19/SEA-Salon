import Image from 'next/image';
import React from 'react';

// Definisikan data di luar komponen
const cardData = [
  {
    id: 1,
    img: '/Haircuts.png',
    title: 'Haircuts and Styling',
    description: 'Pemotongan ujung rambut untuk menghilangkan bagian yang rusak atau bercabang, menjaga panjang dan kesehatan rambut.'
  },
  {
    id: 2,
    img: '/manicure.png',
    title: 'Manicure and Pedicure',
    description: 'Pemotongan ujung rambut untuk menghilangkan bagian yang rusak atau bercabang, menjaga panjang dan kesehatan rambut.'
  },
  {
    id: 3,
    img: '/facial-treatment.png',
    title: 'Facial Treatments',
    description: 'Pemotongan ujung rambut untuk menghilangkan bagian yang rusak atau bercabang, menjaga panjang dan kesehatan rambut.'
  }
];

const Card = () => {
  return (
    <div className="w-full mt-10 mb-24 flex flex-col gap-10  lg:flex-row lg:px-24 xl:px-36">
      {cardData.map(card => (
        <div key={card.id} className={"w-1/3 text-white flex flex-col items-center mx-auto"}>
          <Image
            width={100}
            height={0}
            alt="NextUI hero Image"
            src={card.img}
            className="border-2 border-gold p-4 mb-5"
          />
          <p className="font-medium text-xl mb-5">{card.title}</p>
          <p className="text-abuterang text-center text-lg">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
