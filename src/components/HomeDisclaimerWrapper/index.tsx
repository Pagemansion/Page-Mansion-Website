'use client'

import { useDisclaimerModal } from '@/hooks/useDisclaimerModal'
import DisclaimerModal from '@/components/DisclaimerModal'

export default function HomeDisclaimerWrapper() {
  const { isOpen, closeModal } = useDisclaimerModal()

  return <DisclaimerModal isOpen={isOpen} onClose={closeModal} />
}
