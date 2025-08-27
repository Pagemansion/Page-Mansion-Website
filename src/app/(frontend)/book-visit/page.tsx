import { FaqSection } from '@/components/PageComponents/Home/FaqSection'
import { BookVisitForm } from '@/components/BookVisitForm'
import React from 'react'

export default function BookVisitPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20 text-white">
          <h1 className="text-5xl font-bold mb-4">Book a Visit</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            See it for yourself. Experience luxury in every detail.
          </p>
        </div>
      </section>

      <div className="bg-gray-50">
        {/* Badge Section */}
        <div className="py-11 container mx-auto px-4">
          <span className="inline-block p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            VISIT
          </span>
        </div>

        {/* Form Section */}
        <div className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <BookVisitForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </>
  )
}
