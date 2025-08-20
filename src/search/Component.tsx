'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter, useSearchParams } from 'next/navigation'

interface SearchProps {
  placeholder?: string
  showButton?: boolean
  className?: string
  onSearch?: (query: string) => void
}

export const Search: React.FC<SearchProps> = ({
  placeholder = 'Search posts, properties, pages...',
  showButton = false,
  className = '',
  onSearch,
}) => {
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams?.get('q') || '')
  const router = useRouter()

  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedValue)
    } else {
      router.push(`/search${debouncedValue ? `?q=${encodeURIComponent(debouncedValue)}` : ''}`)
    }
  }, [debouncedValue, router, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(value)
    } else {
      router.push(`/search${value ? `?q=${encodeURIComponent(value)}` : ''}`)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            id="search"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
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
        {showButton && (
          <Button type="submit" className="bg-[#194754] hover:bg-black text-white">
            Search
          </Button>
        )}
      </form>
    </div>
  )
}
