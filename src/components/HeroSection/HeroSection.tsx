'use client'

// src/components/HeroSection/HeroSection.tsx
import React from 'react'
import PropertySearch from '../utilities/property-search'
import { motion } from 'motion/react'
import { FadeIn } from '../ui/animated'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <motion.video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Overlay to darken video for text readability */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(180deg,_#194754_0%,_rgba(13,36,43,0.5)_73.22%,_rgba(13,36,43,0.1)_100%)] opacity-50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Text Content */}
        {isDesktop && (
          <div className="relative text-white z-20 p-8 max-w-6xl mx-auto mt-24">
            <FadeIn delay={0.2}>
              <motion.h1
                className="text-6xl md:text-5xl font-bold leading-tight mb-6 font-urbanist"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              >
                Leading the infrastructural pathway to exceptional quality
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
              >
                To serve in the capacity of leading infrastructural developments in Nigeria through
                our innovative and quality services deliveries.
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                className="mt-20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <PropertySearch redirectOnSearch={true} />
              </motion.div>
            </FadeIn>

            {/* Floating decorative elements */}
            {/* <Floating>
              <motion.div
                className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </Floating> */}

            {/* <Floating>
              <motion.div
                className="absolute top-40 right-20 w-6 h-6 bg-[#E7C873] rounded-full opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </Floating> */}

            {/* <Floating>
              <motion.div
                className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </Floating> */}
          </div>
        )}
        {/* Tablet view */}
        {isTablet && (
          <div className="relative text-white z-20 p-8 w-full mx-auto mt-[100px]">
            <FadeIn delay={0.2}>
              <motion.h1
                className="text-5xl font-bold leading-tight mb-6 font-urbanist"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              >
                Leading the infrastructural pathway to exceptional quality
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.p
                className="text-xl  mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
              >
                To serve in the capacity of leading infrastructural developments in Nigeria through
                our innovative and quality services deliveries.
              </motion.p>
            </FadeIn>

            {/* Floating decorative elements */}
            {/* <Floating>
              <motion.div
                className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </Floating>

            <Floating>
              <motion.div
                className="absolute top-40 right-20 w-6 h-6 bg-[#E7C873] rounded-full opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </Floating>

            <Floating>
              <motion.div
                className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </Floating> */}
          </div>
        )}
        {/* mobile view */}
        {isMobile && (
          <div className="relative text-white z-20 p-8 w-full mx-auto mt-[100px]">
            <FadeIn delay={0.2}>
              <motion.h1
                className="text-5xl font-bold leading-tight mb-6 font-urbanist"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              >
                Leading the infrastructural pathway to exceptional quality
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.p
                className="text-xl  mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
              >
                To serve in the capacity of leading infrastructural developments in Nigeria through
                our innovative and quality services deliveries.
              </motion.p>
            </FadeIn>

            {/* Floating decorative elements */}
            {/* <Floating>
              <motion.div
                className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </Floating>

            <Floating>
              <motion.div
                className="absolute top-40 right-20 w-6 h-6 bg-[#E7C873] rounded-full opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </Floating>

            <Floating>
              <motion.div
                className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </Floating> */}
          </div>
        )}
      </section>
    </>
  )
}
