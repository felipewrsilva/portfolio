'use client'

import { Bot } from 'lucide-react'
import React, { useState } from 'react'
import AIChatBox from '@/components/AIChat/AIChatBox'

const AIChatButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={32} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  )
}

export default AIChatButton
