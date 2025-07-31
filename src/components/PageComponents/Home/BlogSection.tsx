'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn, StaggerContainer, HoverCard } from '../../ui/animated'

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

const BlogSection = () => {
  return (
    <>
      <div>
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
              {BlogData.map((blog) => (
                <motion.div
                  key={blog.id}
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
                      src={blog.image}
                      alt={blog.title}
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
                      {blog.read} read
                    </motion.span>
                    <motion.h3
                      className="text-lg font-semibold text-black my-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {blog.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="flex justify-center my-4">
                <motion.button
                  className="flex gap-2 items-center px-5 py-2 border border-[#194754] text-[#194754] rounded-full font-semibold hover:bg-[#194754] hover:text-white transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View More</span>
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
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default BlogSection
