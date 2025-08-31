import React from 'react'
import { FaqSection } from '@/components/PageComponents/Home/FaqSection'

export const dynamic = 'force-dynamic'

export default function FaqsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        {/* <h1 className="relative z-20 text-white text-5xl font-bold mt-20">
          Frequently Asked Questions
        </h1> */}
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'FAQs | Page Mansions Real Estate',
    description:
      'Find answers to frequently asked questions about Page Mansions properties, payments, documentation, and more.',
    openGraph: {
      title: 'FAQs | Page Mansions Real Estate',
      description:
        'Find answers to frequently asked questions about Page Mansions properties, payments, documentation, and more.',
      type: 'website',
    },
  }
}
