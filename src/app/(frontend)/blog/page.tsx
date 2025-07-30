import Image from 'next/image'
import React from 'react'

const BlogData = [
  {
    id: 1,
    title: 'Legal Essentials: Understanding Documentation In Real Estate Transactions',
    read: '6 min',
    image: '/assets/property1.png',
  },
  {
    id: 2,
    title: 'The Importance Of Property Valuation: Getting The Best Price For Your Home',
    read: '5 min',
    image: '/assets/property2.png',
  },
  {
    id: 3,
    title: 'How To Choose The Right Property Partner For Your Needs.',
    read: '4 min',
    image: '/assets/property3.png',
  },
]
export default function BlogPage() {
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
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Blogs</h1>
      </section>
       <div className="py-11 container mx-auto">
                <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
                  BLOG
                </span>
                <h2 className="text-3xl text-center font-bold py-8">Latest Blogs & Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {BlogData.map((property) => (
                    <div
                      key={property.id}
                      className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                      <div className="relative">
                        <Image
                          src={property.image}
                          alt={property.title}
                          width={400}
                          height={192}
                          className="w-full h-48 object-cover rounded-2xl"
                        />
                      </div>
                      <div
                        className="p-4 my-6 bg-[#f4f4f4] rounded-2xl "
                        style={{
                          boxShadow: '0 4px 32px 0 rgba(220, 220, 220, 0.5)',
                          backdropFilter: 'blur(2px)',
                          WebkitBackdropFilter: 'blur(2px)',
                        }}
                      >
                        <span className="p-3 border border-black text-black rounded-3xl font-semibold">
                          {property.read} read
                        </span>
                        <h3 className="text-lg font-semibold text-black my-4">{property.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
    </>
  )
}
