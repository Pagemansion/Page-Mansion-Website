import React from 'react'
import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions about our properties? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <ContactForm />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@pagemansions.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">
                123 Real Estate Ave
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
