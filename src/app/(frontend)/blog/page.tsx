"use client"
import { FadeIn, StaggerContainer } from '@/components/ui/animated'
import { motion } from 'motion/react'
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
      <FadeIn>
        <div className="py-11 container mx-auto">
          <motion.span
            className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            BLOG
          </motion.span>
          <motion.h2
            className="text-3xl text-center font-bold py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latest Blogs & Articles
          </motion.h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogData.map((property) => (
              <motion.div
                key={property.id}
                className="rounded-lg overflow-hidden"
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
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </motion.div>
                <motion.div
                  className="p-4 my-6 bg-[#f4f4f4] rounded-2xl"
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
                  <motion.span
                    className="p-3 border border-black text-black rounded-3xl font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {property.read} read
                  </motion.span>
                  <motion.h3
                    className="text-lg font-semibold text-black my-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {property.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </>
  )
}
