'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PropertySearch, { SearchFilters } from '@/components/utilities/property-search'
import { PropertyCard } from '@/components/PropertyCard'
import { usePropertySearch } from '@/hooks/usePropertySearch'
import { FadeIn, StaggerContainer } from '@/components/ui/animated'
import PropertyShowcase from '../utilities/property-showcase'
import Image from 'next/image'

export const PropertySearchPage = () => {
  const { properties, loading, error, searchProperties, loadInitialProperties } =
    usePropertySearch()

  useEffect(() => {
    loadInitialProperties()
  }, [loadInitialProperties])

  const handleSearch = (filters: SearchFilters) => {
    searchProperties(filters)
  }

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
        <FadeIn>
          <div className="py-11 container mx-auto">
            <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
              PROPERTIES
            </span>
          </div>

          <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  At Page Mansions Limited, we understand that property ownership in Nigeria can be
                  challenging without the right support. To meet these needs, our Property
                  Development and Management service is designed to simplify the process from start
                  to finish and beyond. Whether you&apos;re a first-time buyer, diaspora investor,
                  or a busy professional, we handle every stage of development, including
                  architectural design, government approvals, budgeting, and construction, using a
                  trusted network of contractors. Our designs balance modern aesthetics with local
                  climate and lifestyle needs to deliver functional, market-ready properties.
                </p>
                <p className="my-2">
                  After construction, our property management team ensures smooth operation. We
                  handle tenant vetting, rent collection, utility coordination, and routine
                  maintenance. To simplify portfolio management for multi-property owners, our smart
                  dashboards offer real-time updates and remote oversight.
                </p>
              </div>
            </div>
          </div>
          {/* Search Section */}
          <div className="bg-white py-8 shadow-sm">
            <div className="container mx-auto px-4">
              <FadeIn>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Explore Our Highly Rated Properties
                  </h1>
                  <p className="text-gray-600">
                    Search through our extensive collection of properties
                  </p>
                </div>
                <PropertySearch onSearch={handleSearch} loading={loading} />
              </FadeIn>
            </div>
          </div>

          {/* Results Section */}
          <div className="container mx-auto px-4 py-8">
            {error && (
              <motion.div
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-700">{error}</p>
              </motion.div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#194754]"></div>
              </div>
            ) : (
              <>
                {/* Results Count */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-600">
                    {properties.length === 0
                      ? 'No properties found'
                      : `${properties.length} ${properties.length === 1 ? 'property' : 'properties'} found`}
                  </p>
                </motion.div>

                {/* Properties Grid */}
                {properties.length > 0 ? (
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} showDescription={true} />
                    ))}
                  </StaggerContainer>
                ) : (
                  !loading && (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="mb-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
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
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        No properties found
                      </motion.h3>
                      <motion.p
                        className="text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        Try adjusting your search filters to find more properties
                      </motion.p>
                    </motion.div>
                  )
                )}
              </>
            )}
          </div>
          <PropertyShowcase />
        </FadeIn>
      </div>
    </>
  )
}
