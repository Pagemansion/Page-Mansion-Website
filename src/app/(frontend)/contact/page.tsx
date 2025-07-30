import { FaqSection } from '@/components/PageComponents/Home/FaqSection'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

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
        <div className="py-11 container mx-auto rounded-xl">
          <div className="my-6">
            <h3 className="font-bold text-3xl my-4">Contact Us</h3>
            <p className="my-2">
              If you have any questions, inquiries, or would like to schedule a visit, please feel
              free to reach out to us. Our team is here to assist you and provide all the
              information you need. You can contact us via email, phone, or by filling out the form
              below. We look forward to hearing from you!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div className="bg-[#E7C873] p-12 rounded-2xl">
                <h3 className="font-bold text-xl">Reach out to Us</h3>
                <div className="my-4">
                  <Input type="name" placeholder="Name" />
                </div>
                <div className="my-4">
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="my-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Properties</SelectLabel>
                        <SelectItem value="canada">Canada </SelectItem>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="ghana">Ghana</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="my-4">
                  <Textarea placeholder="Type your message here." />
                </div>
                <div className="my-4">
                  <button className="bg-black text-white px-6 py-2 rounded-3xl font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <FaqSection />
    </>
  )
}
