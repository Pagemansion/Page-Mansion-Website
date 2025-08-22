import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="p-2">
      <div className="rounded-3xl min-h-[300px] mt-auto border-t border-border bg-[#194754] text-white">
        <div className="container py-8 px-4 md:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-4">
              <Link className="flex items-center" href="/">
                <Image
                  src="/assets/page-mansion-white.png"
                  alt="Page Mansion Real Estate"
                  width={100}
                  height={45}
                  priority
                />
              </Link>

              <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed max-w-md">
                Leading the infrastructural pathway to exceptional quality in Nigeria through our
                innovative and quality services deliveries.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h3 className="font-bold text-base md:text-lg text-white">
                  Are you looking for a home?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-[#194754] transition-colors duration-300 whitespace-nowrap font-medium"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Explore Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-base md:text-lg text-white">Explore</h3>
                <nav className="space-y-2">
                  <Link
                    href="/buy"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Buy
                  </Link>
                  <Link
                    href="/rent"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Rent
                  </Link>
                  <Link
                    href="/short-term"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Short Term
                  </Link>
                  <Link
                    href="/new-projects"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    New Projects
                  </Link>
                  {/* <Link
                    href="/list-property"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    List Your Property
                  </Link> */}
                </nav>
              </div>

              {/* Service Section */}
              <div className="space-y-3 col-span-2">
                <h3 className="font-bold text-base md:text-lg text-white">Service</h3>
                <nav className="space-y-2">
                  <p className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200">
                    Real Estate Development
                  </p>
                  <p className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200">
                    Real Estate Investment & Advisory
                  </p>
                  <p className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200">
                    Land Acquisition & Development
                  </p>
                  <p className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200">
                    Property Marketing & Sales Strategy
                  </p>
                </nav>
              </div>

              {/* Quick Links Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-base md:text-lg text-white">Quick Links</h3>
                <nav className="space-y-2">
                  <Link
                    href="/blog"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/reviews"
                    className="block text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Reviews
                  </Link>
                </nav>
              </div>
            </div>

            {/* Theme Selector & Additional Nav - Desktop Only */}
            <div className="hidden">
              <ThemeSelector />
              {navItems.length > 0 && (
                <nav className="flex flex-col gap-2 text-right">
                  {navItems.map(({ link }, i) => {
                    return (
                      <CMSLink
                        className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                        key={i}
                        {...link}
                      />
                    )
                  })}
                </nav>
              )}
            </div>
          </div>

          {/* Mobile Theme Selector & Additional Nav */}
          <div className="hidden mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <ThemeSelector />
              {navItems.length > 0 && (
                <nav className="flex flex-wrap gap-4">
                  {navItems.map(({ link }, i) => {
                    return (
                      <CMSLink
                        className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                        key={i}
                        {...link}
                      />
                    )
                  })}
                </nav>
              )}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
              <p>© 2025 Page Mansion Real Estate. All rights reserved.</p>
              <div className="flex gap-4">
                <Link
                  href="/privacy"
                  className="hover:text-white/80 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white/80 transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
