import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await request.json()

    // Validate required fields
    const { name, email, rating, review } = data
    if (!name || !email || !rating || !review) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, rating, and review are required' },
        { status: 400 },
      )
    }

    // Create the review submission
    const reviewSubmission = await payload.create({
      collection: 'reviews',
      data: {
        name,
        email,
        rating,
        review,
        propertyPurchased: data.propertyPurchased || '',
        location: data.location || '',
        status: 'pending', // All submissions start as pending
        featured: false,
        submittedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully! It will be published after admin approval.',
        id: reviewSubmission.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json(
      { error: 'Failed to submit review. Please try again.' },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const featured = searchParams.get('featured') === 'true'

    const where: any = {
      status: {
        equals: 'published',
      },
    }

    if (featured) {
      where.featured = {
        equals: true,
      }
    }

    const reviews = await payload.find({
      collection: 'reviews',
      where,
      page,
      limit,
      sort: '-createdAt',
    })

    return NextResponse.json({
      success: true,
      reviews: reviews.docs,
      totalPages: reviews.totalPages,
      page: reviews.page,
      totalDocs: reviews.totalDocs,
    })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}
