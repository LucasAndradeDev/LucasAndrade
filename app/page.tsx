'use client' // Adicionado no topo para definir o arquivo como Client Component

import BackToTopButton from '@/components/BackToTopButton'
import FAQ from '@/components/FAQ'
import ButtonWpp from '@/components/button.wpp'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/work'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'


export default function Home() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <main className='justify-center items-center'>
        <Hero />
        <Services />
        <Work />
        <FAQ />
        <ButtonWpp />
        <BackToTopButton />
        <Contact />
      </main>
    </QueryClientProvider>
  )
}
