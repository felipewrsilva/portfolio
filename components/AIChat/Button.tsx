'use client'

import { Bot } from 'lucide-react'
import React, { useState } from 'react'
import AIChatBox from '@/components/AIChat/Box'

const AIChatButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false)

  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  )
}

export default AIChatButton
