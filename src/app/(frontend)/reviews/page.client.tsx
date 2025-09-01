'use client'

import React, { useEffect, useState } from 'react'
import ReviewForm from '@/components/ReviewForm'
import ReviewCard from '@/components/ReviewCard'

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

export default function ReviewsPageClient() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showForm, setShowForm] = useState(false)

  const fetchReviews = async (page = 1) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/reviews?page=${page}&limit=9`)
      const data = await response.json()

      if (data.success) {
        setReviews(data.reviews)
        setTotalPages(data.totalPages)
        setCurrentPage(data.page)
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const handleFormSuccess = () => {
    setShowForm(false)
    // Optionally refresh reviews or show a success message
  }

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0
    const sum = reviews.reduce((acc, review) => acc + parseInt(review.rating), 0)
    return sum / reviews.length
  }

  const getAverageRatingString = () => {
    return calculateAverageRating().toFixed(1)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>,
        )
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ☆
          </span>,
        )
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>,
        )
      }
    }
    return stars
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Client Reviews</h1>
      </section>

      {/* Reviews Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            {reviews.length > 0 && (
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(calculateAverageRating())}
                </div>
                <span className="text-2xl font-bold text-gray-900">{getAverageRatingString()}</span>
                <span className="text-gray-600">
                  ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
                </span>
              </div>
            )}

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#194754] text-white px-6 py-3 rounded-xl hover:bg-black transition-colors"
            >
              {showForm ? 'Hide Form' : 'Write a Review'}
            </button>
          </div>

          {/* Review Form */}
          {showForm && (
            <div id="submit-review" className="mb-12">
              <ReviewForm onSuccess={handleFormSuccess} />
            </div>
          )}
        </div>
      </section>

      {/* Reviews Display Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-20 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Reviews Yet</h3>
              <p className="text-gray-600 mb-6">
                Be the first to share your experience with Page Mansions!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#194754] text-white px-6 py-3 rounded-lg hover:bg-black transition-colors"
              >
                Write the First Review
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} featured={review.featured} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => fetchReviews(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => fetchReviews(page)}
                      className={`px-4 py-2 rounded-md ${
                        page === currentPage
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => fetchReviews(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
