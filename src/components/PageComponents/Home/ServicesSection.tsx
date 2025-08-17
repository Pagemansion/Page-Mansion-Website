'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer } from '../../ui/animated'

const servicesData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-candlestick-icon lucide-chart-candlestick"
      >
        <path d="M9 5v4" />
        <rect width="4" height="6" x="7" y="9" rx="1" />
        <path d="M9 15v2" />
        <path d="M17 3v2" />
        <rect width="4" height="8" x="15" y="5" rx="1" />
        <path d="M17 13v3" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      </svg>
    ),
    title: 'Real Estate Development',
    description: 'In-depth understanding of market trends to guide pricing and strategy.',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-house-icon lucide-house"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    title: 'Real Estate Investment & Advisory',
    description:
      'Accurate assessments to determine the true value of your favorite apartment, cottage etc.',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-pen-line-icon lucide-file-pen-line"
      >
        <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
        <path d="M8 18h1" />
      </svg>
    ),
    title: 'Land Acquisition & Development',
    description:
      'Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.',
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-map-pin-house-icon lucide-map-pin-house"
      >
        <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
        <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
        <path d="M18 22v-3" />
        <circle cx="10" cy="10" r="3" />
      </svg>
    ),
    title: 'Property Marketing & Sales Strategy',
    description:
      'Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.',
  },
]

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <div className="">
        <FadeIn>
          <div className="py-11 container">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR SERVICES
            </motion.span>
          </div>
        </FadeIn>

        <div className="py-11 container mx-auto rounded-xl">
          <motion.h3
            className="font-bold text-center text-black text-3xl my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Highlights of Our Real-Estate Expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SlideInLeft>
              <StaggerContainer className="flex flex-col gap-3">
                {servicesData.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`
                      rounded-xl cursor-pointer overflow-hidden
                      transition-all duration-500 ease-in-out
                      ${hoveredCard === service.id ? 'bg-[#E7C873] shadow-lg' : 'bg-[#f5f6fa] shadow-sm'}
                    `}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Always visible content - Icon and Title */}
                    <div className="p-6">
                      <motion.span
                        className="inline-block text-gray-700 mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>

                    {/* Description that slides in on hover */}
                    <motion.div
                      className="px-6 overflow-hidden"
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{
                        maxHeight: hoveredCard === service.id ? 128 : 0,
                        opacity: hoveredCard === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <p className="text-black leading-relaxed pb-6">{service.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </SlideInLeft>

            <SlideInRight>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/assets/about-banner.png"
                  alt=""
                  width={500}
                  height={500}
                  className=""
                />
              </motion.div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </>
  )
}
