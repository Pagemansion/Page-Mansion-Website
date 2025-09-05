'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface DisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close disclaimer"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#194754] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-center text-gray-900 mb-4">
              Important Payment Notice
            </h2>

            {/* Disclaimer message */}
            <div className="text-gray-700 text-center space-y-3 mb-6">
              <p className="leading-relaxed">
                <strong>⚠️ DISCLAIMER:</strong> All payments for Page Mansions Real Estate Limited services must
                be made to accounts bearing the company name <strong>&quot;Page Mansions&quot;</strong> only.
              </p>
              <p className="text-sm text-gray-600">
                For your security, please verify all payment details and never transfer funds to
                personal accounts or third-party accounts not officially associated with Page
                Mansions Limited.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={onClose}
                className="w-full bg-[#194754] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#194754]/90 transition-colors duration-200 cursor-pointer"
              >
                I Understand
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
              >
                Remind Me Later
              </button>
            </div>

            {/* Footer note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              For payment verification, contact our support team
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
