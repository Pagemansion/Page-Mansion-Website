import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Post } from '@/payload-types'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { BlogClient } from './BlogClient'

export const dynamic = 'force-dynamic'
export const revalidate = 600

// Helper function to estimate read time
const estimateReadTime = (content: unknown): string => {
  if (!content) return '3 min'

  const text = JSON.stringify(content)
  const wordCount = text.split(' ').length
  const readTime = Math.ceil(wordCount / 200)
  return `${readTime} min`
}

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Blogs</h1>
      </section>

      {/* Client Component with Animations */}
      <BlogClient posts={posts.docs} pagination={posts} />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Blog | Page Mansions Real Estate',
    description:
      'Read the latest real estate insights, market updates, and property tips from Page Mansions experts.',
    openGraph: {
      title: 'Blog | Page Mansions Real Estate',
      description:
        'Read the latest real estate insights, market updates, and property tips from Page Mansions experts.',
      type: 'website',
    },
  }
}
