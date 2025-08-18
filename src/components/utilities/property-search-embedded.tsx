'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
}

interface PropertySearchEmbeddedProps {
  onSearch?: (filters: SearchFilters) => void
  redirectToSearchPage?: boolean
  className?: string
}

export default function PropertySearchEmbedded({
  onSearch,
  redirectToSearchPage = true,
  className = '',
}: PropertySearchEmbeddedProps) {
  const [filters, setFilters] = useState<SearchFilters>({})
  const router = useRouter()

  const handleSearch = () => {
    if (redirectToSearchPage) {
      // Build query string and redirect to search page
      const params = new URLSearchParams()

      if (filters.propertyType) {
        params.append('type', filters.propertyType)
      }

      if (filters.location) {
        params.append('location', filters.location)
      }

      if (filters.sortBy) {
        params.append('sort', filters.sortBy)
      }

      const queryString = params.toString()
      router.push(`/properties${queryString ? `?${queryString}` : ''}`)
    } else if (onSearch) {
      onSearch(filters)
    }
  }

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className={`w-full bg-white rounded-xl p-4 shadow-lg ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Looking For */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Looking For</label>
          <Select
            value={filters.propertyType || ''}
            onValueChange={(value) => handleFilterChange('propertyType', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-gray-300 focus:border-[#194754]">
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
            value={filters.location || ''}
            onValueChange={(value) => handleFilterChange('location', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-gray-300 focus:border-[#194754]">
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

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Price Range</label>
          <Select
            value={filters.sortBy || ''}
            onValueChange={(value) => handleFilterChange('sortBy', value)}
          >
            <SelectTrigger className="w-full bg-transparent text-black border border-gray-300 focus:border-[#194754]">
              <SelectValue placeholder="Any Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Low to High</SelectItem>
              <SelectItem value="price-desc">High to Low</SelectItem>
              <SelectItem value="under-50m">Under ₦50M</SelectItem>
              <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
              <SelectItem value="100m-200m">₦100M - ₦200M</SelectItem>
              <SelectItem value="over-200m">Over ₦200M</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <div className="h-5"></div> {/* Spacer to align with other fields */}
          <Button
            className="w-full bg-[#194754] hover:bg-black text-white font-semibold py-3"
            onClick={handleSearch}
          >
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  )
}
