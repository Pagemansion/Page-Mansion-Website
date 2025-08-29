import { useState, useEffect } from 'react'

export function usePropertyDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Check if disclaimer has been shown before
    const disclaimerShown = localStorage.getItem('pageMansionPropertyDisclaimerShown')

    console.log('Property disclaimer check:', { disclaimerShown, isMounted })

    if (!disclaimerShown) {
      console.log('Setting timer for property disclaimer...')
      // Set timer for 5 seconds
      const timer = setTimeout(() => {
        console.log('Showing property disclaimer modal')
        setIsOpen(true)
        setHasShown(true)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      console.log('Property disclaimer already shown, skipping')
    }
  }, [isMounted])

  const closeModal = () => {
    setIsOpen(false)
    // Mark as shown in localStorage so it doesn't show again
    if (isMounted) {
      localStorage.setItem('pageMansionPropertyDisclaimerShown', 'true')
    }
  }

  const resetDisclaimer = () => {
    if (isMounted) {
      localStorage.removeItem('pageMansionPropertyDisclaimerShown')
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
