'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '@/data/cv'

export default function WhatsAppButton() {
  return (
    <div className="floating_btn">
      <a
        href={profile.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send WhatsApp message"
      >
        <div className="contact_icon">
          <FaWhatsapp className="my-float" aria-hidden="true" />
        </div>
      </a>
    </div>
  )
}
