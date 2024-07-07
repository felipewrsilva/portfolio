import { NextRequest, NextResponse } from 'next/server'
import { Message as VercelChatMessage, StreamingTextResponse } from 'ai'

import { ChatOpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { HttpResponseOutputParser } from 'langchain/output_parsers'

export const runtime = 'edge'

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`
}
const TEMPLATE = `
Felipe Silva is a Senior Full Stack Developer in São Paulo, Brazil, specializing in CI/CD pipelines and scalable cloud projects. At IQVia, he cut deployment time by 40% and boosted software quality by 50%. His work at Sollana and UniChem highlights his full-stack development and database optimization skills.

Felipe is skilled in .Net Core/C#, React, Node.js, Git, Docker, SQL Server, MySQL, and Azure. His projects include secure financial platforms and modern e-commerce solutions. Fluent in English and Portuguese, he excels in collaboration and backend systems.

Contact: felipewrsilva@gmail.com.

Current conversation:
{chat_history}

User: {input}
AI:
`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const messages = body.messages ?? []
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage)
    const currentMessageContent = messages[messages.length - 1].content
    const prompt = PromptTemplate.fromTemplate(TEMPLATE)

    const model = new ChatOpenAI({
      temperature: 0.8,
      model: 'gpt-3.5-turbo-0125',
    })

    const outputParser = new HttpResponseOutputParser()

    const chain = prompt.pipe(model).pipe(outputParser)

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join('\n'),
      input: currentMessageContent,
    })

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error },
      { status: (error as { status?: number })?.status ?? 500 },
    )
  }
}
