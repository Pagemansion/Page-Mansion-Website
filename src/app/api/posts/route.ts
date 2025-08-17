import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const category = searchParams.get('category')

    const payload = await getPayload({ config })

    // Build where conditions
    const whereConditions: any = {
      _status: {
        equals: 'published',
      },
    }

    if (category) {
      whereConditions.categories = {
        in: [category],
      }
    }

    const {
      docs: posts,
      totalDocs,
      page: currentPage,
      totalPages,
    } = await payload.find({
      collection: 'posts',
      where: whereConditions,
      sort: '-publishedAt',
      limit,
      page,
      depth: 2, // Include related data like categories and hero images
    })

    const safeCurrentPage = currentPage || 1
    const safeTotalPages = totalPages || 1

    return NextResponse.json({
      docs: posts,
      totalDocs,
      page: safeCurrentPage,
      totalPages: safeTotalPages,
      hasNextPage: safeCurrentPage < safeTotalPages,
      hasPrevPage: safeCurrentPage > 1,
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
