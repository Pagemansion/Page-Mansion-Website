'use client'

import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'

interface ContactFormData {
  'full-name': string
  email: string
  phone?: string
  message: string
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const methods = useForm<ContactFormData>()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = methods

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Submit to Payload's form submission endpoint
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: 'contact-form', // This should match your form's ID or slug
          submissionData: data,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      reset()
    } catch (err) {
      setError('Failed to submit form. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h2>
        <p className="text-green-700">
          Your contact form submission was successfully received. We'll get back to you soon!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              {...register('full-name', { required: 'Full name is required' })}
              type="text"
              id="full-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors['full-name'] && (
              <p className="mt-1 text-sm text-red-600">{errors['full-name']?.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
