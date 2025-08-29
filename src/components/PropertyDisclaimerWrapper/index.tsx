'use client'

import DisclaimerModal from '@/components/DisclaimerModal'
import { usePropertyDisclaimerModal } from '@/hooks/usePropertyDisclaimerModal'

export default function PropertyDisclaimerWrapper() {
  const { isOpen, closeModal } = usePropertyDisclaimerModal()

  console.log('PropertyDisclaimerWrapper rendered:', { isOpen })

  return <DisclaimerModal isOpen={isOpen} onClose={closeModal} />
}
