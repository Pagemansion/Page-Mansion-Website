import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { searchParams } = new URL(request.url)

    // Extract query parameters
    const propertyType = searchParams.get('propertyType')
    const location = searchParams.get('location')
    const sort = searchParams.get('sort') || '-createdAt'
    const limit = parseInt(searchParams.get('limit') || '12')
    const page = parseInt(searchParams.get('page') || '1')
    const featured = searchParams.get('featured')

    // Build where clause
    const where: any = {
      _status: {
        equals: 'published',
      },
    }

    if (propertyType) {
      where.propertyType = {
        equals: propertyType,
      }
    }

    if (location) {
      where['location.city'] = {
        contains: location,
      }
    }

    if (featured === 'true') {
      where.featured = {
        equals: true,
      }
    }

    // Fetch properties
    const properties = await payload.find({
      collection: 'properties',
      where,
      sort,
      limit,
      page,
      depth: 2, // Include related data like images
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}
