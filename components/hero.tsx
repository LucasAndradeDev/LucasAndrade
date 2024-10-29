import { Download } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'

const Hero = () => {
  return (
    <section className='w-f pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8 py-10'>
          {/* text */}

          <div className='text-center xl:text-left'>
            <span>Olá, eu sou</span>
            <h1 className='text-[40px] font-bold capitalize leading-[3rem]'>
              Lucas <br />
              <span className='under-line'>Andrade</span>
            </h1>
            <div className='py-8 max-w-2xl'>
              <p>
                Desenvolvedor full-stack apaixonado por criar soluções que transformam ideias em valor real.
                Estou sempre em busca de novas tecnologias e práticas para entregar produtos de alta qualidade.
                <br />
              </p>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className="flex gap-x-2">
                <Link
                  href="https://aromatic-amusement-f87.notion.site/Curr-culo-9883ea293e9a4fe48217189abf35f58c"
                  target="_blank"
                  className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted"
                >
                  <span className="text-sm">Acesse meu CV</span>
                  <Download className="w-5 h-5" />
                </Link>
              </div>
              <div className='flex py-4 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* image */}


        </div>
      </div>
    </section>
  )
}

export default Hero
