import { cn } from '@/lib/utils'
import { Bot } from 'lucide-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { Message } from 'ai'

export interface AIChatMessageProps {
  message: Message
}

const AIChatMessage = ({ message: { role, content } }: AIChatMessageProps) => {
  const isAiMessage = role === 'assistant'

  return (
    <div
      className={cn(
        'mb-3 flex items-center',
        isAiMessage ? 'me-5 justify-start' : 'ms-5 justify-end',
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          'rounded-md border px-3 py-2',
          isAiMessage ? 'bg-background' : 'bg-foreground text-background',
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ ...props }) => (
              <Link
                {...props}
                href={props.href ?? ''}
                className="text-primary hover:underline"
              />
            ),
            p: ({ ...props }) => <p {...props} className="mt-3 first:mt-0" />,
            ul: ({ ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default AIChatMessage
