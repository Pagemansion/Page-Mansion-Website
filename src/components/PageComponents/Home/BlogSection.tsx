'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer } from '../../ui/animated'
import { Post, Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'

interface BlogSectionProps {
  initialPosts?: Post[]
}

const BlogSection: React.FC<BlogSectionProps> = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    // Only fetch if we don't have initial posts AND haven't fetched before
    if (initialPosts.length === 0 && !hasFetched) {
      const fetchPosts = async () => {
        setLoading(true)
        setHasFetched(true) // Prevent multiple fetches
        try {
          const response = await fetch('/api/posts?limit=3')
          if (response.ok) {
            const data = await response.json()
            setPosts(data.docs || [])
          }
        } catch (error) {
          console.error('Error fetching posts:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchPosts()
    }
  }, [initialPosts, hasFetched])

  // Update posts when initialPosts change
  useEffect(() => {
    if (initialPosts.length > 0) {
      setPosts(initialPosts)
      setHasFetched(true) // Mark as fetched to prevent client-side fetch
    }
  }, [initialPosts])

  // Helper function to estimate read time
  const estimateReadTime = (content: any): string => {
    if (!content) return '3 min'

    // Simple estimation: ~200 words per minute
    const text = JSON.stringify(content)
    const wordCount = text.split(' ').length
    const readTime = Math.ceil(wordCount / 200)
    return `${readTime} min`
  }
  return (
    <>
      <div>
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

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#194754]"></div>
              </div>
            ) : posts.length > 0 ? (
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
                        {post.categories && post.categories.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2 mt-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            {post.categories.slice(0, 2).map((category: any, index: number) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#194754] text-white text-xs rounded-full"
                              >
                                {typeof category === 'string' ? category : category.title}
                              </span>
                            ))}
                          </motion.div>
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
                <p className="text-gray-600">No blog posts available yet.</p>
              </motion.div>
            )}

            {posts.length > 0 && (
              <FadeIn delay={0.3}>
                <Link href="/posts">
                  <div className="flex justify-center my-4">
                    <motion.button
                      className="flex gap-2 items-center px-5 py-2 border border-[#194754] text-[#194754] rounded-full font-semibold hover:bg-[#194754] hover:text-white transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View All Posts</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          className="fill-[#194754] group-hover:fill-white transition-colors"
                        >
                          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                        </svg>
                      </motion.span>
                    </motion.button>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default BlogSection
