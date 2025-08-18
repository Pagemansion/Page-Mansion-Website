import React from 'react'
import { ContactForm } from '@/components/ContactForm'
import { FaqSection } from '@/components/PageComponents/Home/FaqSection'

export default function ContactPage() {
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
        <h1 className="relative z-20 text-white text-5xl font-bold mt-20">Contact Us</h1>
      </section>
      <div className="">
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            CONTACT
          </span>
        </div>
        <div className="min-h-screen py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-lg text-gray-600">
                Have questions about our properties? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <ContactForm />
              </div>
                <div>
                <iframe
                  title="Gwarimpa Abuja Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.734564497057!2d7.426378314791091!3d9.08570379348959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sGwarimpa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697041234567!5m2!1sen!2sng"
                  width="100%"
                  height="620"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="bg-[#E7C873] p-3 rounded-full inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <span className="bg-[#E7C873] p-3 rounded-full inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@pagemansions.com</p>
              </div>
              <div>
                <span className="bg-[#E7C873] p-3 rounded-full inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">
                  Gwarimpa Estate
                  <br />
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
        <FaqSection />
      </div>
    </>
  )
}
