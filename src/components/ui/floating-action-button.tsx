'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Mail, X } from 'lucide-react'

interface ContactOption {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  hoverColor: string
  action: () => void
}

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const contactOptions: ContactOption[] = [
    {
      id: 'call',
      label: 'Give us a call!',
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      action: () => window.open('tel:+2347068273081', '_self'),
    },
    {
      id: 'whatsapp',
      label: "Let's chat!",
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      action: () => window.open('https://wa.me/+2347068273081', '_blank'),
    },
    {
      id: 'email',
      label: 'Email us!',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      action: () => window.open('mailto:pagemansionsltd@gmail.com', '_self'),
    },
  ]

  // Periodic shaking animation
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      if (!isExpanded) {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 1000)
      }
    }, 8000) // Shake every 8 seconds

    return () => clearInterval(shakeInterval)
  }, [isExpanded])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="fixed bottom-6 right-6 z-10 pointer-events-none">
      {/* Contact Options */}
      <div className="flex flex-col items-end space-y-3 mb-4">
        {contactOptions.map((option, index) => (
          <div
            key={option.id}
            className={`transform transition-all duration-300 ease-in-out ${
              isExpanded
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
            }`}
            style={{
              transitionDelay: isExpanded
                ? `${index * 50}ms`
                : `${(contactOptions.length - index - 1) * 50}ms`,
            }}
          >
            <div className="flex items-center space-x-3">
              {/* Label */}
              <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap pointer-events-auto">
                <span className="text-sm font-medium text-gray-800">{option.label}</span>
              </div>

              {/* Button */}
              <button
                onClick={option.action}
                className={`
                  ${option.color} ${option.hoverColor}
                  w-12 h-12 rounded-full shadow-lg
                  flex items-center justify-center
                  text-white transition-all duration-200
                  hover:scale-110 active:scale-95
                  pointer-events-auto
                `}
              >
                {option.icon}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main FAB with "Got any questions?" tooltip */}
      <div className="flex items-center space-x-3">
        {/* "Got any questions?" tooltip - only show when collapsed */}
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            !isExpanded
              ? 'translate-x-0 opacity-100 scale-100'
              : 'translate-x-4 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm pointer-events-auto">
            Got any questions?
          </div>
        </div>

        {/* Main FAB Button */}
        <button
          onClick={toggleExpanded}
          className={`
            w-14 h-14 rounded-full shadow-lg
            flex items-center justify-center
            text-white transition-all duration-300
            hover:scale-110 active:scale-95
            pointer-events-auto
            ${isExpanded ? 'bg-gray-600 hover:bg-gray-700 rotate-45' : 'bg-green-500 hover:bg-green-600'}
            ${isShaking && !isExpanded ? 'animate-shake' : ''}
          `}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}
