'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function PropertySearch() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Looking For */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Looking For</label>
          <Select>
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
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Location</label>
          <Select>
            <SelectTrigger className="w-full bg-transparent text-black border border-black">
              <SelectValue placeholder="Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
              <SelectItem value="philadelphia">Philadelphia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Sort</label>
          <Select>
            <SelectTrigger className="w-full bg-transparent text-black border border-black">
              <SelectValue placeholder="Sort Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="size-large-small">Size: Large to Small</SelectItem>
              <SelectItem value="size-small-large">Size: Small to Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <div className="h-5"></div> {/* Spacer to align with other fields */}
          <Button
            className="w-full bg-[#194754] hover:bg-black text-white"
            onClick={() => {
              // Handle search functionality here
              console.log('Search clicked')
            }}
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
