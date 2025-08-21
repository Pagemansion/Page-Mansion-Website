'use client'

import { motion, Variants, useTransform, useScroll, animate } from 'motion/react'
import { ReactNode, useState, useEffect } from 'react'

// Fade in animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide in from left animation variants
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Slide in from right animation variants
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Scale up animation variants
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Stagger children animation variants
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

// Hover animation variants
export const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

// Parallax scroll animation variants
export const parallaxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

// Fade in with delay
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide in from left
export const SlideInLeft = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide in from right
export const SlideInRight = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Scale up animation
export const ScaleUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Stagger container for multiple children
export const StaggerContainer = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    variants={staggerContainerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Hoverable card with scale effect
export const HoverCard = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants} className={className}>
    {children}
  </motion.div>
)

// Parallax scroll effect
export const ParallaxScroll = ({
  children,
  speed = 0.5,
  className = '',
}: {
  children: ReactNode
  speed?: number
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Animated counter
export const AnimatedCounter = ({
  value,
  duration = 2,
  className = '',
}: {
  value: number
  duration?: number
  className?: string
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate: (value) => setCount(Math.floor(value)),
    })

    return controls.stop
  }, [value, duration])

  return <span className={className}>{count}</span>
}

// Floating animation
export const Floating = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Pulse animation
export const Pulse = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Bounce animation
export const Bounce = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Rotate animation
export const Rotate = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Typewriter effect
export const Typewriter = ({
  text,
  speed = 50,
  className = '',
}: {
  text: string
  speed?: number
  className?: string
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return <span className={className}>{displayText}</span>
}
