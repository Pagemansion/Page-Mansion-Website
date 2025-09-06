import { NextRequest, NextResponse } from 'next/server'
import { getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { Page, Post, Property } from '@/payload-types'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { searchParams } = new URL(request.url)

    const query = searchParams.get('q')
    const type = searchParams.get('type')
    const category = searchParams.get('category')
    const location = searchParams.get('location')
    const propertyType = searchParams.get('propertyType')
    const sort = searchParams.get('sort') || '-createdAt'

    if (!query) {
      return NextResponse.json({
        posts: { docs: [], totalDocs: 0 },
        properties: { docs: [], totalDocs: 0 },
        pages: { docs: [], totalDocs: 0 },
      })
    }

    const results: {
      posts: PaginatedDocs<Post>
      properties: PaginatedDocs<Property>
      pages: PaginatedDocs<Page>
    } = {
      posts: {
        docs: [],
        totalDocs: 0,
        limit: 0,
        page: 0,
        totalPages: 0,
        pagingCounter: 0,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: null,
        nextPage: null,
      },
      properties: {
        docs: [],
        totalDocs: 0,
        limit: 0,
        page: 0,
        totalPages: 0,
        pagingCounter: 0,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: null,
        nextPage: null,
      },
      pages: {
        docs: [],
        totalDocs: 0,
        limit: 0,
        page: 0,
        totalPages: 0,
        pagingCounter: 0,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: null,
        nextPage: null,
      },
    }

    // Search Posts (if not filtered to specific type or if type is posts)
    if (!type || type === 'posts') {
      const postsWhere: any = {
        and: [
          { _status: { equals: 'published' } },
          {
            or: [
              { title: { contains: query } },
              { 'meta.description': { contains: query } },
              { 'meta.title': { contains: query } },
              { slug: { contains: query } },
            ],
          },
        ],
      }

      if (category) {
        postsWhere.and.push({ 'categories.title': { contains: category } })
      }

      try {
        results.posts = await payload.find({
          collection: 'posts',
          depth: 2,
          limit: 20,
          where: postsWhere,
          sort,
        })
      } catch (error) {
        console.error('Error searching posts:', error)
      }
    }

    // Search Properties (if not filtered to specific type or if type is properties)
    if (!type || type === 'properties') {
      const propertiesWhere: any = {
        and: [
          { _status: { equals: 'published' } },
          {
            or: [
              { title: { contains: query } },
              { 'location.address': { contains: query } },
              { 'location.city': { contains: query } },
              { 'location.state': { contains: query } },
            ],
          },
        ],
      }

      if (location) {
        propertiesWhere.and.push({
          or: [
            { 'location.city': { contains: location } },
            { 'location.state': { contains: location } },
          ],
        })
      }

      if (propertyType) {
        propertiesWhere.and.push({ propertyType: { contains: propertyType } })
      }

      try {
        results.properties = await payload.find({
          collection: 'properties',
          depth: 2,
          limit: 20,
          where: propertiesWhere,
          sort,
        })
      } catch (error) {
        console.error('Error searching properties:', error)
      }
    }

    // Search Pages (if not filtered to specific type or if type is pages)
    if (!type || type === 'pages') {
      const pagesWhere: any = {
        and: [
          { _status: { equals: 'published' } },
          {
            or: [
              { title: { contains: query } },
              { 'meta.description': { contains: query } },
              { 'meta.title': { contains: query } },
              { slug: { contains: query } },
            ],
          },
        ],
      }

      try {
        results.pages = await payload.find({
          collection: 'pages',
          depth: 2,
          limit: 20,
          where: pagesWhere,
          sort,
        })
      } catch (error) {
        console.error('Error searching pages:', error)
      }
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
