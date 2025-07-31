import PropertyShowcase from '@/components/utilities/property-showcase'
import Image from 'next/image'
import React from 'react'

export default function PropertiesPage() {
  const PropertiesData = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Beverly Hills',
      price: '$3,500,000',
      image: '/assets/property1.png',
      sold: true,
      features: ['Pool', 'Garden', 'Garage'],
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: 'New York',
      price: '$1,200,000',
      image: '/assets/property2.png',
      sold: false,
      features: ['Gym', 'Balcony'],
    },
    {
      id: 3,
      name: 'Beach House',
      location: 'Miami',
      price: '$2,800,000',
      image: '/assets/property3.png',
      sold: true,
      features: ['Ocean View', 'Private Beach'],
    },
    {
      id: 4,
      name: 'Country Cottage',
      location: 'Napa Valley',
      price: '$750,000',
      image: '/assets/property4.png',
      sold: false,
      features: ['Garden', 'Quiet Area'],
    },
    {
      id: 5,
      name: 'Penthouse Suite',
      location: 'Chicago',
      price: '$4,000,000',
      image: '/assets/property5.png',
      sold: true,
      features: ['City View', 'Luxury Amenities'],
    },
  ]
  return (
    <>
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Our Properties</h1>
      </section>
      <div className="">
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            PROPERTIES
          </span>
        </div>
        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-auto">
              <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden">
                <div className="relative pb-5">
                  <Image
                    src="/assets/property-image1.png"
                    width={600}
                    height={400}
                    alt="first-image"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Left - Aerial View */}
              <div className="relative group cursor-pointer overflow-hidden">
                <div className="relative w-full h-[250px]">
                  <Image
                    src="/assets/property-image2.png"
                    alt="second-image"
                    width={600}
                    height={400}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Right - Interior */}
              <div className="relative group cursor-pointer overflow-hidden">
                <div className="relative w-full h-[250px]">
                  <Image
                    src="/assets/property-image3.png"
                    alt="second-image"
                    width={600}
                    height={400}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-3xl my-4">Real Estate Development</h3>
              <p className="my-2">
                At Page Mansion Limited, we understand that property ownership in Nigeria can be
                challenging without the right support. To meet these needs, our Property Development
                and Management service is designed to simplify the process from start to finish and
                beyond. Whether you&apos;re a first-time buyer, diaspora investor, or a busy
                professional, we handle every stage of development, including architectural design,
                government approvals, budgeting, and construction, using a trusted network of
                contractors. Our designs balance modern aesthetics with local climate and lifestyle
                needs to deliver functional, market-ready properties.
              </p>
              <p className="my-2">
                After construction, our property management team ensures smooth operation. We handle
                tenant vetting, rent collection, utility coordination, and routine maintenance. To
                simplify portfolio management for multi-property owners, our smart dashboards offer
                real-time updates and remote oversight.
              </p>
            </div>
          </div>
        </div>
        {/* properties */}
        <div className="py-11 container mx-auto">
          <h2 className="text-3xl text-center font-bold py-8">
            Explore Our Highly Rated Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PropertiesData.map((property) => (
              <div
                key={property.id}
                className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.name}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  {property.sold && (
                    <span className="absolute top-2 right-2 bg-white text-red-500 px-3 py-1 rounded-full text-xs font-semibold shadow">
                      Sold
                    </span>
                  )}
                </div>
                <div
                  className="p-4 my-6 bg-[#E7C873] rounded-2xl "
                  style={{
                    boxShadow: '0 4px 32px 0 rgba(220, 220, 220, 0.5)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                  }}
                >
                  <h3 className="text-xl font-semibold text-black">{property.name}</h3>
                  <div className="flex items-center gap-2 my-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className="fill-current text-black"
                      >
                        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                      </svg>
                    </span>
                    <p className="text-black">{property.location}</p>
                  </div>
                  <ul className="mt-2 flex gap-2 items-center">
                    {property.features.map((feature, index) => (
                      <li key={index} className="text-sm text-black flex items-center">
                        {feature}
                        {index < property.features.length - 1 && <span className="mx-1">,</span>}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center my-4">
                    <button
                      className="flex gap-2 items-center px-5 py-2 text-black font-semibold hover:text-[#194754] transition-colors group"
                      aria-label={`View details of ${property.name}`}
                    >
                      <span>View Details</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          className="fill-black group-hover:fill-[#194754] transition-colors group-hover:animate-spin-once"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PropertyShowcase />
      </div>
    </>
  )
}
