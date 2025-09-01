'use client'

import React, { useEffect, useState } from 'react'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/animated'
import { motion } from 'motion/react'

interface Review {
  id: string
  name: string
  rating: string
  review: string
  propertyPurchased?: string
  location?: string
  createdAt: string
  featured?: boolean
}

interface ReviewsSectionProps {
  initialReviews?: Review[]
}

export default function ReviewsSection({ initialReviews = [] }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [loading, setLoading] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    // Only fetch if we don't have initial reviews AND haven't fetched before
    if (initialReviews.length === 0 && !hasFetched) {
      const fetchFeaturedReviews = async () => {
        setLoading(true)
        setHasFetched(true) // Prevent multiple fetches
        try {
          const response = await fetch('/api/reviews?featured=true&limit=3')
          const data = await response.json()

          if (data.success) {
            setReviews(data.reviews)
          }
        } catch (error) {
          console.error('Error fetching featured reviews:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchFeaturedReviews()
    }
  }, [initialReviews, hasFetched])

  // Update reviews when initialReviews change
  useEffect(() => {
    if (initialReviews.length > 0) {
      setReviews(initialReviews)
      setHasFetched(true) // Mark as fetched to prevent client-side fetch
    }
  }, [initialReviews])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (reviews.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 mb-8">
            Be the first to share your experience with Page Mansions!
          </p>
          <Link
            href="/reviews"
            className="inline-block bg-[#194754] text-white px-6 py-3 rounded-xl hover:bg-black transition-colors"
          >
            Write a Review
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say
            about their experience with Page Mansions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} featured={review.featured} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-block bg-[#194754] text-white px-6 py-3 rounded-xl hover:bg-black transition-colors mr-4"
          >
            View All Reviews
          </Link>
          <Link
            href="/reviews#submit-review"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Write a Review
          </Link>
        </div>
      </div>
    </section>
  )
}
