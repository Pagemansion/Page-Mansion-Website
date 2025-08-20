'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SearchFilters {
  propertyType?: string
  location?: string
  sortBy?: string
  priceRange?: string
  bedrooms?: string
  bathrooms?: string
  status?: string
  searchTerm?: string
}

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void
  loading?: boolean
}

export default function PropertySearch({ onSearch, loading = false }: PropertySearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({})

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters)
    }
  }

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({})
    if (onSearch) {
      onSearch({})
    }
  }

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Looking For */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Looking For</label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => handleFilterChange('propertyType', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-black">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Location</label>
          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange('location', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-black">
              <SelectValue placeholder="Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="abuja">Abuja</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
              <SelectItem value="delta">Delta</SelectItem>
              <SelectItem value="nassarawa">Nassarawa</SelectItem>
              <SelectItem value="kaduna">Kaduna</SelectItem>
              <SelectItem value="kano">Kano</SelectItem>
              <SelectItem value="ibadan">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Sort</label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => handleFilterChange('sortBy', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-black">
              <SelectValue placeholder="Sort Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="createdAt-desc">Newest First</SelectItem>
              <SelectItem value="createdAt-asc">Oldest First</SelectItem>
              <SelectItem value="area-desc">Size: Large to Small</SelectItem>
              <SelectItem value="area-asc">Size: Small to Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <div className="h-5"></div> {/* Spacer to align with other fields */}
          <div className="flex gap-2">
            <Button
              className="flex-1 bg-[#194754] hover:bg-black text-white"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Filter'}
            </Button>
            {(filters.propertyType || filters.location || filters.sortBy) && (
              <Button
                variant="outline"
                className="px-3 border-[#194754] text-[#194754] hover:bg-[#194754] hover:text-white"
                onClick={clearFilters}
                disabled={loading}
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
