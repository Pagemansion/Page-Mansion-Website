import React from 'react'
import { Property } from '@/payload-types'
import { PropertyCard } from '@/components/PropertyCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface PropertiesArchiveProps {
  properties: Property[]
  title?: string
  showFilters?: boolean
  className?: string
}

export const PropertiesArchive: React.FC<PropertiesArchiveProps> = ({
  properties,
  title = 'Properties',
  showFilters = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center font-bold py-8">{title}</h2>

        {showFilters && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Filter Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Location</option>

                <option value="abuja">Abuja</option>
                <option value="lagos">Lagos</option>
                <option value="port-harcourt">Port-Harcourt</option>
                <option value="delta">Delta</option>
                <option value="nassarawa">Nassarawa</option>
                <option value="kaduna">Kaduna</option>
              </select>

             

              <input
                type="number"
                placeholder="Min Price"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="Max Price"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} showDescription={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h6m-6 4h6"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No properties found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search criteria or check back later for new listings.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
