'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Property {
  id: number
  title: string
  image: string
  featured?: boolean
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Geometric Villa',
    image: '/assets/gallery1.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Traditional Stone Estate',
    image: '/assets/gallery2.png',
  },
  {
    id: 3,
    title: 'Contemporary Glass House',
    image: '/assets/gallery3.png',
  },
  {
    id: 4,
    title: 'Modern Wooden Retreat',
    image: '/assets/gallery4.png',
  },
  {
    id: 5,
    title: 'Luxury Pool Villa',
    image: '/assets/gallery5.png',
  },
]

export default function PropertyShowcase() {
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 container mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Discover Stylish Spaces and
          <br />
          Inspiring Details
        </h2>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto">
        {/* Featured Property 1 - Large Left */}
        <div
          className="lg:col-span-6 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
          onMouseEnter={() => setHoveredProperty(properties[0].id)}
          onMouseLeave={() => setHoveredProperty(null)}
        >
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={properties[0].image || '/placeholder.svg'}
              alt={properties[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                backgroundColor:
                  hoveredProperty === properties[0].id
                    ? 'rgba(231, 200, 115, 0.3)'
                    : 'rgba(231, 200, 115, 0.2)',
              }}
            />

            {/* View Details Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className={`
                  bg-gray-900/80 text-white px-8 py-3 rounded-full font-medium
                  transition-all duration-300 backdrop-blur-sm
                  ${
                    hoveredProperty === properties[0].id
                      ? 'opacity-100 transform scale-100'
                      : 'opacity-80 transform scale-95'
                  }
                `}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Featured Property 2 - Large Right */}
        <div
          className="lg:col-span-6 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
          onMouseEnter={() => setHoveredProperty(properties[1].id)}
          onMouseLeave={() => setHoveredProperty(null)}
        >
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={properties[1].image || '/placeholder.svg'}
              alt={properties[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />

            {/* Hover Overlay */}
            <div
              className={`
              absolute inset-0 flex items-center justify-center
              transition-opacity duration-300
              ${hoveredProperty === properties[1].id ? 'opacity-100' : 'opacity-0'}
            `}
              style={{
                backgroundColor: 'rgba(231, 200, 115, 0.85)',
              }}
            >
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row Properties */}
        {properties.slice(2).map((property, index) => (
          <div
            key={property.id}
            className={`
              relative group cursor-pointer overflow-hidden rounded-2xl
              ${index === 0 ? 'lg:col-span-4' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-4'}
            `}
            onMouseEnter={() => setHoveredProperty(property.id)}
            onMouseLeave={() => setHoveredProperty(null)}
          >
            <div className="relative h-[300px]">
              <Image
                src={property.image || '/placeholder.svg'}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/30" />

              {/* Hover Overlay */}
              <div
                className={`
                absolute inset-0 bg-[#E7C873]/60 flex items-center justify-center
                transition-opacity duration-300
                ${hoveredProperty === property.id ? 'opacity-100' : 'opacity-0'}
              `}
              >
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
