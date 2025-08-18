import { Metadata } from 'next'
import { PropertySearchPage } from '@/components/PropertySearchPage'

export const metadata: Metadata = {
  title: 'Properties | Find Your Perfect Home',
  description:
    'Browse our extensive collection of properties. Find houses, apartments, condos, and more in your preferred location.',
}

export default function PropertiesPage() {
  return <PropertySearchPage />
}
