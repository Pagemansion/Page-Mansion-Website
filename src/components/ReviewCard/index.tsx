import React from 'react'

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

interface ReviewCardProps {
  review: Review
  featured?: boolean
}

export default function ReviewCard({ review, featured = false }: ReviewCardProps) {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${featured ? 'border-2 border-yellow-400' : 'border-2 border-yellow-400'}`}
    >
      {featured && (
        <div className="flex items-center mb-3">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
            Featured Review
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          {review.location && <p className="text-sm text-gray-600">{review.location}</p>}
        </div>
        <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
      </div>

      <blockquote className="text-gray-700 mb-4 italic">&quot;{review.review}&quot;</blockquote>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>
          {review.propertyPurchased && (
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {review.propertyPurchased}
            </span>
          )}
        </div>
        <time dateTime={review.createdAt}>{formatDate(review.createdAt)}</time>
      </div>
    </div>
  )
}
