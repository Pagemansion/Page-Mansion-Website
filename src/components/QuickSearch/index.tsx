'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useDebounce } from '@/utilities/useDebounce'

interface QuickSearchResult {
  id: string
  title: string
  type: 'post' | 'property' | 'page'
  slug: string
  description?: string
}

interface QuickSearchProps {
  className?: string
  placeholder?: string
}

export const QuickSearch = ({
  className = '',
  placeholder = 'Quick search...',
}: QuickSearchProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<QuickSearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      performQuickSearch(debouncedQuery)
    } else {
      setResults([])
    }
  }, [debouncedQuery])

  const performQuickSearch = async (searchQuery: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/quick-search?q=${encodeURIComponent(searchQuery)}`)
      if (response.ok) {
        const data = await response.json()
        setResults(data.results || [])
      }
    } catch (error) {
      console.error('Quick search error:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleResultClick = (result: QuickSearchResult) => {
    setIsOpen(false)
    setQuery('')

    const path =
      result.type === 'post'
        ? `/posts/${result.slug}`
        : result.type === 'property'
          ? `/properties/${result.slug}`
          : `/${result.slug}`

    router.push(path)
  }

  const handleViewAllResults = () => {
    setIsOpen(false)
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'post':
        return (
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'property':
        return (
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        )
      case 'page':
        return (
          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pr-10"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
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
      </div>

      <AnimatePresence>
        {isOpen && (query.length >= 2 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {loading && (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#194754] mx-auto"></div>
              </div>
            )}

            {!loading && results.length === 0 && query.length >= 2 && (
              <div className="p-4 text-center text-gray-500">No results found for &quot;{query}&quot;</div>
            )}

            {!loading && results.length > 0 && (
              <>
                <div className="max-h-80 overflow-y-auto">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-start gap-3"
                    >
                      {getResultIcon(result.type)}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">{result.title}</div>
                        {result.description && (
                          <div className="text-sm text-gray-500 truncate">{result.description}</div>
                        )}
                        <div className="text-xs text-gray-400 capitalize">{result.type}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {results.length >= 5 && (
                  <div className="border-t border-gray-100 p-3">
                    <Button
                      onClick={handleViewAllResults}
                      variant="outline"
                      className="w-full text-sm"
                    >
                      View all results for &quot;{query}&quot;
                    </Button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
