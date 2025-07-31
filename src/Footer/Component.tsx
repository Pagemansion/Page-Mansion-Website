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
      {/* footer background-color : D48F04 */}
      <div className="rounded-3xl h-[300px] mt-auto border-t border-border bg-[#194754] text-white">
        <div className="container py-8 gap-5 flex flex-col md:flex-row md:justify-between">
          <div className="w-[40%]">
            <Link className="flex items-center" href="/">
              <Image
                src="/assets/page-mansion-white.png"
                alt="Page Mansion Real Estate"
                width={100}
                height={45}
                priority
              />
            </Link>
            <p className="py-4 font-semibold text-white">
              Leading the infrastructural pathway to exceptional quality in Nigeria through our
              innovative and quality services deliveries.
            </p>
            <div>
              <h3 className="font-bold text-lg text-white">Are you looking for a home?</h3>
            </div>
            <div className="flex w-full max-w-sm  items-center gap-2  my-4">
              <Input type="email" placeholder="Enter Email Address" />
              <button
                type="submit"
                className="py-2 px-4 rounded-xl border hover:bg-white hover:text-[#194754] border-white text-white"
              >
                Send
              </button>
            </div>
          </div>
          <div className="flex gap-11 text-white mr-20">
            <div>
              <h3 className="font-bold text-lg">Explore</h3>
              <p className="my-2">Buy</p>
              <p className="my-2">Rent</p>
              <p className="my-2">Short Term</p>
              <p className="my-2">New Projects</p>
              <p className="my-2">List Your Property</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Service</h3>
              <p className="my-2">Property Management</p>
              <p className="my-2">Property Valuation</p>
              <p className="my-2">Property Exchange</p>
              <p className="my-2">Legal Agreements</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Quick Links</h3>
              <p className="my-2">Blogs</p>
              <p className="my-2">FAQ</p>
              <p className="my-2">Reviews</p>
            </div>
          </div>

          <div className="hidden flex-col-reverse items-start md:flex-row gap-4 md:items-center ">
            <ThemeSelector />
            <nav className="flex flex-col md:flex-row gap-4">
              {navItems.map(({ link }, i) => {
                return <CMSLink className="text-white" key={i} {...link} />
              })}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
