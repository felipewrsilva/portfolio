import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import FeaturedCase from '@/components/FeaturedCase'
import Achievements from '@/components/Achievements'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Background from '@/components/Background'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function PageContent() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Summary />
      <Achievements />
      <FeaturedCase />
      <Experience />
      <Technologies />
      <Background />
      <Contact />
      <WhatsAppButton />
    </>
  )
}
