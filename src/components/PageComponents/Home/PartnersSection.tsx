import Image from 'next/image';
import React from 'react'

export default function PartnersSection() {
  return ( 
    <>
      <div className="container py-8">
        <h2 className="text-3xl text-center font-bold py-8">Our Partners</h2>
        <div className="overflow-hidden relative">
          <div
            className="flex animate-slide gap-6 items-center"
            style={{
              width: '200%', // Ensures enough width for animation
              animation: 'slide 15s linear infinite',
            }}
          >
            <Image src="/assets/partner1.png" alt="Partner 1" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner2.png" alt="Partner 2" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner3.png" alt="Partner 3" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner4.png" alt="Partner 4" width={160} height={30} className="h-10 w-auto object-contain" />
            {/* Duplicate for seamless loop */}
            <Image src="/assets/partner5.png" alt="Partner 5" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner6.png" alt="Partner 6" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner7.png" alt="Partner 7" width={160} height={30} className="h-10 w-auto object-contain" />
            <Image src="/assets/partner8.png" alt="Partner 8" width={160} height={30} className="h-10 w-auto object-contain" />
          </div>
          <style>
            {`
              @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
              }
              .animate-slide {
            min-width: 200%;
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}

