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
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FadeIn, SlideInRight, ScaleUp } from '../../ui/animated'
import { PhoneInput } from '@/components/ui/phone-input'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  propertyInterest?: string
  message: string
}

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: 'general-contact',
          submissionData: data,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to submit form. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }
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
          className="py-11 container mx-auto rounded-xl min-h-screen"
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
                className="bg-[#E7C873] p-6 md:p-12 rounded-2xl"
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

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    className="my-4 p-3 bg-green-100 border border-green-300 rounded-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-green-800 text-sm">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    className="my-4 p-3 bg-red-100 border border-red-300 rounded-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-red-800 text-sm">{error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <motion.div
                    className="my-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                      )}
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
                      <Input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="Email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                      )}
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
                      <Select onValueChange={(value) => setValue('propertyInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Property interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Property Types</SelectLabel>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
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
                    <Input {...register('phone')} type="tel" placeholder="Phone (optional)" />
                  </motion.div>

                  <motion.div
                    className="my-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Type your message here."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                      )}
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
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-6 py-2 rounded-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{
                        scale: isSubmitting ? 1 : 1.05,
                        backgroundColor: isSubmitting ? '#000' : '#194754',
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </>
  )
}
