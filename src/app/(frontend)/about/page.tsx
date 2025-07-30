import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
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
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">About Us</h1>
      </section>
      <div className="">
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            ABOUT US
          </span>
        </div>
        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <div className="mb-6">
            <h3 className="font-extrabold text-3xl my-4">Page Mansion</h3>
            <p className="my-2">
              Page Mansion Limited is a premium infrastructure and real estate development company
              offering bespoke services in property management, investment advisory, land
              development, and sales strategy. Backed by years of experience, Best delivers
              world-class design and construction projects across Nigeria and beyond. Driven by a
              team of seasoned professionals, we create modern, lasting structures that inspire
              excellence and legacy.
            </p>
          </div>
          <div className="my-6">
            <h3 className="font-bold text-xl my-4">Our Mission</h3>
            <p className="my-2">
              Our mission is to serve in the capacity of leading infrastructural developments in
              Nigeria through our innovative and quality services deliveries.
            </p>
          </div>
          <div className="my-6">
            <h3 className="font-bold text-xl my-4">Our Vision</h3>
            <p className="my-2">
              Page Mansion envisions to be the first-choice leading infrastructural company in
              Nigeria by 2030  
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div>
              <h3 className="font-bold text-xl my-4">Start with Us</h3>
              <p className="my-2">
                Have questions? Our team is here to help you take the next step with Page Mansion.  
              </p>
              <button className="py-2 px-4 rounded-3xl bg-[#194754] text-white hover:text-gray-200 transition-colors duration-300">
                <Link href="" className="flex items-center gap-2">
                  <span>Let&apos;s Connect</span>
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
            <div>
              <h3 className="font-bold text-xl my-4">Explore Our Projects</h3>
              <p className="my-2">
                Browse Page Mansion&apos;s latest developments through our digital brochures.
              </p>
              <button className="py-2 px-4 rounded-3xl bg-[#194754] text-white hover:text-gray-200 transition-colors duration-300">
                <Link href="" className="flex items-center gap-2">
                  <span>View Brochure</span>
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
        </div>
        {/* meet the team */}
        <div>
          <div className="py-11 container mx-auto">
            <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
              MEET THE TEAM
            </span>
          </div>
          <div className="py-11 container mx-auto bg-[#194754] rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <Image
                  src="/assets/about-banner.png"
                  alt=""
                  width={500}
                  height={300}
                  className=""
                />
              </div>
              <div>
                <h3 className="font-extrabold text-3xl text-white my-4">
                  Hon. Excel Wealth David Onuche
                </h3>
                <h4 className="text-xl text-white  font-bold my-4">
                  Founder & Managing Director, Page Mansion Limited
                </h4>
                <p className="my-2 text-white">
                  At the helm of Page Mansion Limited is Hon. Excel Wealth David Onuche, a visionary
                  entrepreneur and real estate strategist with a deep passion for community-focused
                  development. With a dynamic background spanning property development,
                  infrastructure investment & advisory, and civic engagement, he brings
                  forward-thinking leadership to Nigeria&apos;s evolving real estate landscape. Over
                  the years, Hon. Onuche has built a reputation for delivering tailored, high-value
                  residential and commercial developments rooted in quality, innovation, and
                  long-term impact. Under his leadership, Page Mansion has grown into an emerging
                  force in Nigeria&apos;s property sector, delivering modern, smart-ready projects
                  that combine architectural excellence with practical urban living.
                </p>
                <p className="my-2 text-white">
                  Rooted by a philosophy that blends business with purpose, Hon. Onuche is equally
                  renowned for his philanthropic work. Through multiple initiatives, ranging from
                  free medical care for sickle-cell patients to scholarships and support for
                  vulnerable communities, he has demonstrated a rare balance of enterprise and
                  empathy. Hon. Excel Onuche&apos;s commitment to inclusive development extends
                  beyond real estate. His recent appointment by the Governor of Kogi State as a
                  grassroots liaison underscores his credibility as a trusted leader who bridges
                  policy with people, development with dignity. As CEO of Page Mansion, he continues
                  to lead a team dedicated to shaping future-ready communities project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
