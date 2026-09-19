import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Strip protocol and trailing slash for display links. */
export function displayHost(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
