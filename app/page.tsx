import FAQ from '@/components/FAQ'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/work'


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <FAQ />
      <Contact />
    </main>
  )
}
