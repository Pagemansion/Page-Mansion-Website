// src/components/HeroSection/HeroSection.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import PropertySearch from '../utilities/property-search'

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center  overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop // Loop indefinitely
          muted // Crucial for autoplay on most browsers/devices
          playsInline // Important for mobile devices to allow inline playback
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
          {/* Add more <source> tags for different formats (e.g., .webm) for broader browser compatibility */}
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken video for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#194754_0%,_rgba(13,36,43,0.5)_73.22%,_rgba(13,36,43,0.1)_100%)] opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="relative text-white z-20 p-8 max-w-6xl mx-auto mt-24">
          <h1 className="text-6xl md:text-5xl font-bold leading-tight mb-6 animate-fadeInUp font-urbanist">
            Leading the infrastructural pathway to exceptional quality
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeInUp delay-200">
            To serve in the capacity of leading infrastructural developments in Nigeria through our
            innovative and quality services deliveries.
          </p>
          <Link href="/properties">
          <div className="mt-20">
            <PropertySearch />
            </div>
            {/* <div className="bg-white inline-flex gap-2 items-center p-2 rounded-3xl">
              <div className="">
                <Image
                  src="/assets/client-avatars.png"
                  width={150}
                  height={100}
                  alt="Page Mansion Clients"
                  priority
                 
                />
              </div>
              <div>
                <p className="text-black text-md">50K+ Happy Clients</p>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-400'}>
                      ★
                    </span>
                  ))}
                  <span>4.5/5</span>
                </div>
              </div>
            </div> */}
          </Link>
        </div>
      </section>
    </>
  )
}
