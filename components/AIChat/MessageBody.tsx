import { Bot } from 'lucide-react'
import { Message } from 'ai/react'
import AIChatMessage from '@/components/AIChat/Message'

interface AIChatMessageBodyProps {
  messages: Message[]
  isLoading: boolean
  error: Error | undefined
  scrollRef: React.RefObject<HTMLDivElement>
  lastMessageIsUser: boolean
}

const AIChatMessageBody = ({
  messages,
  isLoading,
  error,
  scrollRef,
  lastMessageIsUser,
}: AIChatMessageBodyProps) => {
  return (
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
            You can ask the chatbot any question about me and it will find the
            relevant information on this website.
          </p>
        </div>
      )}
    </div>
  )
}

export default AIChatMessageBody
