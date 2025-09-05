'use client'

import React from 'react'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ComingSoonProps {
  title: string
  description?: string
  expectedLaunch?: string
}

export default function ComingSoon({
  title,
  description = "We're working hard to bring you this feature. Stay tuned!",
  expectedLaunch,
}: ComingSoonProps) {
  return (
    <>
      <section
        className="relative w-full h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20"></h1>
      </section>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center px-4">
        <div className=" w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <Clock className="w-12 h-12 text-[#194754]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-[#194754] rounded-full text-sm font-medium">
              Coming Soon
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{description}</p>

            {/* Expected Launch */}
            {expectedLaunch && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Expected Launch</p>
                <p className="font-semibold text-gray-900">{expectedLaunch}</p>
              </div>
            )}

            {/* Back to Home Button */}
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-[#194754] hover:bg-black text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
