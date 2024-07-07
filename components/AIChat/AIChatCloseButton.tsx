import { XCircle } from 'lucide-react'
import React from 'react'

interface CloseButtonProps {
  onClose: () => void
}

const AIChatCloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button onClick={onClose} className="mb-1 ml-auto block">
      <XCircle size={30} className="rounded-full bg-background" />
    </button>
  )
}

export default AIChatCloseButton
