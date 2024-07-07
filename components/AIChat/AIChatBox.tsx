import { cn } from '@/lib/utils'
import { toast } from 'react-toastify'
import { useChat } from 'ai/react'
import { useEffect, useRef, useState } from 'react'
import CloseButton from '@/components/AIChat/AIChatCloseButton'
import { Trash, SendHorizontal, Bot } from 'lucide-react'
import AIChatMessage from './AIChatMessage'

interface AIChatBoxProps {
  open: boolean
  onClose: () => void
}

const AIChatBox = ({ open, onClose }: AIChatBoxProps) => {
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, unknown>
  >({})

  const {
    messages,
    input,
    error,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat({
    onResponse(response) {
      const sourcesHeader = response.headers.get('x-sources')
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, 'base64').toString('utf8'))
        : []
      const messageIndexHeader = response.headers.get('x-message-index')
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        })
      }
    },
    streamMode: 'text',
    onError: (e) => {
      toast(e.message, {
        theme: 'dark',
      })
    },
  })

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
        'fixed bottom-10 right-2 top-2 z-50 w-screen max-w-md p-1',
        open ? 'block' : 'hidden',
      )}
    >
      <CloseButton onClose={onClose} />
      <div className="flex h-full flex-col overflow-hidden rounded border shadow-xl dark:bg-black-100">
        <div className="mt-3 flex-1 overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <AIChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <AIChatMessage
              message={{
                id: 'loading',
                role: 'assistant',
                content: 'Thinking...',
              }}
            />
          )}
          {error && (
            <AIChatMessage
              message={{
                id: 'error',
                role: 'assistant',
                content: 'Something went wrong. Please try again!',
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot size={28} />
              <p className="text-lg font-medium">
                Send a message to start the AI chat!
              </p>
              <p>
                You can ask the chatbot any question about me and it will find
                the relevant information on this website.
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <button
            type="button"
            className="flex w-10 flex-none items-center justify-center"
            title="Clear chat"
            onClick={() => setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="grow rounded border px-3 py-2 dark:bg-black-100"
            ref={inputRef}
          />
          <button
            type="submit"
            className="flex w-10 flex-none items-center justify-center disabled:opacity-50"
            disabled={input.length === 0}
            title="Submit message"
          >
            <SendHorizontal size={24} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AIChatBox
