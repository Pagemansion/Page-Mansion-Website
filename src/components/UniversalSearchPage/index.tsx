'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/Card'
import { PropertyCard } from '@/components/PropertyCard'
import { FadeIn, StaggerContainer } from '@/components/ui/animated'
import { useDebounce } from '@/utilities/useDebounce'
import { Post, Property, Page } from '@/payload-types'
import { ClientOnly } from '@/components/ClientOnly'

interface SearchResults {
  posts: { docs: Post[]; totalDocs: number }
  properties: { docs: Property[]; totalDocs: number }
  pages: { docs: Page[]; totalDocs: number }
}

interface UniversalSearchPageProps {
  initialQuery: string
  initialResults: SearchResults
  searchParams: {
    q?: string
    type?: string
    category?: string
    location?: string
    sort?: string
  }
}

const UniversalSearchPageContent = ({
  initialQuery,
  initialResults,
  searchParams,
}: UniversalSearchPageProps) => {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResults>(initialResults)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'posts' | 'properties' | 'pages'>('all')
  const [filters, setFilters] = useState({
    type: searchParams.type || undefined,
    category: searchParams.category || undefined,
    location: searchParams.location || undefined,
    sort: searchParams.sort || 'relevance',
  })

  const debouncedQuery = useDebounce(query, 500)

  const performSearch = useCallback(async (searchQuery: string, searchFilters: typeof filters) => {
    if (!searchQuery.trim()) {
      setResults({
        posts: { docs: [], totalDocs: 0 },
        properties: { docs: [], totalDocs: 0 },
        pages: { docs: [], totalDocs: 0 },
      })
      return
    }

    setLoading(true)
    try {
      const params = new URLSearchParams({
        q: searchQuery,
        ...Object.fromEntries(Object.entries(searchFilters).filter(([_, v]) => v)),
      })

      const response = await fetch(`/api/search?${params}`)
      if (response.ok) {
        const data = await response.json()
        setResults(data)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (debouncedQuery !== initialQuery) {
      performSearch(debouncedQuery, filters)

      // Update URL
      const params = new URLSearchParams()
      if (debouncedQuery) params.set('q', debouncedQuery)
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.set(key, value)
      })

      router.push(`/search?${params.toString()}`, { scroll: false })
    }
  }, [debouncedQuery, filters, initialQuery, performSearch, router])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value === 'all' ? undefined : value }))
  }

  const clearFilters = () => {
    setFilters({ type: undefined, category: undefined, location: undefined, sort: 'relevance' })
    setQuery('')
  }

  const totalResults =
    results.posts.totalDocs + results.properties.totalDocs + results.pages.totalDocs

  const getTabCount = (tab: string) => {
    switch (tab) {
      case 'posts':
        return results.posts.totalDocs
      case 'properties':
        return results.properties.totalDocs
      case 'pages':
        return results.pages.totalDocs
      default:
        return totalResults
    }
  }

  return (
    <div className="container mx-auto px-4">
      {/* Search Header */}
      <FadeIn>
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search posts, properties, pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-lg py-3"
                />
              </div>
              <Button
                onClick={() => performSearch(query, filters)}
                disabled={loading}
                className="bg-[#194754] hover:bg-black text-white px-8"
              >
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select
                value={filters.type || 'all'}
                onValueChange={(value) => handleFilterChange('type', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="posts">Posts</SelectItem>
                  <SelectItem value="properties">Properties</SelectItem>
                  <SelectItem value="pages">Pages</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.category || 'all'}
                onValueChange={(value) => handleFilterChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="guides">Guides</SelectItem>
                  <SelectItem value="tips">Tips</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.location || 'all'}
                onValueChange={(value) => handleFilterChange('location', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.sort || 'relevance'}
                onValueChange={(value) => handleFilterChange('sort', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="-createdAt">Newest First</SelectItem>
                  <SelectItem value="createdAt">Oldest First</SelectItem>
                  <SelectItem value="title">Title A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(filters.type ||
              filters.category ||
              filters.location ||
              filters.sort !== 'relevance') && (
              <div className="mt-4">
                <Button variant="outline" onClick={clearFilters} className="text-sm">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      {/* Results Summary */}
      {query && (
        <FadeIn delay={0.1}>
          <div className="mb-6">
            <p className="text-gray-600">
              {loading ? 'Searching...' : `${totalResults} results found for "${query}"`}
            </p>
          </div>
        </FadeIn>
      )}

      {/* Tabs */}
      <FadeIn delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {[
            { key: 'all', label: 'All Results' },
            { key: 'posts', label: 'Posts' },
            { key: 'properties', label: 'Properties' },
            { key: 'pages', label: 'Pages' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                activeTab === key
                  ? 'border-[#194754] text-[#194754]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {label} ({getTabCount(key)})
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Results */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#194754]"></div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Posts Results */}
          {(activeTab === 'all' || activeTab === 'posts') && results.posts.docs.length > 0 && (
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Posts ({results.posts.totalDocs})</h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.posts.docs.map((post) => (
                    <Card key={post.id} doc={post} relationTo="posts" showCategories />
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          )}

          {/* Properties Results */}
          {(activeTab === 'all' || activeTab === 'properties') &&
            results.properties.docs.length > 0 && (
              <FadeIn delay={0.4}>
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Properties ({results.properties.totalDocs})
                  </h2>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results.properties.docs.map((property) => (
                      <PropertyCard key={property.id} property={property} showDescription />
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>
            )}

          {/* Pages Results */}
          {(activeTab === 'all' || activeTab === 'pages') && results.pages.docs.length > 0 && (
            <FadeIn delay={0.5}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Pages ({results.pages.totalDocs})</h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.pages.docs.map((page) => (
                    <motion.div
                      key={page.id}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        <a href={`/${page.slug}`} className="text-[#194754] hover:underline">
                          {page.title}
                        </a>
                      </h3>
                      {page.meta?.description && (
                        <p className="text-gray-600 mb-4">{page.meta.description}</p>
                      )}
                      <div className="text-sm text-gray-500">
                        Page • Updated {new Date(page.updatedAt).toLocaleDateString()}
                      </div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          )}

          {/* No Results */}
          {totalResults === 0 && query && !loading && (
            <FadeIn delay={0.3}>
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search terms or filters to find what you&apos;re looking for.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  )
}

export const UniversalSearchPage = (props: UniversalSearchPageProps) => {
  return (
    <ClientOnly
      fallback={
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#194754]"></div>
          </div>
        </div>
      }
    >
      <UniversalSearchPageContent {...props} />
    </ClientOnly>
  )
}
