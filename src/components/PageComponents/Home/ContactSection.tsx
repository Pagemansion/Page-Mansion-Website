import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export const ContactSection = () => {
  return (
    <>
      <div className="">
        <div className="py-11 container mx-auto">
          <span className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold">
            CONTACT US
          </span>
        </div>
        <div
          className="py-11 container mx-auto rounded-xl h-screen"
          style={{
            backgroundImage: "url('/assets/contact-banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div></div>
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
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
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
          </div>
        </div>
      </div>
    </>
  )
}
