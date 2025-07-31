'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, HoverCard } from '../../ui/animated'

export const AboutSection = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path>
        </svg>
      ),
      title: 'Trusted Real Estate Developers',
      description:
        'With a proven track record in delivering high-quality, secure, and affordable properties, Page Mansion is a name clients rely on.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z"></path>
        </svg>
      ),
      title: 'Verified Documentation',
      description:
        'We guarantee transparency with clearly defined land titles and official approvals from relevant authorities.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M22.0049 5.99979H15.0049C11.6912 5.99979 9.00488 8.68608 9.00488 11.9998C9.00488 15.3135 11.6912 17.9998 15.0049 17.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V5.99979ZM15.0049 7.99979H23.0049V15.9998H15.0049C12.7957 15.9998 11.0049 14.2089 11.0049 11.9998C11.0049 9.79065 12.7957 7.99979 15.0049 7.99979ZM15.0049 10.9998V12.9998H18.0049V10.9998H15.0049Z"></path>
        </svg>
      ),
      title: 'Flexible Payment Plans',
      description:
        'Spread your payments in manageable installments that align with your financial capacity.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M3.90145 17.8636L7.81249 13.9526L10.6409 16.781L15.212 12.2099L17.0049 14.0028V9.00281H12.0049L13.7978 10.7957L10.6409 13.9526L7.81249 11.1241L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C8.67116 22.0028 5.71844 20.3715 3.90145 17.8636Z"></path>
        </svg>
      ),
      title: 'Strategic & Secure Land Locations',
      description:
        'All our estates are located in government-approved, non-disputed areas with verified titles and secure environments ideal for living or investment.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z"></path>
        </svg>
      ),
      title: 'Prime Locations',
      description:
        'Our developments are situated in fast-growing, strategic areas with access to major roadways, schools, and commercial hubs.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path>
        </svg>
      ),
      title: 'Professional Support Team',
      description:
        'From your first inquiry to final allocation, our dedicated support staff is with you every step of the way.',
    },
  ]

  return (
    <>
      <div className="">
        <FadeIn>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ABOUT US
            </motion.span>
          </div>
        </FadeIn>

        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SlideInLeft>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/assets/about-banner.png"
                  alt=""
                  width={500}
                  height={300}
                  className=""
                />
              </motion.div>
            </SlideInLeft>

            <SlideInRight>
              <div>
                <motion.h3
                  className="font-extrabold text-3xl my-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We ensure excellence in building structure around realities
                </motion.h3>
                <motion.p
                  className="my-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Page Mansion Limited is a premium-based developmental infrastructure company
                  offering bespoke 21st-century services in Property Development Management &
                  Maintenance, Real Estate Investment Advisory, Land Acquisition & Development, and
                  Property Marketing & Sales Strategy. With years of practice, we are known to
                  discover, develop and execute world-class projects in building design and
                  construction, among other related civil engineering expertise in Nigeria and
                  beyond.
                </motion.p>
                <motion.p
                  className="my-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Page Mansion is among the lead performing infrastructure investment company
                  championing ultra-modern structural facilities in Nigeria. We are best managed by
                  experienced and talented engineering professionals to create lasting memories and
                  legacies for our clients in excellence services.
                </motion.p>
                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/about">
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
                  </Link>
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </div>

        <FadeIn>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              WHY CHOOSE US
            </motion.span>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 my-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    {feature.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold my-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </>
  )
}
