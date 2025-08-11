import { FadeIn } from '@/components/ui/animated'
import PropertyShowcase from '@/components/utilities/property-showcase'
import { PropertiesArchive } from '@/components/PropertiesArchive'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Property } from '@/payload-types'
import Image from 'next/image'

import React from 'react'

export const dynamic = 'force-dynamic'

async function getProperties(): Promise<Property[]> {
  const payload = await getPayload({ config })

  const { docs: properties } = await payload.find({
    collection: 'properties',
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    limit: 50,
  })

  return properties
}

export default async function PropertiesPage() {
  const properties = await getProperties()

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
                  At Page Mansion Limited, we understand that property ownership in Nigeria can be
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

          {/* Dynamic Properties from CMS */}
          <div className="py-11">
            <PropertiesArchive
              properties={properties}
              title="Explore Our Highly Rated Properties"
              showFilters={true}
            />
          </div>

          <PropertyShowcase />
        </FadeIn>
      </div>
    </>
  )
}
