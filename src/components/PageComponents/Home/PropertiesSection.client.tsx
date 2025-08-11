'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer } from '../../ui/animated'
import { PropertyCard } from '../../PropertyCard'
import { Property } from '@/payload-types'

// Fallback message component for when no properties exist
const NoPropertiesMessage = () => (
  <motion.div
    className="text-center py-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="mb-4"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        className="mx-auto text-gray-400 mb-4"
        fill="currentColor"
      >
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19ZM7 15H17V17H7V15ZM7 11H17V13H7V11Z"></path>
      </svg>
    </motion.div>
    <motion.h3
      className="text-xl font-semibold text-gray-600 mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      No properties available
    </motion.h3>
    <motion.p
      className="text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Check back later for new property listings
    </motion.p>
  </motion.div>
)

interface PropertiesSectionClientProps {
  initialProperties?: Property[]
}

export const PropertiesSectionClient: React.FC<PropertiesSectionClientProps> = ({
  initialProperties = [],
}) => {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialProperties.length === 0) {
      // Fetch properties client-side if not provided
      const fetchProperties = async () => {
        setLoading(true)
        try {
          const response = await fetch('/api/properties?featured=true&limit=6')
          if (response.ok) {
            const data = await response.json()
            setProperties(data.docs || [])
          }
        } catch (error) {
          console.error('Error fetching properties:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchProperties()
    }
  }, [initialProperties])

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

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#194754]"></div>
            </div>
          ) : properties.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} showDescription={false} />
              ))}
            </StaggerContainer>
          ) : (
            <NoPropertiesMessage />
          )}

          {/* Show "View All Properties" button only when properties exist */}
          {properties.length > 0 && (
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
          )}
        </div>
      </FadeIn>
    </div>
  )
}
