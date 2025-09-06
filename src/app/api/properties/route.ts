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
    const sort = searchParams.get('sortBy') || '-createdAt'
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
      where.or = [
        { 'location.city': { contains: location } },
        { 'location.address': { contains: location } },
      ]
    }

    if (featured === 'true') {
      where.featured = {
        equals: true,
      }
    }

    console.log('Properties API - Search params:', {
      propertyType,
      location,
      sort,
      limit,
      page,
      featured,
    })
    console.log('Properties API - Where clause:', JSON.stringify(where, null, 2))

    // First, let's check if there are any properties at all
    const allProperties = await payload.find({
      collection: 'properties',
      limit: 5,
      depth: 1,
    })

    console.log('Properties API - All properties count:', allProperties.totalDocs)
    if (allProperties.docs.length > 0) {
      console.log(
        'Properties API - Sample property:',
        JSON.stringify(allProperties.docs[0], null, 2),
      )
    }

    // Fetch properties with filters
    const properties = await payload.find({
      collection: 'properties',
      where,
      sort,
      limit,
      page,
      depth: 2, // Include related data like images
    })

    console.log('Properties API - Found properties:', properties.docs.length)
    console.log('Properties API - Total docs:', properties.totalDocs)

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}
