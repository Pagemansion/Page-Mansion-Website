'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn, StaggerContainer, HoverCard, ScaleUp } from '../../ui/animated'

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

export const PropertiesSection = () => {
  return (
    <>
      <div className="">
        <FadeIn>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR PROPERTIES
            </motion.span>
            <motion.h2
              className="text-3xl text-center font-bold py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore Our Highly Rated Properties
            </motion.h2>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PropertiesData.map((property) => (
                <motion.div
                  key={property.id}
                  className="rounded-lg overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    {property.sold && (
                      <motion.span
                        className="absolute top-2 right-2 bg-white text-red-500 px-3 py-1 rounded-full text-xs font-semibold shadow"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        Sold
                      </motion.span>
                    )}
                  </motion.div>
                  <motion.div
                    className="p-4 my-6 bg-[#E7C873] rounded-2xl"
                    style={{
                      boxShadow: '0 4px 32px 0 rgba(220, 220, 220, 0.5)',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                    }}
                    whileHover={{
                      boxShadow: '0 8px 40px 0 rgba(220, 220, 220, 0.7)',
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.h3
                      className="text-xl font-semibold text-black"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {property.name}
                    </motion.h3>
                    <motion.div
                      className="flex items-center gap-2 my-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          className="fill-current text-black"
                        >
                          <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                        </svg>
                      </motion.span>
                      <p className="text-black">{property.location}</p>
                    </motion.div>
                    <motion.ul
                      className="mt-2 flex gap-2 items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {property.features.map((feature, index) => (
                        <li key={index} className="text-sm text-black flex items-center">
                          {feature}
                          {index < property.features.length - 1 && <span className="mx-1">,</span>}
                        </li>
                      ))}
                    </motion.ul>
                    <motion.div
                      className="flex justify-center my-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.button
                        className="flex gap-2 items-center px-5 py-2 text-black hover:text-[#194754] font-semibold transition-colors group"
                        aria-label={`View details of ${property.name}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Details</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            className="fill-black group-hover:fill-[#194754] transition-colors"
                          >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                          </svg>
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <Link href="/properties">
                <div className="flex justify-center my-4">
                  <motion.button
                    className="flex gap-2 items-center px-5 py-2 border border-[#194754] text-[#194754] rounded-full font-semibold hover:bg-[#194754] hover:text-white transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className="fill-[#194754] group-hover:fill-white transition-colors"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </motion.span>
                  </motion.button>
                </div>
              </Link>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </>
  )
}
