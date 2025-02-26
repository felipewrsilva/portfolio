/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { DictionaryContext } from '@/components/PageContent'

export const Approach = () => {
  const dict = useContext(DictionaryContext)

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">{dict.page.approach}</span>
      </h1>
      <div className="my-20 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title={dict.page.approaches[0].title}
          icon={<AceternityIcon order="Phase 1" />}
          des={dict.page.approaches[0].description}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title={dict.page.approaches[1].title}
          icon={<AceternityIcon order="Phase 2" />}
          des={dict.page.approaches[1].description}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title={dict.page.approaches[2].title}
          icon={<AceternityIcon order="Phase 3" />}
          des={dict.page.approaches[2].description}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

export default Approach

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
  des: string
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-black opacity-30 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="absolute left-[50%] top-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 select-none text-center text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
        <p
          className="relative z-10 mt-4 select-none text-center text-sm opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
          style={{ color: '#E4ECFF' }}
        >
          {des}
        </p>
      </div>
    </div>
  )
}
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer select-none items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-purple backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
