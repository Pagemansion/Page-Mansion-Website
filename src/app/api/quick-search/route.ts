import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] })
    }

    const results: any[] = []

    // Search Posts (limit to 3)
    try {
      const posts = await payload.find({
        collection: 'posts',
        depth: 1,
        limit: 3,
        where: {
          and: [
            { _status: { equals: 'published' } },
            {
              or: [
                { title: { contains: query } },
                { 'meta.description': { contains: query } },
                { slug: { contains: query } },
              ],
            },
          ],
        },
        sort: '-createdAt',
      })

      posts.docs.forEach((post) => {
        results.push({
          id: post.id,
          title: post.title,
          type: 'post',
          slug: post.slug,
          description: post.meta?.description || '',
        })
      })
    } catch (error) {
      console.error('Error searching posts:', error)
    }

    // Search Properties (limit to 3)
    try {
      const properties = await payload.find({
        collection: 'properties',
        depth: 1,
        limit: 3,
        where: {
          and: [
            { _status: { equals: 'published' } },
            {
              or: [
                { title: { contains: query } },
                { 'location.address': { contains: query } },
                { 'location.city': { contains: query } },
              ],
            },
          ],
        },
        sort: '-createdAt',
      })

      properties.docs.forEach((property) => {
        results.push({
          id: property.id,
          title: property.title,
          type: 'property',
          slug: property.slug,
          description: `${property.location.city}, ${property.location.state} • $${property.price?.toLocaleString()}`,
        })
      })
    } catch (error) {
      console.error('Error searching properties:', error)
    }

    // Search Pages (limit to 2)
    try {
      const pages = await payload.find({
        collection: 'pages',
        depth: 1,
        limit: 2,
        where: {
          and: [
            { _status: { equals: 'published' } },
            {
              or: [
                { title: { contains: query } },
                { 'meta.description': { contains: query } },
                { slug: { contains: query } },
              ],
            },
          ],
        },
        sort: '-updatedAt',
      })

      pages.docs.forEach((page) => {
        results.push({
          id: page.id,
          title: page.title,
          type: 'page',
          slug: page.slug,
          description: page.meta?.description || '',
        })
      })
    } catch (error) {
      console.error('Error searching pages:', error)
    }

    // Sort results by relevance (title matches first, then others)
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query.toLowerCase())
      const bTitle = b.title.toLowerCase().includes(query.toLowerCase())

      if (aTitle && !bTitle) return -1
      if (!aTitle && bTitle) return 1
      return 0
    })

    return NextResponse.json({
      results: results.slice(0, 8), // Limit to 8 total results
    })
  } catch (error) {
    console.error('Quick search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
