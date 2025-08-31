'use client'
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated'
import Image from 'next/image'
import { motion } from 'motion/react'

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
        <FadeIn>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ABOUT US
            </motion.span>
          </div>
        </FadeIn>
        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <SlideInLeft>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Page Mansions
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Page Mansions Limited is a premium infrastructure and real estate development
                company offering bespoke services in property management, investment advisory, land
                development, and sales strategy. Backed by years of experience, we are the best in
                delivering world-class design and construction projects across Nigeria and beyond.
                Driven by a team of seasoned professionals, we create modern, lasting structures
                that inspire excellence and legacy.
              </motion.p>
            </div>
          </SlideInLeft>
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
              Page Mansions envisions to be the first-choice leading infrastructural company in
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
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </motion.span>
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
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </motion.span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* meet the team */}
        <div>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              MEET THE TEAM
            </motion.span>
          </div>
          <div className="py-11 container mx-auto bg-[#194754] rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <SlideInLeft>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/assets/page-mansion-md.jpg"
                    alt="md"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                </motion.div>
              </SlideInLeft>
              <SlideInRight>
                <div>
                  <motion.h3
                    className="font-extrabold text-3xl text-white my-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Hon. Excel Wealth David Onuche
                  </motion.h3>
                  <motion.h4
                    className="text-xl text-white  font-bold my-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Founder & Managing Director, Page Mansion Limited
                  </motion.h4>
                  <motion.p
                    className="my-2 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    At the helm of Page Mansions Limited is Hon. Excel Wealth David Onuche, a
                    visionary entrepreneur and real estate strategist with a deep passion for
                    community-focused development. With a dynamic background spanning property
                    development, infrastructure investment & advisory, and civic engagement, he
                    brings forward-thinking leadership to Nigeria&apos;s evolving real estate
                    landscape. Over the years, Hon. Onuche has built a reputation for delivering
                    tailored, high-value residential and commercial developments rooted in quality,
                    innovation, and long-term impact. Under his leadership, Page Mansion has grown
                    into an emerging force in Nigeria&apos;s property sector, delivering modern,
                    smart-ready projects that combine architectural excellence with practical urban
                    living.
                  </motion.p>
                  <motion.p
                    className="my-2 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Rooted by a philosophy that blends business with purpose, Hon. Onuche is equally
                    renowned for his philanthropic work. Through multiple initiatives, ranging from
                    free medical care for sickle-cell patients to scholarships and support for
                    vulnerable communities, he has demonstrated a rare balance of enterprise and
                    empathy. Hon. Excel Onuche&apos;s commitment to inclusive development extends
                    beyond real estate. His recent appointment by the Governor of Kogi State as a
                    grassroots liaison underscores his credibility as a trusted leader who bridges
                    policy with people, development with dignity. As CEO of Page Mansion, he
                    continues to lead a team dedicated to shaping future-ready communities project
                    at a time.
                  </motion.p>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
        <div className="py-11 container mx-auto">
          <motion.span
            className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CORE ETHICS
          </motion.span>
          <div className="py-6">
            <h3 className="text-xl my-4">
              We emerge to uncover perfection and professionalism in construction expertise. Our
              values are managed on five economy drivers. They are:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-lg">
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#194754] rounded-full"></span>
                Product Excellence
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#194754] rounded-full"></span>
                Infrastructural Compactness
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#194754] rounded-full"></span>
                Team Leadership
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#194754] rounded-full"></span>
                Superior Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#194754] rounded-full"></span>
                Technology Competence
              </li>
            </ul>
          </div>
          <motion.span
            className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GOVERNANCE
          </motion.span>
          <div className="py-6">
            <h3 className="text-xl my-4">
              We are governed by regulations that guide our company-wide performance, and the
              decisions that affect us as a group. Our company&apos;s business policy is provided to
              gratify the following:
            </h3>
            <ul className="space-y-6 my-8">
              <li className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Health Safety Environment
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct all business in a safe and environmentally friendly manner.
                    Protecting our employees, clients, and customers involved in our operations, as
                    well as the public and the environment. Where we provide our services is a
                    mandate we hold in high esteem.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-green-900 mb-2">
                    System Integration Enterprise
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We achieve Health, Safety, Security, Environment, and Community affairs
                    performance goals by placing an equal level of commitment with other critical
                    business objectives and integrate them into our daily operations, so that each
                    job can be completed safely, and also in an environmentally friendly manner.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-amber-900 mb-2">
                    Risk and Hazard Assessment
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We provide an atmosphere of employment where hazards are identified and the
                    appropriate actions are taken to reduce the risk of injury, actively promote the
                    highest standards of safety and security behavior, environmental awareness,
                    clients/customer asset protection, as well as safeguard the corporate reputation
                    of our company culture.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">
                    Operational Standard and Regulations
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We meet and strive to exceed all applicable local, national, and international
                    regulations and standards and also ensure that our employees are trained in
                    relevant areas of our operations. We maintain a constant commitment to the
                    prevention of pollution and negative impact on the environment.
                  </p>
                </div>
              </li>
            </ul>
            <p className="my-4 font-semibold">...Enabling access to quality infrastructure</p>
          </div>
        </div>
        <div className="py-11 container mx-auto">
          <motion.span
            className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR SERVICES
          </motion.span>
          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Real Estate Development */}
              <motion.div
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194754]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#E7C873] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#194754] transition-colors duration-300">
                    Real Estate Development
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Page Mansions Limited, we understand that property ownership in Nigeria can be
                    challenging without the right support. To meet these needs, our Property
                    Development and Management service is designed to simplify the process from
                    start to finish and beyond.
                  </p>
                  <p>
                    Whether you&apos;re a first-time buyer, diaspora investor, or a busy
                    professional, we handle every stage of development, including architectural
                    design, government approvals, budgeting, and construction, using a trusted
                    network of contractors.
                  </p>
                  <p className="font-semibold text-[#194754]">
                    Our mission is clear: Build with precision, manage with intelligence.
                  </p>
                </div>
              </motion.div>

              {/* Real Estate Investment & Advisory */}
              <motion.div
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194754]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#E7C873] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M22.0049 6.99979H23.0049V16.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979ZM20.0049 16.9998H14.0049C11.2435 16.9998 9.00488 14.7612 9.00488 11.9998C9.00488 9.23836 11.2435 6.99979 14.0049 6.99979H20.0049V4.99979H4.00488V18.9998H20.0049V16.9998ZM21.0049 14.9998V8.99979H14.0049C12.348 8.99979 11.0049 10.3429 11.0049 11.9998C11.0049 13.6566 12.348 14.9998 14.0049 14.9998H21.0049ZM14.0049 10.9998H17.0049V12.9998H14.0049V10.9998Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#194754] transition-colors duration-300">
                    Investment & Advisory
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Page Mansions goes beyond property sales to help you build lasting wealth through
                    strategic real estate investments. Our advisory service leverages market data,
                    trend analysis, and local expertise.
                  </p>
                  <p>
                    We offer ROI projections, performance tracking, and access to thoroughly vetted
                    opportunities from off-plan projects to joint ventures, ensuring every
                    investment is smart, secure, and set up for long-term success.
                  </p>
                  <p className="font-semibold text-[#194754]">
                    Your trusted advisor in Nigeria&apos;s evolving real estate landscape.
                  </p>
                </div>
              </motion.div>

              {/* Land Acquisition & Development */}
              <motion.div
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194754]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#E7C873] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#194754] transition-colors duration-300">
                    Land Acquisition
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Purchasing land in Nigeria can be complicated by fraud, unclear ownership, and
                    documentation issues. Page Mansion offers a reliable service that eliminates
                    these risks.
                  </p>
                  <p>
                    We help clients find, inspect, and purchase verified plots in fast-growing urban
                    and suburban areas, with thorough vetting for title authenticity, zoning
                    compliance, and development potential.
                  </p>
                  <p className="font-semibold text-[#194754]">
                    From purchase to development - we handle every step.
                  </p>
                </div>
              </motion.div>

              {/* Property Marketing & Sales Strategy */}
              <motion.div
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194754]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#E7C873] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#194754] transition-colors duration-300">
                    Marketing & Sales
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Selling or leasing property in Nigeria demands more than just advertising, it
                    requires a strategic, results-driven approach. We deliver comprehensive
                    strategies designed to attract serious buyers and close deals efficiently.
                  </p>
                  <p>
                    Our team produces standout listings with professional photos, drone footage, and
                    persuasive descriptions, shared across top platforms and our curated buyer
                    database.
                  </p>
                  <p className="font-semibold text-[#194754]">
                    With Page Mansions, your property doesn&apos;t just get listed, it gets sold.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
