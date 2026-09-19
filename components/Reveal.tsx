'use client'

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  delay?: number
  as?: 'div' | 'li'
}

export function Reveal({ children, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  // SSR and first paint stay fully visible; animation arms only after JS
  // confirms the element is below the fold.
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const node = ref.current
    if (!node) return

    const viewportBottom = window.innerHeight - 80
    const rect = node.getBoundingClientRect()
    const inView = rect.top < viewportBottom && rect.bottom > 0
    if (inView) return

    setArmed(true)
    setVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-80px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: cn(
        armed && !visible ? 'reveal-pending' : 'reveal-ready',
        armed && visible && 'rise',
      ),
      style: armed && visible ? { animationDelay: `${delay}s` } : undefined,
    },
    children,
  )
}
