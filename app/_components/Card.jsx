import Image from 'next/image';
import React from 'react';

// Definisikan data di luar komponen
const cardData = [
  {
    id: 1,
    img: '/haircuts.png',
    title: 'Haircuts and Styling',
    description: 'Pemotongan rambut kami dirancang untuk merawat dan menjaga panjang serta kesehatan rambut Anda, dengan fokus pada hasil terbaik dan gaya yang sesuai dengan keinginan Anda'
  },
  {
    id: 2,
    img: '/manicure.png',
    title: 'Manicure and Pedicure',
    description: 'Manikur dan pedikur di SEA Salon menawarkan perawatan lengkap untuk tangan dan kaki, menghasilkan penampilan yang cantik dan kesehatan yang optimal'
  },
  {
    id: 3,
    img: '/facial-treatment.png',
    title: 'Facial Treatments',
    description: 'Perawatan wajah di SEA Salon mengutamakan kesehatan kulit Anda dengan menggunakan teknik perawatan terbaru dan produk berkualitas, untuk kulit yang berseri dan sehat secara menyeluruh'
  }
];

const Card = () => {
  return (
    <div className="w-full mt-10 mb-24 flex flex-col gap-10  lg:flex-row lg:px-24 xl:px-36">
      {cardData.map(card => (
        <div key={card.id} className={"w-full text-white flex flex-col items-center mx-auto"}>
          <Image
            width={100}
            height={0}
            alt="NextUI hero Image"
            src={card.img}
            className="border-2 border-gold p-4 mb-5"
          />
          <p className="font-medium text-xl mb-5">{card.title}</p>
          <p className="text-abuterang text-center text-lg w-3/4 lg:w-full">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
