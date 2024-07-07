import { Trash, SendHorizontal } from 'lucide-react'
import { Message } from 'ai/react'
import React from 'react'

interface AIChatSentProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setMessages: (messages: Message[]) => void
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputRef: React.RefObject<HTMLInputElement>
}

const AIChatInput = ({
  handleSubmit,
  setMessages,
  input,
  handleInputChange,
  inputRef,
}: AIChatSentProps) => {
  return (
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
  )
}

export default AIChatInput
