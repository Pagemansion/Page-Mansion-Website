import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export default function NotFound() {
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
      </section>
      <div className="container py-28">
        <div className="prose max-w-none">
          <h1 style={{ marginBottom: 0 }}>404</h1>
          <p className="mb-4">This page could not be found.</p>
        </div>
        <Button asChild variant="default">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </>
  )
}
