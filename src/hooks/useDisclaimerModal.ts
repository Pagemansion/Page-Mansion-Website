import { useState, useEffect } from 'react'

export function useDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Check if disclaimer has been shown before
    const disclaimerShown = localStorage.getItem('pageMansionDisclaimerShown')

    if (!disclaimerShown) {
      // Set timer for 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isMounted])

  const closeModal = () => {
    setIsOpen(false)
    // Mark as shown in localStorage so it doesn't show again
    if (isMounted) {
      localStorage.setItem('pageMansionDisclaimerShown', 'true')
    }
  }

  const resetDisclaimer = () => {
    if (isMounted) {
      localStorage.removeItem('pageMansionDisclaimerShown')
    }
    setHasShown(false)
    setIsOpen(false)
  }

  return {
    isOpen,
    closeModal,
    resetDisclaimer,
    hasShown,
  }
}
