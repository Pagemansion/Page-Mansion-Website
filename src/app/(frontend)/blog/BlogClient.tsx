'use client'

import { FadeIn, StaggerContainer } from '@/components/ui/animated'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Post, Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'

interface BlogClientProps {
  posts: Post[]
  pagination: {
    page?: number
    totalPages?: number
    totalDocs?: number
  }
}

// Helper function to estimate read time
const estimateReadTime = (content: unknown): string => {
  if (!content) return '3 min'

  const text = JSON.stringify(content)
  const wordCount = text.split(' ').length
  const readTime = Math.ceil(wordCount / 200)
  return `${readTime} min`
}

export const BlogClient: React.FC<BlogClientProps> = ({ posts, pagination }) => {
  return (
    <FadeIn>
      <div className="py-11 container mx-auto">
        <motion.span
          className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BLOG
        </motion.span>
        <motion.h2
          className="text-3xl text-center font-bold py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Latest Blogs & Articles
        </motion.h2>

        {/* Page Range Info */}
        <div className="mb-8">
          <PageRange
            collection="posts"
            currentPage={pagination.page}
            limit={12}
            totalDocs={pagination.totalDocs}
          />
        </div>

        {posts.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.slug}`}>
                <motion.div
                  className="rounded-lg overflow-hidden cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {post.heroImage ? (
                      <MediaComponent
                        resource={post.heroImage as Media}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    className="p-4 my-6 bg-[#f4f4f4] rounded-2xl"
                    style={{
                      boxShadow: '0 4px 32px 0 rgba(220, 220, 220, 0.5)',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                    }}
                    whileHover={{
                      boxShadow: '0 8px 40px 0 rgba(220, 220, 220, 0.7)',
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.span
                      className="p-3 border border-black text-black rounded-3xl font-semibold text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {estimateReadTime(post.content)} read
                    </motion.span>
                    <motion.h3
                      className="text-lg font-semibold text-black my-4 line-clamp-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>

                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {post.categories.slice(0, 2).map((category: unknown, index: number) => {
                          // Type guard to safely access category data
                          const getCategoryTitle = (cat: unknown): string => {
                            if (typeof cat === 'string') return cat
                            if (cat && typeof cat === 'object' && 'title' in cat) {
                              return (cat as { title: string }).title
                            }
                            return 'Category'
                          }

                          return (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#194754] text-white text-xs rounded-full"
                            >
                              {getCategoryTitle(category)}
                            </span>
                          )
                        })}
                      </motion.div>
                    )}

                    {/* Published Date */}
                    {post.publishedAt && (
                      <motion.p
                        className="text-xs text-gray-600 mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </StaggerContainer>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg">No blog posts available yet.</p>
            <p className="text-gray-500 mt-2">Check back later for new articles!</p>
          </motion.div>
        )}

        {/* Pagination */}
        {pagination.totalPages && pagination.totalPages > 1 && pagination.page && (
          <div className="flex justify-center mt-12">
            <Pagination page={pagination.page} totalPages={pagination.totalPages} />
          </div>
        )}
      </div>
    </FadeIn>
  )
}
