'use client'

import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'

interface BookVisitFormData {
  'full-name': string
  email: string
  phone: string
  'project-location': string
  message: string
}

interface Property {
  id: string
  title: string
  slug: string
  location: {
    address: string
    city: string
    state: string
  }
}

interface ProjectLocation {
  value: string
  label: string
}

export const BookVisitForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoadingProperties, setIsLoadingProperties] = useState(true)
  const [projectLocations, setProjectLocations] = useState<ProjectLocation[]>([
    { value: '', label: 'Select a location' },
  ])

  const methods = useForm<BookVisitFormData>()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = methods

  // Fetch properties on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoadingProperties(true)
        const response = await fetch('/api/properties?limit=50') // Get more properties for the dropdown

        if (!response.ok) {
          throw new Error('Failed to fetch properties')
        }

        const data = await response.json()
        setProperties(data.docs || [])

        // Transform properties into select options
        const locations: ProjectLocation[] = [
          { value: '', label: 'Select a location' },
          ...data.docs.map((property: Property) => ({
            value: property.slug || property.id, // Fallback to id if slug is empty
            label: `${property.title} - ${property.location.city}, ${property.location.state}`,
          })),
        ]

        setProjectLocations(locations)
      } catch (err) {
        console.error('Error fetching properties:', err)
        // Keep default empty option if fetch fails
        setProjectLocations([{ value: '', label: 'Select a location' }])
      } finally {
        setIsLoadingProperties(false)
      }
    }

    fetchProperties()
  }, [])

  const onSubmit = async (data: BookVisitFormData) => {
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
          form: 'Book a Visit Form', // This should match your form's title in Payload admin
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
          Your visit booking request was successfully received. A member of our team will be in
          touch shortly to confirm your visit.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Book another visit
        </button>
      </div>
    )
  }

  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Book A Visit</h2>
            <p className="text-gray-600">
              Explore the Page Mansions property and experience luxury in every detail. Simply fill
              out the form below, and a member of our team will be in touch.
            </p>
          </div>

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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194754] focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors['full-name'] && (
              <p className="mt-1 text-sm text-red-600">{errors['full-name']?.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194754] focus:border-transparent"
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194754] focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone?.message}</p>}
          </div>

          {/* Project Location */}
          <div>
            <label
              htmlFor="project-location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Project Location *
            </label>
            <select
              {...register('project-location', { required: 'Please select a project location' })}
              id="project-location"
              disabled={isLoadingProperties}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194754] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingProperties ? (
                <option value="">Loading properties...</option>
              ) : (
                projectLocations.map((location, index) => (
                  <option key={location.value || `option-${index}`} value={location.value}>
                    {location.label}
                  </option>
                ))
              )}
            </select>
            {errors['project-location'] && (
              <p className="mt-1 text-sm text-red-600">{errors['project-location']?.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194754] focus:border-transparent"
              placeholder="Tell us about your visit preferences or any specific requirements"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#194754] hover:bg-[#194754]/90 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Book Visit'}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
