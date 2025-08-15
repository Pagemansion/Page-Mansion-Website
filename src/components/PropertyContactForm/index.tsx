'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Property } from '@/payload-types'

interface PropertyContactFormData {
  'full-name': string
  email: string
  phone?: string
  message: string
  'property-interest': string
}

interface PropertyContactFormProps {
  property: Property
}

export const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ property }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PropertyContactFormData>({
    defaultValues: {
      'property-interest': `I'm interested in ${property.title}`,
      message: `Hi, I'm interested in learning more about ${property.title}. Please contact me with more details.`,
    },
  })

  const onSubmit = async (data: PropertyContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: 'contact-form',
          submissionData: {
            ...data,
            'property-slug': property.slug,
            'property-title': property.title,
          },
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
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your inquiry about {property.title} has been sent successfully. We&apos;ll contact you soon!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Interested in this property?</h3>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            {...register('full-name', { required: 'Full name is required' })}
            type="text"
            id="full-name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {errors['full-name'] && (
            <p className="mt-1 text-xs text-red-600">{errors['full-name']?.message}</p>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email?.message}</p>}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message?.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  )
}
