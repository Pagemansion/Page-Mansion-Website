'use client'
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated'
import { motion } from 'motion/react'

import React from 'react'


export default function TermsPage() {
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
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Terms & Conditions</h1>
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
              TERMS
            </motion.span>
          </div>
        </FadeIn>
        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <SlideInLeft>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Introduction
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to Page Mansions. These Terms and Conditions (&quot;Terms&quot;) govern your
                use of our website, services, and platform. By accessing or using Page Mansions, you
                agree to be bound by these Terms. If you disagree with any part of these terms,
                please do not use our services.
              </motion.p>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Page Mansions is a luxury real estate platform that connects buyers, sellers, and
                renters with premium properties. We provide property listings, consultation
                services, and facilitate transactions in the luxury real estate market.
              </motion.p>
            </div>
          </SlideInLeft>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInRight>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Eligibility & Use of Service
              </motion.h3>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Age Requirements
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You must be at least 18 years old to use our services. By using Page Mansions, you
                represent and warrant that you meet this age requirement and have the legal capacity
                to enter into these Terms.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Acceptable Use
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You agree to use our platform only for lawful purposes and in accordance with these
                Terms. You must not:
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.li
                  className="my-2 list-disc list-inside text-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Provide false, misleading, or fraudulent information
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Violate any applicable laws or regulations
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Interfere with or disrupt our services or servers
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Use our platform for any commercial purposes without authorization
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Attempt to gain unauthorized access to our systems
                </motion.li>
              </motion.ul>
            </div>
          </SlideInRight>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInLeft>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Property Listings & Transactions
              </motion.h3>

              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Listing Accuracy
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                While we strive to ensure accuracy in all property listings, Page Mansions does not
                guarantee the completeness, accuracy, or reliability of any property information.
                All property details, including prices, availability, and specifications, are
                subject to change without notice.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transaction Facilitation
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Page Mansions acts as a facilitator between buyers and sellers. We are not a party
                to any transaction and do not guarantee the completion of any sale or purchase. All
                transactions are subject to independent verification, due diligence, and legal
                documentation.
              </motion.p>

              <motion.blockquote
                className="border-l-4 border-[#E7C873] pl-4 italic text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                &quot;Property investments carry inherent risks. Past performance does not guarantee
                future results. Please consult with qualified professionals before making investment
                decisions.&quot;
              </motion.blockquote>
            </div>
          </SlideInLeft>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInRight>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                User Responsibilities
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                As a user of Page Mansions, you are responsible for maintaining the confidentiality
                of your account information and for all activities that occur under your account.
                You must immediately notify us of any unauthorized use of your account.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Content Standards
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Any content you submit must:
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.li
                  className="my-2 list-disc list-inside text-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Be accurate and truthful
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Not violate any third-party rights
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Comply with applicable laws and regulations
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Not contain offensive, defamatory, or inappropriate material
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Respect the privacy and rights of others
                </motion.li>
              </motion.ul>
            </div>
          </SlideInRight>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInLeft>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Payment & Fees
              </motion.h3>

              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Service Fees
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Page Mansions charges commission fees for successful property transactions. Fee
                structures vary based on property type, transaction value, and service level. All
                fees will be clearly disclosed before any agreement is finalized.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Payment Terms
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                All fees are due as specified in your service agreement. Late payments may incur
                additional charges. We reserve the right to suspend services for overdue accounts.
                Refunds are subject to our refund policy and applicable terms.
              </motion.p>
            </div>
          </SlideInLeft>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInRight>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Limitation of Liability{' '}
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To the fullest extent permitted by law, Page Mansions shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses. Our
                total liability to you for any claims arising from or relating to these Terms or our
                services shall not exceed the amount you have paid to us in the twelve months
                preceding the claim.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Indemnification
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You agree to indemnify and hold Page Mansions harmless from any claims, damages, or
                expenses arising from your use of our services or violation of these Terms.
              </motion.p>
            </div>
          </SlideInRight>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInLeft>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Termination of Service
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We reserve the right to terminate or suspend your account immediately, without prior
                notice, for conduct that we believe violates these Terms or is harmful to other
                users, us, or third parties, or for any other reason.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Effect of Termination
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Upon termination, your right to use our services will cease immediately. All
                provisions of these Terms that by their nature should survive termination shall
                survive, including ownership provisions, warranty disclaimers, and limitations of
                liability.
              </motion.p>
            </div>
          </SlideInLeft>
          <hr className="bg-[#E5E7EB] my-4" />
          <SlideInRight>
            <div className="mb-6">
              <motion.h3
                className="font-extrabold text-3xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Changes to Terms
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Page Mansions reserves the right to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days notice prior to any new terms
                taking effect. Your continued use of our services after any such changes constitutes
                your acceptance of the new Terms. If you do not agree to the revised terms, please
                discontinue use of our services.
              </motion.p>
            </div>
          </SlideInRight>
           <hr className="bg-[#E5E7EB] my-4" />
                    <SlideInLeft>
                      <div className="mb-6">
                        <motion.h3
                          className="font-extrabold text-3xl my-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          Contact Us
                        </motion.h3>
                        <motion.p
                          className="my-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          If you have any questions about this Privacy Policy or our data practices, please
                          contact us:
                        </motion.p>
                        <div className="p-4 rounded-xl border-[#7dbeff] border-2 bg-[#F9FAFB]">
                          <h4 className="text-xl font-semibold">Privacy Officer - Page Mansions</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="my-3">
                              <div className="flex gap-2 items-center my-4">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="rgba(231,200,115,1)"
                                  >
                                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                                  </svg>
                                </span>
                                <p>
                                  <span className="font-semibold">Email:</span> privacy@pagemansions.com
                                </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="rgba(231,200,115,1)"
                                  >
                                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                                  </svg>
                                </span>
                                <p>
                                  <span className="font-semibold">Phone:</span> +234 706 827 3081
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="flex gap-2 items-center my-4">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="rgba(231,200,115,1)"
                                  >
                                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                                  </svg>
                                </span>
                                <p>
                                  <span className="font-semibold">Address:</span> Plot 104, Cube Hub, Emmanuel
                                  Adiele, Off Mike Akhigbe Way, Jabi Abuja, Nigeria
                                </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="rgba(231,200,115,1)"
                                  >
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                  </svg>
                                </span>
                                <p>
                                  <span className="font-semibold">Hours:</span> Monday - Friday, 9:00 AM -
                                  6:00PM EST
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SlideInLeft>
        </div>
      </div>
    </>
  )
};