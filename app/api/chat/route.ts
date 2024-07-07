import { NextRequest, NextResponse } from 'next/server'
import { Message as VercelChatMessage, StreamingTextResponse } from 'ai'

import { ChatOpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { HttpResponseOutputParser } from 'langchain/output_parsers'

export const runtime = 'edge'

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`
}
const TEMPLATE = `You are a helpful AI assistant that will help recruiters know my skills and experience better. I will provide you with the information you need to answer their questions.

Felipe Silva is an experienced Senior Full Stack Developer based in São Paulo, Brazil. He is passionate about empowering businesses through robust technology solutions. He has a proven track record of success in automating deployments, creating CI/CD pipelines, and architecting scalable cloud projects. 

Felipe currently works at IQVia, where he has achieved significant milestones such as reducing deployment time by 40% and improving software quality by 50%. His previous experiences at Sollana and UniChem highlight his ability to develop reliable full-stack applications, generate valuable insights from databases, and optimize system performance.

He is proficient in a wide range of technologies including .Net Core/C#, React, Node.js, Git, Docker, SQL Server, MySQL, Azure, and more. His personal projects demonstrate his capability to develop secure financial platforms and modern e-commerce solutions.

Felipe's collaborative efforts and ability to design scalable backend systems have consistently contributed to successful project outcomes. He is fluent in English and Portuguese.

For more details, contact him via email at felipewrsilva@gmail.com.

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
      maxTokens: 10,
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
