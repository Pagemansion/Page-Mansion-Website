'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn, StaggerContainer } from '../../ui/animated'
import { PropertyCard } from '../../PropertyCard'
import { Property } from '@/payload-types'
// Empty state component for when no properties are available
const EmptyPropertiesState = () => (
  <motion.div
    className="text-center py-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="mb-6"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        className="mx-auto text-gray-400 mb-4"
        fill="currentColor"
      >
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
      </svg>
    </motion.div>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">No Properties Available</h3>
    <p className="text-gray-600 mb-6">
      There are currently no properties to display. Check back later or contact us for more
      information.
    </p>
    <Link href="/admin">
      <motion.button
        className="px-6 py-2 bg-[#194754] text-white rounded-full font-semibold hover:bg-[#2a5a68] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Properties (Admin)
      </motion.button>
    </Link>
  </motion.div>
)

interface PropertiesSectionClientProps {
  properties: Property[]
}

export const PropertiesSectionClient: React.FC<PropertiesSectionClientProps> = ({ properties }) => {
  return (
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

          {properties.length > 0 ? (
            <>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} showDescription={false} />
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
                      <span>View All Properties</span>
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
            </>
          ) : (
            <EmptyPropertiesState />
          )}
        </div>
      </FadeIn>
    </div>
  )
}
