import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Property } from '@/payload-types'
import { PropertiesSectionClient } from './PropertiesSectionClient'

async function getProperties(): Promise<Property[]> {
  try {
    const payload = await getPayload({ config })

    const { docs: properties } = await payload.find({
      collection: 'properties',
      where: {
        _status: {
          equals: 'published',
        },
        featured: {
          equals: true,
        },
      },
      sort: '-publishedAt',
      limit: 6,
    })

    return properties
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}

export const PropertiesSection = async () => {
  const properties = await getProperties()

  return <PropertiesSectionClient properties={properties} />
}
