import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Clients from '@/components/Clients'
import FeaturedCase from '@/components/FeaturedCase'
import Achievements from '@/components/Achievements'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Languages from '@/components/Languages'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function PageContent() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Summary />
      <Clients />
      <FeaturedCase />
      <Achievements />
      <Technologies />
      <Experience />
      <Education />
      <Languages />
      <Contact />
      <WhatsAppButton />
    </>
  )
}
