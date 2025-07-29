'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import Image from 'next/image'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'} `

  const linkClasses = `hover:text-black transition-colors duration-300 text-lg font-medium ${isScrolled ? 'text-black font-semibold': 'text-white'}`;

  return (
    <header className={headerClasses}>
      <div className="container  rounded-[40px] mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
        {isScrolled ? (
          <Image
            src="/assets/page-mansion.png" 
            alt="Page Mansion Real Estate"
            width={100} 
            height={45}
            priority 
          /> ) : (
          <Image
            src="/assets/page-mansion-white.png"
            alt="Page Mansion Real Estate"
            width={100} 
            height={45}
            priority
          />
        )
        }
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/properties" className={linkClasses}>
            Our Properties
          </Link>

          <Link href="/about-us" className={linkClasses}>
            {' '}
            {/* Updated to /about-us */}
            About Us
          </Link>
          <Link href="/blog" className={linkClasses}>
            {' '}
            {/* Updated to /contact */}
            Blog
          </Link>
          <Link href="/contact" className={linkClasses}>
            {' '}
            {/* Updated to /contact */}
            Contact
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="p-2 rounded-full bg-[#194754] text-white hover:text-gray-200 transition-colors duration-300">
            <Link href="/search" className="">
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </Link>
          </button>
          <button className="py-2 px-4 rounded-3xl bg-[#194754] text-white text-lg hover:text-gray-200 transition-colors duration-300">
            <Link href="" className="flex items-center gap-2">
              <span>Book a Visit</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  )
}
