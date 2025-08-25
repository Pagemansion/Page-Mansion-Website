'use client'
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated'
import { motion } from 'motion/react'

import React from 'react'


export default function PrivacyPage() {
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
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Privacy Policy</h1>
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
              PRIVACY
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
                Introduction
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At Page Mansions, we are committed to protecting and respecting your privacy. This
                Privacy Policy explains how we collect, use, process, and protect your personal
                information when you use our website, services, and platform.
              </motion.p>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We understand that your personal data is important to you, and we take our
                responsibility to protect it seriously. This policy applies to all users of Page
                Mansions and covers our practices regarding the collection and use of personal
                information.
              </motion.p>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.p>
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
                How We Use Your Information
              </motion.h3>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Service Provision
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To provide property listings, facilitate bookings, and deliver our real estate
                services effectively.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                User Experience
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To personalize your experience, improve our platform, and develop new features based
                on usage patterns.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Communication
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To send updates, promotional materials, and important notifications about our
                services and your account.
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
                Sharing of Information
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We respect your privacy and do not sell your personal information to third parties.
                However, we may share your information in the following circumstances:
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trusted Partners
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We work with trusted service providers including:
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
                  Technology providers for platform maintenance
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Marketing partners to send you promotional materials (with your consent where
                  required).
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Legal and compliance requirements
                </motion.li>
              </motion.ul>
              <motion.blockquote
                className="border-l-4 border-[#E7C873] pl-4 italic text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                &quot;We never sell your personal information to third parties and only share data
                when necessary to provide our services or comply with legal requirements.&quot;
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
                Cookies & Tracking
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We use cookies and similar tracking technologies to enhance your browsing experience
                and analyze how our website is used. Cookies help us:
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Essential Cookies
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Required for basic website functionality, security, and user authentication.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Analytics Cookies
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Help us understand user behavior and improve our website performance.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Personalization
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Remember your preferences and provide customized content and recommendations.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Marketing Cookies
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Track your activity to show relevant advertisements and measure campaign
                effectiveness.
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
                Data Security
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We implement robust security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction:
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SSL Encryption
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                All data transmission is encrypted using industry-standard SSL certificates.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Secure Servers
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our servers are protected by advanced firewall and monitoring systems.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Access Controls
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Strict access controls limit who can view your personal information.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Regular Audits
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We conduct regular security assessments and updates to our systems.
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
                Your Rights
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You have several rights regarding your personal data. You can exercise these rights
                by contacting us:
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Right to Access
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Request a copy of the personal data we hold about you.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Right to Rectification
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Request correction of any incorrect or incomplete personal data.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Right to Erasure
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Request deletion of your personal data under certain circumstances.
              </motion.p>
              <motion.h3
                className="font-bold text-xl my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Right to Opt-out
              </motion.h3>
              <motion.p
                className="my-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Unsubscribe from marketing communications at any time.
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
                Children&apos;s Privacy
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Page Mansions is not intended for users under the age of 18. We do not knowingly
                collect personal information from children under 18 without parental consent.
              </motion.p>
              <div className="my-2 text-black border-2 border-[#FED7AA] bg-[#FFF7ED] rounded-xl p-4">
                If you are a parent or guardian and believe your child has provided us with personal
                information, please contact us immediately. We will take steps to remove such
                information from our systems.
              </div>
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
                Changes to this Privacy Policy
              </motion.h3>
              <motion.p
                className="my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or for legal, regulatory, or operational reasons. When we make significant
                changes, we will:
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
                  Post the updated policy on this page
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Notify you via email if the changes are material
                </motion.li>
                <motion.li
                  className="my-2 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Provide at least 30 days notice for significant changes
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