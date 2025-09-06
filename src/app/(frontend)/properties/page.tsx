import { Metadata } from 'next'
import { Suspense } from 'react'
import { PropertySearchPage } from '@/components/PropertySearchPage'
import PropertyDisclaimerWrapper from '@/components/PropertyDisclaimerWrapper'

export const metadata: Metadata = {
  title: 'Properties | Find Your Perfect Home',
  description:
    'Browse our extensive collection of properties. Find houses, apartments, condos, and more in your preferred location.',
}

export default function PropertiesPage() {
  return (
    <>
      <Suspense fallback={<div>Loading properties...</div>}>
        <PropertySearchPage />
      </Suspense>

      <PropertyDisclaimerWrapper />
    </>
  )
}
