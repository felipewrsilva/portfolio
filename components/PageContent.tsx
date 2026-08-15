import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import FeaturedCase from '@/components/FeaturedCase'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Background from '@/components/Background'
import Contact from '@/components/Contact'

export default function PageContent() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Summary />
      <FeaturedCase />
      <Experience />
      <Technologies />
      <Background />
      <Contact />
    </>
  )
}
