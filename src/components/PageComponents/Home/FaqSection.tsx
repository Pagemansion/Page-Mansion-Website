'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn, StaggerContainer } from '../../ui/animated'

 const questions = [
   {
     title: 'Where is Page Mansion located?',
     content: 'Page Mansion properties are located in Abuja',
   },
   {
     title: ' How can I contact Page Mansion?',
     content:
       'You can reach us via WhatsApp, email, or our contact form on the website. We typically respond within 24 hours.',
   },
   {
     title: 'What is the authorized payment structure?',
     content: `All payments should be made directly to the official Page Mansion company account. The details are provided upon inquiry. Kindly send your payment confirmation to our WhatsApp or email.
Note: Page Mansion Ltd shall not accept any responsibility for any liability that may arise as a result of deviation from the above instructions.`,
   },
   {
     title: 'What other payments are required aside from land or house cost?',
     content: `You'll be required to pay a 5% fee for Survey and Title Deeds. Additional Service Charges may apply and are based on current economic conditions.`,
   },
   {
     title: 'Can I make payments to an agent?',
     content: `No. Page Mansion does not authorize payments through third-party agents. For security reasons, payments should never be made to agents. Always pay into the company's official account.`,
   },
   {
     title: 'When should I pay for the Survey and Title Deeds?',
     content: `It's advisable to pay for these immediately after purchase to avoid a possible increase in fees (up to 5% of the current property value).
`,
   },
   {
     title: 'What documents do I receive after initial payment?',
     content: `After your first payment, you'll receive an official Offer Letter and an Updated Payment Statement.`,
   },
   {
     title: 'How is land or plot allocated after payment?',
     content: `Once payment for the plot of land/house has been made in full (inclusive of payment for the title deeds and Survey Plan) the plot will be allocated however, houses will be delivered not later than 12-18 months from the date payment commences but will only be delivered when payment has been made in full (inclusive of payment of Title deeds and Survey and other estate improvement fees).`,
   },
   {
     title: 'What happens after I submit a property inquiry?',
     content: `After submitting an inquiry form via the contact page or property, you will receive email confirmation. Our team will respond promptly via the preferred contact method (WhatsApp, Email, or call) to guide you further.`,
   },
   {
     title: 'Can I resell my property? ',
     content: `Yes, a fully paid-up subscriber is permitted to resell with Page Mansion's management approval. The buyer's details must be submitted for proper documentation.
`,
   },
   {
     title: 'Do I need approval before building?',
     content: `Yes. All architectural drawings must first be approved by Page Mansion Management and then submitted to the Abuja State Government. A soil test is also required before construction.`,
   },
   {
     title: ` What is the refund policy if I can't continue payment?`,
     content: `Refunds may be granted with a 25% administrative fee deducted from the full property price. If less than 25% has been paid, no refund applies. Refunds are processed within 90 days after submitting a formal discontinuation letter.`,
   },
 ]

export const FaqSection = () => {
      const [showItems, setShowItems] = useState<boolean[]>(() => Array(questions.length).fill(false));

      const toggleShowItem = (index: number) => {
        setShowItems((prev) => prev.map((item, i) => (i === index ? !item : item)))
      }

 
  return (
    <>
      <div className="mb-20">
        <FadeIn>
          <div className="py-11 container mx-auto">
            <motion.span
              className="p-3 border border-[#194754] text-[#194754] rounded-3xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              FAQs
            </motion.span>
          </div>
        </FadeIn>

        <div className="py-11 container mx-auto bg-[#F4F4F4] rounded-xl">
          <motion.h2
            className="text-3xl text-center font-bold py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>

          {questions.map((question, index) => (
            <div key={index} className="w-full  bg-white rounded-3xl shadow-2xl  my-4">
              <div className="w-full py-4 px-4">
                <div className="flex gap-2 items-center justify-between">
                  <p className="text-lg font-semibold">{question.title}</p>
                  <div className="my-4 pr-6">
                    <button onClick={() => toggleShowItem(index)}>
                      {showItems[index] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="32"
                          height="32"
                          fill="currentColor"
                        >
                          <path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="32"
                          height="32"
                          fill="currentColor"
                        >
                          <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                {showItems[index] && (
                  <>
                    <div className="bg-[#F4F4F4] p-3 rounded-xl">
                      <p className="text-black">{question.content}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
