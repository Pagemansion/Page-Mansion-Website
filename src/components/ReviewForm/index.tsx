'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ReviewFormData {
  name: string
  email: string
  rating: string
  review: string
  propertyPurchased?: string
  location?: string
}

interface ReviewFormProps {
  onSuccess?: () => void
}

export default function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>()

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage(result.message)
        reset()
        onSuccess?.()
      } else {
        setSubmitError(result.error || 'Failed to submit review')
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: string) => {
    const stars = []
    const ratingNum = parseInt(rating)
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= ratingNum ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>,
      )
    }
    return stars
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h2>

      {submitMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {submitMessage}
        </div>
      )}

      {submitError && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <select
            id="rating"
            {...register('rating', { required: 'Please select a rating' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a rating</option>
            <option value="5">5 Stars - Excellent</option>
            <option value="4">4 Stars - Very Good</option>
            <option value="3">3 Stars - Good</option>
            <option value="2">2 Stars - Fair</option>
            <option value="1">1 Star - Poor</option>
          </select>
          {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>}
        </div>

        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            id="review"
            rows={5}
            {...register('review', {
              required: 'Review is required',
              minLength: {
                value: 10,
                message: 'Review must be at least 10 characters long',
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your experience with Page Mansions..."
          />
          {errors.review && <p className="mt-1 text-sm text-red-600">{errors.review.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="propertyPurchased"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Property Purchased (Optional)
            </label>
            <input
              type="text"
              id="propertyPurchased"
              {...register('propertyPurchased')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 3-bedroom apartment"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location/Area (Optional)
            </label>
            <input
              type="text"
              id="location"
              {...register('location')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Victoria Island, Lagos"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  )
}
