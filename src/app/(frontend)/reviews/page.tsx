import React from 'react'
import ReviewsPageClient from './page.client'

export const dynamic = 'force-dynamic'

export default function ReviewsPage() {
  return <ReviewsPageClient />
}

export function generateMetadata() {
  return {
    title: 'Customer Reviews | Page Mansions Real Estate',
    description:
      'Read what our satisfied customers have to say about their experience with Page Mansions Real Estate.',
    openGraph: {
      title: 'Customer Reviews | Page Mansions Real Estate',
      description:
        'Read what our satisfied customers have to say about their experience with Page Mansions Real Estate.',
      type: 'website',
    },
  }
}
