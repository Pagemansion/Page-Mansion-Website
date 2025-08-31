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

    // Check when disclaimer was last shown and how many times today
    const disclaimerData = localStorage.getItem('pageMansionPropertyDisclaimerData')
    const now = Date.now()
    const eightHoursInMs = 8 * 60 * 60 * 1000 // 8 hours in milliseconds

    let shouldShow = true

    if (disclaimerData) {
      try {
        const { lastShown, count, date } = JSON.parse(disclaimerData)
        const today = new Date().toDateString()
        const lastShownDate = new Date(date).toDateString()

        // If it's the same day
        if (today === lastShownDate) {
          // If shown 3 times today, don't show
          if (count >= 3) {
            shouldShow = false
          }
          // If shown before, only show if 8+ hours have passed
          else if (count > 0 && now - lastShown < eightHoursInMs) {
            shouldShow = false
          }
        }
        // If it's a new day, reset and show

        console.log('Property disclaimer check:', {
          today,
          lastShownDate,
          count,
          timeSinceLastShown: now - lastShown,
          shouldShow,
        })
      } catch (error) {
        console.log('Error parsing disclaimer data, will show modal')
        shouldShow = true
      }
    }

    if (shouldShow) {
      console.log('Setting timer for property disclaimer...')
      const timer = setTimeout(() => {
        console.log('Showing property disclaimer modal')
        setIsOpen(true)
        setHasShown(true)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      console.log('Property disclaimer already shown enough times today, skipping')
    }
  }, [isMounted])

  const closeModal = () => {
    setIsOpen(false)

    // Update localStorage with show count and timestamp
    if (isMounted) {
      const now = Date.now()
      const today = new Date().toDateString()
      const existingData = localStorage.getItem('pageMansionPropertyDisclaimerData')

      let count = 1

      if (existingData) {
        try {
          const { count: existingCount, date } = JSON.parse(existingData)
          const existingDate = new Date(date).toDateString()

          // If same day, increment count
          if (today === existingDate) {
            count = existingCount + 1
          }
          // If new day, reset to 1
        } catch (error) {
          count = 1
        }
      }

      const disclaimerData = {
        lastShown: now,
        count: count,
        date: today,
      }

      localStorage.setItem('pageMansionPropertyDisclaimerData', JSON.stringify(disclaimerData))
      console.log('Updated disclaimer data:', disclaimerData)
    }
  }

  const resetDisclaimer = () => {
    if (isMounted) {
      localStorage.removeItem('pageMansionPropertyDisclaimerData')
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
