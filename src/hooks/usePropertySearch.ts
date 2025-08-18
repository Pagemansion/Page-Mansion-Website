import { useState, useCallback } from 'react'
import { Property } from '@/payload-types'
import { SearchFilters } from '@/components/utilities/property-search'

export const usePropertySearch = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchProperties = useCallback(async (filters: SearchFilters) => {
    setLoading(true)
    setError(null)

    try {
      // Build query parameters
      const params = new URLSearchParams()

      if (filters.propertyType) {
        params.append('propertyType', filters.propertyType)
      }

      if (filters.location) {
        params.append('location', filters.location)
      }

      if (filters.sortBy) {
        const [field, direction] = filters.sortBy.split('-')
        params.append('sort', `${direction === 'desc' ? '-' : ''}${field}`)
      }

      // Add default parameters
      params.append('limit', '50')
      params.append('where[_status][equals]', 'published')

      const response = await fetch(`/api/properties?${params.toString()}`)

      if (!response.ok) {
        throw new Error('Failed to fetch properties')
      }

      const data = await response.json()
      setProperties(data.docs || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setProperties([])
    } finally {
      setLoading(false)
    }
  }, [])

  const loadInitialProperties = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        '/api/properties?limit=12&where[_status][equals]=published&sort=-createdAt',
      )

      if (!response.ok) {
        throw new Error('Failed to fetch properties')
      }

      const data = await response.json()
      setProperties(data.docs || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setProperties([])
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    properties,
    loading,
    error,
    searchProperties,
    loadInitialProperties,
  }
}
