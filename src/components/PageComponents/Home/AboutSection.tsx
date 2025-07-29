import Image from 'next/image'
import React from 'react'

export const AboutSection = () => {
  return (
    <>
      <div className="">
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            ABOUT US
          </span>
        </div>
        <div className="py-11 container mx-auto bg-[#FAFAFA] rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div>
              <Image src="/assets/about-banner.png" alt="" width={500} height={300} className="" />
            </div>
            <div>
              <h3 className="font-extrabold text-3xl my-4">
                We ensure excellence in building structure around realities
              </h3>
              <p className="my-2">
                Page Mansion Limited is a premium-based developmental infrastructure company
                offering bespoke 21st-century services in Property Development Management &
                Maintenance, Real Estate Investment Advisory, Land Acquisition & Development, and
                Property Marketing & Sales Strategy. With years of practice, we are known to
                discover, develop and execute world-class projects in building design and
                construction, among other related civil engineering expertise in Nigeria and beyond.
              </p>
              <p className="my-2">
                Page Mansion is among the lead performing infrastructure investment company
                championing ultra-modern structural facilities in Nigeria. We are best managed by
                experienced and talented engineering professionals to create lasting memories and
                legacies for our clients in excellence services.
              </p>
              <div className=" my-4">
                <button className="flex gap-2 items-center px-5 py-2 border border-[#194754] text-[#194754] rounded-full font-semibold hover:bg-[#194754] hover:text-white transition-colors group">
                  <span>View More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="fill-[#194754] group-hover:fill-white transition-colors"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            WHY CHOOSE US
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-10">
            <div className="p-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path>
                </svg>
              </span>
              <h3 className="text-xl font-semibold my-2">Trusted Agents</h3>
              <p>
                Our team consists of highly experienced and trustworthy agents dedicated to guiding
                you through every step of your real estate journey.
              </p>
            </div>
            <div className="p-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M3.90145 17.8636L7.81249 13.9526L10.6409 16.781L15.212 12.2099L17.0049 14.0028V9.00281H12.0049L13.7978 10.7957L10.6409 13.9526L7.81249 11.1241L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C8.67116 22.0028 5.71844 20.3715 3.90145 17.8636Z"></path>
                </svg>
              </span>
              <h3 className="text-black text-xl font-semibold my-2">Secure Investments</h3>
              <p className="text-black">
                We prioritize the safety of your investments by ensuring all transactions are
                transparent, legally compliant, and backed by thorough due diligence.
              </p>
            </div>
            <div className="p-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z"></path>
                </svg>
              </span>
              <h3 className="text-xl font-semibold my-2">Prime Locations</h3>
              <p>
                We offer properties in highly sought-after and strategic locations, ensuring maximum
                value and convenience for our clients.
              </p>
            </div>
            <div className="p-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M6 10V20H19V10H6ZM18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11H9V13H7V11ZM7 14H9V16H7V14ZM7 17H9V19H7V17Z"></path>
                </svg>
              </span>
              <h3 className="text-black text-xl font-semibold my-2">Security</h3>
              <p className="text-black">
                We implement robust security measures across all our properties, ensuring a safe and
                secure environment for residents and investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
