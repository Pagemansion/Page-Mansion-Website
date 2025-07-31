'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn } from '../../ui/animated'

export default function PartnersSection() {
  const partners = [
    { id: 1, src: '/assets/partner1.png', alt: 'Partner 1' },
    { id: 2, src: '/assets/partner2.png', alt: 'Partner 2' },
    { id: 3, src: '/assets/partner3.png', alt: 'Partner 3' },
    { id: 4, src: '/assets/partner4.png', alt: 'Partner 4' },
    { id: 5, src: '/assets/partner5.png', alt: 'Partner 5' },
    { id: 6, src: '/assets/partner6.png', alt: 'Partner 6' },
    { id: 7, src: '/assets/partner7.png', alt: 'Partner 7' },
    { id: 8, src: '/assets/partner8.png', alt: 'Partner 8' },
  ]

  return (
    <>
      <div className="container py-8">
        <FadeIn>
          <motion.h2
            className="text-3xl text-center font-bold py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Partners
          </motion.h2>
        </FadeIn>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: [0, -50] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            {/* First set of partners */}
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={30}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <motion.div
                key={`${partner.id}-duplicate`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={30}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
