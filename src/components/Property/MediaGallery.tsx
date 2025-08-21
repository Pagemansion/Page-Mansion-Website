'use client'

import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Media as MediaType } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'

type ImageItem = { image: MediaType } | MediaType

export function MediaGallery({ images }: { images: ImageItem[] }) {
  const normalized: MediaType[] = useMemo(() => {
    return (images || [])
      .map((item) => ('image' in (item as any) ? (item as any).image : item))
      .filter(Boolean) as MediaType[]
  }, [images])

  const [index, setIndex] = useState(0)

  const canGoPrev = index > 0
  const canGoNext = index < normalized.length - 1

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => (i < normalized.length - 1 ? i + 1 : i))
  }, [normalized.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext])

  if (!normalized.length) return null

  return (
    <section className="relative w-full">
      {/* Main media */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={normalized[index]?.id ?? index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <MediaComponent resource={normalized[index]} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        {normalized.length > 1 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
            <button
              aria-label="Previous image"
              onClick={goPrev}
              disabled={!canGoPrev}
              className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-black px-3 py-2 disabled:opacity-40"
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              onClick={goNext}
              disabled={!canGoNext}
              className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-black px-3 py-2 disabled:opacity-40"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails strip */}
      {normalized.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {normalized.map((img, i) => (
            <motion.button
              key={img.id ?? i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative h-20 w-28 min-w-28 overflow-hidden rounded-lg border ${
                index === i ? 'border-[#194754]' : 'border-white'
              }`}
            >
              <MediaComponent resource={img} className="h-full w-full object-cover" />
              {index === i && (
                <motion.span
                  layoutId="thumb-indicator"
                  className="absolute inset-0 ring-2 ring-[#194754] rounded-lg"
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </section>
  )
}
