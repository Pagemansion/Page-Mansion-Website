import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit') || '10')
    const propertyType = searchParams.get('propertyType')
    const status = searchParams.get('status')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')

    const payload = await getPayload({ config })

    // Build where conditions
    const whereConditions: any = {
      _status: {
        equals: 'published',
      },
    }

    if (featured === 'true') {
      whereConditions.featured = {
        equals: true,
      }
    }

    if (propertyType) {
      whereConditions.propertyType = {
        equals: propertyType,
      }
    }

    if (status) {
      whereConditions.status = {
        equals: status,
      }
    }

    if (minPrice || maxPrice) {
      whereConditions.price = {}
      if (minPrice) {
        whereConditions.price.greater_than_equal = parseInt(minPrice)
      }
      if (maxPrice) {
        whereConditions.price.less_than_equal = parseInt(maxPrice)
      }
    }

    const {
      docs: properties,
      totalDocs,
      page,
      totalPages,
    } = await payload.find({
      collection: 'properties',
      where: whereConditions,
      sort: '-publishedAt',
      limit,
      page: parseInt(searchParams.get('page') || '1'),
    })

    const currentPage = page || 1
    const totalPagesCount = totalPages || 1

    return NextResponse.json({
      docs: properties,
      totalDocs,
      page: currentPage,
      totalPages: totalPagesCount,
      hasNextPage: currentPage < totalPagesCount,
      hasPrevPage: currentPage > 1,
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}
