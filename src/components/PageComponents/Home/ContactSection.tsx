'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { motion } from 'motion/react'
import { FadeIn, SlideInRight, ScaleUp } from '../../ui/animated'
import { PhoneInput } from '@/components/ui/phone-input'

export const ContactSection = () => {
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
              CONTACT US
            </motion.span>
          </div>
        </FadeIn>

        <div
          className="py-11 container mx-auto rounded-xl h-screen"
          style={{
            backgroundImage: "url('/assets/contact-banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div></div>
            <SlideInRight>
              <motion.div
                className="bg-[#E7C873] p-12 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h3
                  className="font-bold text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Talk to Us
                </motion.h3>

                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input type="name" placeholder="Name" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input type="email" placeholder="Email" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Property interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="beach-valley">Beach Valley</SelectItem>
                          <SelectItem value="penthouse">Penthouse Suite</SelectItem>
                          <SelectItem value="country-cottage">Country Cottage</SelectItem>
                          <SelectItem value="luxury-villa">Luxury Villa</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <PhoneInput />
                </motion.div>

                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Textarea placeholder="Type your message here." />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="my-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <motion.button
                    className="bg-black text-white px-6 py-2 rounded-3xl font-semibold"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#194754',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Submit
                  </motion.button>
                </motion.div>
              </motion.div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </>
  )
}
