import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'
import CloseButton from '@/components/AIChat/CloseButton'
import AIChatInput from '@/components/AIChat/Input'
import AIChatMessageBody from '@/components/AIChat/MessageBody'

interface AIChatBoxProps {
  open: boolean
  onClose: () => void
}

const AIChatBox = ({ open, onClose }: AIChatBoxProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat()

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  const lastMessageIsUser = messages[messages.length - 1]?.role === 'user'

  return (
    <div
      className={cn(
        'fixed bottom-10 right-2 top-2 z-50 max-w-md p-1',
        open ? 'block' : 'hidden',
      )}
    >
      <CloseButton onClose={onClose} />
      <div className="flex h-full flex-col overflow-hidden rounded border shadow-xl dark:bg-black-100">
        <AIChatMessageBody
          messages={messages}
          isLoading={isLoading}
          error={error}
          scrollRef={scrollRef}
          lastMessageIsUser={lastMessageIsUser}
        />
        <AIChatInput
          handleSubmit={handleSubmit}
          setMessages={setMessages}
          input={input}
          handleInputChange={handleInputChange}
          inputRef={inputRef}
        />
      </div>
    </div>
  )
}

export default AIChatBox
