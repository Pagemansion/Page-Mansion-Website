import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { UniversalSearchPage } from '@/components/UniversalSearchPage'
import type { Post, Property, Page } from '@/payload-types'

type Args = {
  searchParams: Promise<{
    q?: string
    type?: string
    category?: string
    location?: string
    sort?: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const searchParams = await searchParamsPromise
  const { q: query, type, category, location, sort } = searchParams

  const payload = await getPayload({ config: configPromise })

  // Initialize empty results with proper typing
  let searchResults: {
    posts: { docs: Post[]; totalDocs: number }
    properties: { docs: Property[]; totalDocs: number }
    pages: { docs: Page[]; totalDocs: number }
  } = {
    posts: { docs: [], totalDocs: 0 },
    properties: { docs: [], totalDocs: 0 },
    pages: { docs: [], totalDocs: 0 },
  }

  if (query) {
    try {
      // Search Posts
      const posts = await payload.find({
        collection: 'posts',
        depth: 1,
        limit: 20,
        where: {
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
            ...(category ? [{ 'categories.title': { contains: category } }] : []),
          ],
        },
        sort: sort || '-createdAt',
      })

      // Search Properties
      const properties = await payload.find({
        collection: 'properties',
        depth: 1,
        limit: 20,
        where: {
          and: [
            { _status: { equals: 'published' } },
            {
              or: [
                { title: { contains: query } },
                { description: { contains: query } },
                { 'location.address': { contains: query } },
                { 'location.city': { contains: query } },
                { 'location.state': { contains: query } },
              ],
            },
            ...(location ? [{ 'location.city': { contains: location } }] : []),
          ],
        },
        sort: sort || '-createdAt',
      })

      // Search Pages
      const pages = await payload.find({
        collection: 'pages',
        depth: 1,
        limit: 20,
        where: {
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
        },
        sort: sort || '-createdAt',
      })

      searchResults = { posts, properties, pages }
    } catch (error) {
      console.error('Search error:', error)
    }
  }

  return (
    <>
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold">Search Everything</h1>
      </section>

      <div className="pt-12 pb-24">
        <PageClient />
        <UniversalSearchPage
          initialQuery={query || ''}
          initialResults={searchResults}
          searchParams={searchParams}
        />
      </div>
    </>
  )
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  return searchParams.then(({ q }) => ({
    title: q ? `Search results for "${q}" | Your Site` : 'Search | Your Site',
    description: q
      ? `Search results for "${q}"`
      : 'Search across all content including posts, properties, and pages.',
  }))
}
