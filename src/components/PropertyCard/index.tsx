'use client'
import React from 'react'
import Link from 'next/link'
import { Property, Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'
import { motion } from 'motion/react'

interface PropertyCardProps {
  property: Property
  showDescription?: boolean
  className?: string
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  showDescription = false,
  className = '',
}) => {
  const {
    title,
    slug,
    price,
    currency = 'NGN',
    propertyType,
    status,
    bedrooms,
    bathrooms,
    area,
    location,
    images,
    features,
  } = property

  // Type guards for potentially null values
  const safePropertyType = propertyType || 'property'
  const safePrice = price || 0

  const mainImage = images?.[0]?.image as Media
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    NGN: '₦',
  }

  const formatPrice = (price: number, currency: string | null) => {
    const safeCurrency = currency || 'NGN'
    const symbol = currencySymbols[safeCurrency as keyof typeof currencySymbols] || '₦'
    return `${symbol}${price.toLocaleString()}`
  }

  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${className}`}
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
        className="relative mb-6"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {mainImage && (
          <MediaComponent resource={mainImage} className="w-full h-48 object-cover rounded-2xl" />
        )}
        {status === 'sold' && (
          <motion.span
            className="absolute top-2 right-2 bg-white text-red-500 px-3 py-1 rounded-full text-xs font-semibold shadow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Sold
          </motion.span>
        )}
        {property.featured && (
          <motion.span
            className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Featured
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="p-4 bg-[#E7C873] rounded-2xl"
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
        <motion.div
          className="flex items-center justify-between my-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <motion.h3
            className="text-xl font-semibold text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-sm p-3 bg-black rounded-3xl text-white capitalize">
            {safePropertyType}
          </p>
        </motion.div>

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
          <p className="text-black">
            {location?.city}, {location?.state}
          </p>
        </motion.div>

        {/* <motion.div
          className="flex items-center justify-between my-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className="text-lg font-bold text-black">{formatPrice(safePrice, currency)}</p>
          <p className="text-sm p-3 bg-black rounded-3xl text-white capitalize">
            {safePropertyType}
          </p>
        </motion.div> */}

        {/* Property details */}
        <motion.div
          className="flex items-center gap-4 my-2 text-sm text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {bedrooms && (
            <span>
              {bedrooms} bed{bedrooms !== 1 ? 's' : ''}
            </span>
          )}
          {bathrooms && (
            <span>
              {bathrooms} bath{bathrooms !== 1 ? 's' : ''}
            </span>
          )}
          {area && <span>{area.toLocaleString()} sq ft</span>}
        </motion.div>

        <motion.ul
          className="mt-2 flex gap-2 items-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features?.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-black flex items-center">
              {feature.feature}
              {index < Math.min(features?.length || 0, 3) - 1 && <span className="mx-1">,</span>}
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
          <Link href={`/properties/${slug}`}>
            <motion.button
              className="flex gap-2 items-center px-5 py-2 text-black hover:text-[#194754] font-semibold transition-colors group"
              aria-label={`View details of ${title}`}
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
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
