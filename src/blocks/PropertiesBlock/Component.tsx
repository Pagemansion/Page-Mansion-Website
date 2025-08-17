import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Property } from '@/payload-types'
import { PropertyCard } from '@/components/PropertyCard'
import { StaggerContainer } from '@/components/ui/animated'
import { motion } from 'motion/react'
import Link from 'next/link'

type PropertiesBlockProps = {
  title?: string
  subtitle?: string
  limit?: number
  showFeaturedOnly?: boolean
  propertyType?: string[]
  showViewAllButton?: boolean
}

async function getProperties({
  limit = 6,
  showFeaturedOnly = true,
  propertyType = [],
}: {
  limit?: number
  showFeaturedOnly?: boolean
  propertyType?: string[]
}): Promise<Property[]> {
  const payload = await getPayload({ config })

  const whereConditions: any = {
    _status: {
      equals: 'published',
    },
  }

  if (showFeaturedOnly) {
    whereConditions.featured = {
      equals: true,
    }
  }

  if (propertyType && propertyType.length > 0) {
    whereConditions.propertyType = {
      in: propertyType,
    }
  }

  const { docs: properties } = await payload.find({
    collection: 'properties',
    where: whereConditions,
    sort: '-publishedAt',
    limit,
  })

  return properties
}

export const PropertiesBlockComponent: React.FC<PropertiesBlockProps> = async ({
  title = 'Featured Properties',
  subtitle,
  limit = 6,
  showFeaturedOnly = true,
  propertyType = [],
  showViewAllButton = true,
}) => {
  const properties = await getProperties({
    limit,
    showFeaturedOnly,
    propertyType,
  })

  if (properties.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} showDescription={false} />
          ))}
        </StaggerContainer>

        {showViewAllButton && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/properties"
              className="inline-flex items-center px-8 py-3 bg-[#194754] text-white font-semibold rounded-lg hover:bg-[#2a5a68] transition-colors duration-300"
            >
              View All Properties
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
