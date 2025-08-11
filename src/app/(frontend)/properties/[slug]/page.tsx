import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Property, Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'
import { RichText } from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'

export const dynamic = 'force-dynamic'

interface PropertyPageProps {
  params: {
    slug: string
  }
}

async function getProperty(slug: string): Promise<Property | null> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'properties',
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
    limit: 1,
  })

  return docs[0] || null
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = await getProperty(params.slug)

  if (!property) {
    return {}
  }

  return generateMeta({
    title: property.meta?.title || property.title,
    description: property.meta?.description,
    image: property.meta?.image,
  })
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getProperty(params.slug)

  if (!property) {
    notFound()
  }

  const {
    title,
    price,
    currency = 'USD',
    propertyType,
    status,
    bedrooms,
    bathrooms,
    area,
    location,
    images,
    description,
    features,
    amenities,
    agent,
  } = property

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    NGN: '₦',
  }

  const formatPrice = (price: number, currency: string) => {
    const symbol = currencySymbols[currency as keyof typeof currencySymbols] || '$'
    return `${symbol}${price.toLocaleString()}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'sold':
        return 'bg-red-100 text-red-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'off-market':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {images && images.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-96 lg:h-[500px]">
            <div className="lg:col-span-3">
              <MediaComponent
                resource={images[0].image as Media}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {images.length > 1 && (
              <div className="hidden lg:grid grid-rows-2 gap-2">
                {images.slice(1, 3).map((img, index) => (
                  <MediaComponent
                    key={index}
                    resource={img.image as Media}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {location?.address}, {location?.city}, {location?.state} {location?.zipCode}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{formatPrice(price, currency)}</p>
                  <p className="text-sm text-gray-500 capitalize">{propertyType}</p>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center space-x-6 py-4 border-t border-b border-gray-200">
                {bedrooms && (
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
                    </svg>
                    <span className="text-gray-700">
                      {bedrooms} Bedroom{bedrooms !== 1 ? 's' : ''}
                    </span>
                  </div>
                )}
                {bathrooms && (
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8zM6 7a1 1 0 011-1h6a1 1 0 011 1v6a3 3 0 01-3 3H9a3 3 0 01-3-3V7z" />
                    </svg>
                    <span className="text-gray-700">
                      {bathrooms} Bathroom{bathrooms !== 1 ? 's' : ''}
                    </span>
                  </div>
                )}
                {area && (
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-gray-700">{area.toLocaleString()} sq ft</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <div className="prose max-w-none">
                  <RichText content={description} />
                </div>
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              {amenities && amenities.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Neighborhood Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{amenity.amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agent Contact Card */}
            {agent && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  {agent.photo && (
                    <div className="w-16 h-16 mr-4">
                      <MediaComponent
                        resource={agent.photo as Media}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                    <p className="text-gray-600">Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {agent.email}
                  </a>
                  {agent.phone && (
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {agent.phone}
                    </a>
                  )}
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Contact Agent
                </button>
              </div>
            )}

            {/* Map placeholder */}
            {location?.latitude && location?.longitude && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map View</p>
                  <p className="text-xs text-gray-400 ml-2">
                    ({location.latitude}, {location.longitude})
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
